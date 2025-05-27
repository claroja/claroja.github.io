from pathlib import Path
path = Path('./src')
lines = []
def func(path, head_count):
    head_count += 1

    mdfiles = list(path.glob('./*.md'))
    # 如果包含.md文件且非index.md, 则拼贴.md文件名称
    if len(mdfiles) != 0 and (Path('./src/index.md') not in mdfiles):
        dirs = [x for x in path.iterdir() if x.is_dir()] 
        for dir in dirs:
            if '_' in dir.parts[-1]:
                dir.replace(dir.parent.joinpath(dir.parts[-1].split('_')[-1]))
        
        
        for mdfile in mdfiles:
            if '_' in mdfile.stem:
                lines = mdfile.read_text(encoding='utf8').split('\n')
                lines[0] = '# ' + mdfile.stem.split('_')[-1]
                mdfile.write_text('\n'.join(lines),encoding='utf8')
                mdfile.replace(mdfile.with_stem(mdfile.stem.split('_')[-1]))
    # 如果全是目录, 则依次遍历
    else:
        for x in path.iterdir():
            if x.is_dir() and x != Path('./src/.vuepress'): 
                print(x)
                func(x,head_count)
func(path, 0)
