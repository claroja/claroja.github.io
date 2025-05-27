from pathlib import Path
from pypinyin import pinyin, Style
from itertools import chain
import re
import shutil
import os

path = Path('./docs')
lines = []
root_list = []

HEADLEVEL = 4 # 从4级目录开始，使用列表表示

# 删除索引目录文件(在计算目录时, 不应该把索引计算在内, 所以要先删除)
indexDir_path = Path('./docs/index')
if indexDir_path.exists(): shutil.rmtree(indexDir_path)

def getH(filePath):
    """根据文件或目录名生成一个排序键，优先按文件名开头的数字排序，若数字位数为 1 则在前面补 0，再按文件名的拼音排序。
    """

    filename = filePath.parts[-1]

    res = re.search(r'^\d+', filename)

    if res:
        res = res.group(0)

        if len(res) == 1:
            filename = '0' + filename

    return ''.join(chain.from_iterable(pinyin(filename, style=Style.NORMAL)))


def func(path, head_count, root_list):
    """递归函数，其主要作用是遍历指定目录下的文件和子目录，根据目录层级生成不同格式的内容，用于创建 index.md 文件和 sidebar.ts 文件。

    Args:
        path (Path): 要遍历的目录路径
        head_count (number): 当前目录的层级深度
        root_list (list): 存储侧边栏导航信息
    """
    # 进入当前目录后，将目录层级深度加 1
    head_count += 1  
    
    # 获得当前目录下的所有.md文件和子目录名称
    dir_names = [d.name for d in path.iterdir() if d.is_dir()]
    mdfiles = list(path.glob('./*.md'))


    # 给目录页添加标题
    if head_count >= HEADLEVEL:  # 当标题深度大于HEADLEVEL时, 使用缩进表示
        lines.append('\t' * (head_count-HEADLEVEL) + '-' + ' ' + f'{path.parts[-1]}' + ' ')
    else:  # 当标题深度小于HEADLEVEL时, 使用`#`表示
        lines.append('#' * head_count + ' ' + f'{path.parts[-1]}\n')

    # 处理目录
    if len(dir_names)!=0:

        # 将目录添加到侧边栏列表中
        for x in sorted(path.iterdir(), key=getH):
            if x.is_dir():
                new_dir = {
                    'text': f'📂{x.parts[-1]}',
                    'collapsed': 'true',
                    'items': []
                }
                # 是目录, 且不是.vitepress, 且该目录下有.md文件或者子目录(排除仅含有图片的或者空目录)
                has_md_files = any(x.glob('./*.md'))  # 判断当前目录是否包含 .md 文件
                has_sub_dirs = any(child.is_dir() for child in x.iterdir())  # 判断当前目录是否有子目录
                if x.is_dir() and x != Path('./docs/.vitepress') and (has_md_files or has_sub_dirs): 
                    root_list.append(new_dir)
                    func(x, head_count, new_dir['items'])

    # 处理文档
    if len(mdfiles) != 0 and (Path('./docs/index.md') not in mdfiles): # 如果不是空目录或者非根目录, 则拼贴.md文件名称

        # 给目录页标题下添加具体文章链接
        line = []
        for mdfile in sorted(mdfiles, key=getH):
            line.append(f'[{mdfile.stem}](/{mdfile.as_posix().replace("docs/", "")})')  # # 处理sidebar.ts
            root_list.append({
                'text': f'📝{mdfile.stem}',
                'link': mdfile.as_posix().replace("docs/", ""),
            })
        lines.append('📝'+'📝'.join(line)+'\n')


func(path, 0, root_list)

# ## 生成一个首页
# with open('./docs/index.md','w',encoding='utf8') as f:
#     lines[0]= '# 首页\n'
#     f.write(''.join(lines))


## 生成多个首页, 通过导航栏进行跳转

### 定义保存文件的文件夹

save_folder = './docs/index'

### 如果文件夹不存在，则创建它

if not os.path.exists(save_folder):
    os.makedirs(save_folder)

current_title = None
current_content = []

### 删除第一行
del lines[0]


def reduce_hash_count(line):
    if line.startswith('#'):
        return line[1:]
    return line

### 生成index.md
for line in lines:
    if line.startswith('## '):
        # 如果已经有当前标题，说明之前的内容块结束，保存到文件
        if current_title:
            file_path = os.path.join(save_folder, f"{current_title.strip()}.md")
            with open(file_path, 'w', encoding='utf-8') as f:
                for content_line in current_content:
                    f.write(reduce_hash_count(content_line))
            current_content = []
        # 处理当前标题行，将 # 数量减 1 后添加到内容中
        current_content.append(line)
        # 更新当前标题
        current_title = line[2:].strip()
    else:
        # 如果不是标题行，将内容添加到当前内容块
        current_content.append(line)

# 处理最后一个内容块
if current_title and current_content:
    file_path = os.path.join(save_folder, f"{current_title.strip()}.md")
    with open(file_path, 'w', encoding='utf-8') as f:
        for content_line in current_content:
            f.write(reduce_hash_count(content_line))

## 生成侧边栏索引: sidebar.ts

content = [
    'let sidebar: any',
    'export default sidebar = [',
    '{',
    f'items: {root_list}',
    '}];'
]

with open('./docs/.vitepress/sidebar.ts','w',encoding='utf8') as f:
    f.write('\n'.join(content))


## 生成导航索引: navbar.ts

nav_list = []

path = Path('./docs')
for dir in sorted(list(path.iterdir()), key=getH):
    if dir.is_dir() and dir != Path('./docs/.vitepress') and dir != Path('./docs/index'):
        new_dir = {
            'text': re.sub(r'^\d+', '', dir.parts[-1]),
            'link': f"/index/{dir.parts[-1]}.md",
            'items': []
        }
        # 导航栏不要二级了
        # for dir_2 in sorted(list(Path(f'./docs/{dir.parts[-1]}').iterdir()), key=getH):
        #     if dir_2.is_dir() and dir != Path('./docs/.vitepress'):
        #         new_dir_2 ={
        #             'text': re.sub(r'^\d+', '', dir_2.parts[-1]),
        #             'link': f"/#{dir_2.parts[-1]}",
        #         }
        #         new_dir['items'].append(new_dir_2)
        if len(new_dir['items']) == 0:
            del new_dir['items']
        
        nav_list.append(new_dir)

content = [
    'let navbar: any',
    'export default navbar =',
    f'{nav_list}',
    ';'
]

with open('./docs/.vitepress/navbar.ts','w',encoding='utf8') as f:
    f.write('\n'.join(content))
