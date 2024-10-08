<script>
    export let mdtext;

    import { onMount } from "svelte";

    import './rainbow.css';

    import { remark } from 'remark'
    import remarkRehype from 'remark-rehype'
    import rehypeslug from 'rehype-slug'
    import rehypeStringify from 'rehype-stringify'
    import remarkgfm from 'remark-gfm'
    import remarkBreaks from "remark-breaks"
    import rehypeHighlight from 'rehype-highlight'
    import rehypeExternalLinks from 'rehype-external-links'

    let md = remark()
        .use(remarkBreaks)   // 改行
        .use(remarkgfm)      // Github Markdown
        .use(remarkRehype, {allowDangerousHtml: true})
        .use(rehypeslug)     // headingにidを設定
        .use(rehypeHighlight)// Syntax highlight
        .use(rehypeExternalLinks, {target:'_blank', rel:['noreferrer','noopener']})// 外部サイトを新規タブで開く
        .use(rehypeStringify, {allowDangerousHtml: true})
        .processSync(mdtext)

    onMount(()=>{
        let toggleHide = function(e){

            let iframes = document.getElementsByTagName('iframe')
            for ( let i = 0; i < iframes.length; i++ ){
                try{
                    console.log(iframes[i].contentWindow.name)
                    if (e.origin === window.origin && iframes[i].contentWindow.name == e.data.id){
                        iframes[i].classList.toggle('hide')
                    }
                }catch(e){
                    console.log(e)
                }
            }
        }
        window.addEventListener('message', toggleHide)

        return ()=>{window.removeEventListener('message', toggleHide)}
    })
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
            padding-top: 25px;
            @media(width>999px){padding-top:50px;margin-top:0;}
        }
        & h2::before {
            display: inline-block;
            content: '';
            margin-right: 4px;
            width: 3px;
            height: 1.2em;
            vertical-align: text-bottom;
            background-color: var(--theme-color);
        }

        /*
        & h3 {
            padding-left: 2px;
            border-left: 2px solid var(--header-line);
        }
        */

        & p {
            margin: 0 1.5em;
            line-height: 1.8em;
            @media (width<480px) {
                margin: 0 .5em;
            }
        }

        & li {
            line-height: 1.5em;
        }

        & img {
            display: block;
            width: 90%;
            margin: 1em auto;
        }

        & code {
            font-size: 1rem;
            margin: 0 3px;
            padding: 0 3px;
            border-radius: 3px;
            background-color: var(--code-color);
        }
        & pre {
            margin: 16px;
            padding: 16px;
            box-sizing: border-box;
            border-radius: 8px;
            background-color: var(--code-block);
            color: #d1d9e1;
            overflow-x: scroll;
            @media (width<480px) {
                margin: 0;
            }
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
            padding: .5em 0;
            border-top: 1px solid var(--font-color);
            border-bottom: 1px solid var(--font-color);

            & p::before {
                content: '';
                mask-image: url('data:image/svg+xml;utf-8,<svg version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><path d="m57.2 36.6-4.3 20.4h-20.5l3.8-17.9q3.3-16 10.4-23.5 7.2-7.5 16.8-8.6l-1.6 7.9q-11.7 3.2-15.7 21.7zm-31.8 0-4.3 20.4h-20.5l3.8-17.9q3.3-16 10.4-23.5 7.2-7.5 16.8-8.6l-1.6 7.9q-11.7 3.2-15.7 21.7z"/></svg>');
                width: .8em;
                height: .8em;
                position: absolute;
                background-color: var(--font-color);
                top: -.3em;
                left: -.9em;
            }
            & p::after {
                content: '';
                mask-image: url('data:image/svg+xml;utf-8,<svg version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><path d="m6.8 27.4 4.3-20.4h20.5l-3.8 17.9q-3.3 16-10.4 23.5-7.17 7.5-16.8 8.6l1.6-7.9q11.7-3.2 15.7-21.7zm31.8 0 4.3-20.4h20.5l-3.8 17.9q-3.3 16-10.4 23.5-7.17 7.5-16.8 8.6l1.6-7.9q11.7-3.2 15.7-21.7z"/></svg>');
                width: .8em;
                height: .8em;
                position: absolute;
                background-color: var(--font-color);
                bottom: -.3em;
                right: -.9em;
            }
        }
        & iframe {
            display: block;
            margin: 30px auto;
            border: none;
            width: 80%;
            aspect-ratio: 16/9;
            border-radius: 12px;
            box-shadow: 0px 6px 30px var(--frame-shadow);
            max-height: 75vh;
            transition: max-height .3s ease-in-out;
            &.hide {
                max-height: 30px;
            }
            @media(width<480px) {
                width: 100%;
                aspect-ratio: 4/3;
                box-shadow: 0px 4px 16px var(--frame-shadow);
            }
            @media(width>1280px) {
                width: 60%;
            }
            &[src*="youtube.com"]{
                aspect-ratio: 16/9;
            }
        }
        & video {
            display: block;
            margin: 30px auto;
            width: 80%;
            border-radius: 15px;
            box-shadow: 0px 6px 30px var(--frame-shadow);
            @media(width<480px) {
                width: 100%;
            }
            @media(width>1280px) {
                width: 60%;
            }
        }
    }
</style>