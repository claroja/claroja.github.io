# 注释


注释主要是给主文本内容加以解释, MD 中有三种方式.

- MD 的引用语法, `>`

    - MD 源码

        ```markdown
        这是原文

        > 这是注释
        ```

    - 显示效果
    
        这是原文

        > 这是注释


- MD 的悬停注释
    
    注意悬停注释要求被注释的词语必须和其他内容隔开, 如两边加空格, 或者其他英文符号
    
    - MD 源码

        ```markdown
        MD
        *[MD]: markdown
        ```


    - 显示效果

        MD

- MD 的脚注

    - MD 源码

        ```markdown
        Here's a simple footnote,[^1] and here's a longer one.[^bignote]

        [^1]: This is the first footnote.

        [^bignote]: Here's one with multiple paragraphs and code.

            Indent paragraphs to include them in the footnote.

            `{ my code }`

            Add as many paragraphs as you like.
        ```

    - 显示效果
    
        Here's a simple footnote,[^1] and here's a longer one.[^bignote]

        [^1]: This is the first footnote.

        [^bignote]: Here's one with multiple paragraphs and code.

            Indent paragraphs to include them in the footnote.

            `{ my code }`

            Add as many paragraphs as you like.

*[MD]: markdown