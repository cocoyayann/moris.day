<script>
    export let mdtext;

    import './rainbow.css';

    import { remark } from 'remark'
    import remarkRehype from 'remark-rehype'
    import rehypeslug from 'rehype-slug'
    import rehypeStringify from 'rehype-stringify'
    import remarkgfm from 'remark-gfm'
    import remarkBreaks from "remark-breaks"
    import rehypeHighlight from 'rehype-highlight'

    let md = remark()
        .use(remarkBreaks)   // 改行
        .use(remarkgfm)      // Github Markdown
        .use(remarkRehype)
        .use(rehypeslug)     // headingにidを設定
        .use(rehypeHighlight)// Syntax highlight
        .use(rehypeStringify)
        .processSync(mdtext)

</script>

<div class='markdown'>
    {@html md}
</div>

<style>    
    .markdown {
        width: 100%;

        & h1 {
            font-size: 2em;
            @media(width>999px){padding-top:50px;margin-top:0;}
        }
        & h1::before {
            display: inline-block;
            content: '';
            margin-right: 6px;
            width: 4px;
            height: 1.2em;
            vertical-align: bottom;
            background-color: var(--theme-color);
        }
        & h2 {
            @media(width>999px){padding-top:50px;margin-top:0;}
        }
        & h2::before {
            display: inline-block;
            content: '';
            margin-right: 4px;
            width: 3px;
            height: 1.2em;
            vertical-align: bottom;
            background-color: var(--theme-color);
        }

        /*
        & h3 {
            padding-left: 2px;
            border-left: 2px solid var(--header-line);
        }
        */
        & code {
            font-size: 1rem;
            margin: 0 3px;
            padding: 0 3px;
            border-radius: 3px;
            background-color: var(--code-color);
        }
        & pre {
            width: fit-content;
            max-width: 100%;
            padding: 8px;
            box-sizing: border-box;
            border-radius: 8px;
            background-color: #445;
            color: #d1d9e1;
            overflow-x: scroll;
            & code {
                margin: 0;
                padding: 0;
                border-radius: 0;
                background-color: #fff0;
            }
        }
        & blockquote {
            position: relative;
            font-style: italic;
            width: fit-content;
            border-top: 1px solid var(--font-color);
            border-bottom: 1px solid var(--font-color);

            & p::before {
                display: inline-block;
                content: '“';
                font-family: "ヒラギノ角ゴ Pro W3", sans-serif;
                font-size: 3rem;
                position: absolute;
                top: -1.5rem;
                left: -1.6rem;
            }
            & p::after {
                display: inline-block;
                content: '”';
                font-family: "ヒラギノ角ゴ Pro W3", sans-serif;
                font-size: 3rem;
                position: absolute;
                bottom: -3rem;
                right: -0.8rem;
            }
        }
    }
</style>