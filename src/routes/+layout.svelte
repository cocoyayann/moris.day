<script lang="ts">
    import '../app.css';
    import { onMount } from 'svelte';
    
    let scrollObserver: boolean = true;
    $: header = scrollObserver ? '':'hide';

    onMount(()=>{
        let observer = new IntersectionObserver(
            (entries)=>{scrollObserver = entries[0].isIntersecting},
            {rootMargin: "25px",threshold: 0}
        );
        observer.observe(document.querySelector("#scroll")!)
    });

    onMount(()=>console.log("%cスクリプト実行しろ\nは全て詐欺です。", "font-size:10em;color:red;font-weight:bold;"));
</script>


<div id="contents">
    <div id="scroll"></div>
    <header>
        <div id='h-container' class={header}>
            <div id='headercontents'>
                <a href="/">
                    <svg class="title" version="1.1" viewBox="0 0 256 64" xmlns="http://www.w3.org/2000/svg"><path fill="white" d="m0 45.6v-26.3h3.8v6c1.2-2.56 2.3-4.3 3.34-5.3 2.57-2.4 5-1.5 6.2 0 1.24 1.64 1.17 3.7 1.17 5.65 0.723-2.5 2.13-4.6 4.1-6.26 1.2-0.92 3.72-1.66 5.56 0.54 0.8 0.96 1.2 2.86 1.2 5.72v20h-3.8v-17.9c0-2.8-0.137-3.7-0.7-4.26-1.26-1.27-2.9 0.6-3.5 1.46-0.92 1.24-1.86 3.3-2.8 6.2v14.6h-3.65v-18c0-2.3-0.225-3.7-0.68-4.1-2.2-2-4.5 1.84-6.4 6.85v15.2zm41.4 0.73c-3.7 0-6.7-1.3-9-3.9-2.24-2.6-3.4-5.95-3.4-10s1.1-7.31 3.4-9.9 5.2-3.9 9-3.9c3.7 0 6.7 1.3 9 3.9s3.4 5.9 3.4 9.9-1.1 7.3-3.4 10c-2.24 2.6-5.2 3.9-9 3.9zm0-3.65c2.3 0 4.2-0.9 5.53-2.73 1.4-1.8 2.1-4.32 2.1-7.5 0-3.2-0.685-5.7-2.1-7.5-1.37-1.8-3.2-2.73-5.53-2.73-2.33 0-4.2 0.9-5.6 2.73-1.37 1.8-2.1 4.3-2.1 7.5 0 3.2 0.69 5.7 2.1 7.5 1.37 1.8 3.2 2.7 5.6 2.7zm20 2.9v-26.3h4.35v5.74c2.44-4 5.8-6.5 10.5-6.5 1.6 0 3.15 0.243 4.7 0.73v9.5h-4.2v-6c-5.3-1-8.7 3.5-11 7.53v15.3zm34 0v-22.6h-7.24v-3.65h11.6v22.6h7.27v3.65zm-0.724-36c0-1 0.34-1.73 1-2.2s1.3-0.73 1.9-0.73c0.6 0 1.24 0.24 1.92 0.73 0.67 0.49 1 1.2 1 2.2 0 0.97-0.335 1.7-1 2.2-0.67 0.49-1.3 0.73-1.9 0.73-0.6 0-1.22-0.24-1.9-0.73-0.675-0.49-1-1.2-1-2.2zm22.4 34.4v-4.6c4.5 2.9 9.3 3.1 10.5 3.1 2.35 0 6.2-0.5 6.2-3.74-0.22-2.7-3.4-3.4-5.5-4.3l-3-1.2c-3.24-1.3-5.3-2.45-6.1-3.5-1.75-2.2-2.1-6.5 1.2-9.24 3.26-2.7 10.8-2.6 16-0.9v4c-2.9-1.04-5.6-1.55-8.1-1.55-0.5 0-5.9 0.078-5.9 3.4 0 1.5 0.81 2.4 5.7 4.2l2.94 1.1c2.7 1 4.6 2.1 5.7 3.2 2.3 2.4 2.44 7.1-0.98 10-3 2.5-10.4 3.34-18.6 0.07zm39.1 2.5c-1 0-1.94-0.38-2.7-1.13-0.75-0.75-1.12-1.65-1.1-2.7 0-1.1 0.37-2 1.12-2.7 0.76-0.75 1.66-1.13 2.7-1.13s1.92 0.376 2.66 1.13c0.763 0.737 1.14 1.64 1.14 2.7 0 1.05-0.373 1.95-1.12 2.7s-1.64 1.13-2.7 1.13zm35.5-7c-3.63 6-10.7 9.3-15.8 3.8-3.37-3.7-3.3-11.8-0.864-16.8 2.9-6.1 7.53-7.76 11.8-7.76 1.63 0.016 3.25 0.215 4.86 0.376v-11.7h4.37v38h-4.37zm0-5.2v-11.3c-1.54-0.41-3-0.61-4.3-0.61-4.67 0-9.37 3.6-9.4 11.6 0 7.36 4 7.9 4.8 7.9 2.5 0 6-2.6 8.9-7.65zm28.4 5.2c-3.5 5.8-8.4 6.6-9.9 6.6-0.7 0-8.5-0.253-8.5-11.5 0-2.65 0.58-9.68 6.36-13.8 3.55-2.6 7.93-2.14 12-1.72h4.37v18.6c0 3.17 0.327 5.74 1 7.7h-4.53c-0.343-1.44-0.615-3.4-0.82-5.9zm0-5.2v-11.3c-5.57-1.5-8.75-0.11-11 2.5-1.8 2.1-2.66 4.9-2.66 8.5 0 7.36 4 7.9 4.8 7.9 2.5 0 6-2.6 8.9-7.65zm21.2 10-12-25.2h4.8l9.6 19.7 8-19.7h4.4l-10.1 24.4c-2.14 5.16-4.16 8.6-6.1 10.3-4 3.53-9.8 2.46-11 2.2v-3.86c1.62 0.5 4.53 1 7.17-0.26 2.8-1.6 4.16-4.7 5.3-7.55z"/></svg>
                </a>
            </div>
            <div id="octocat">
                <svg viewBox="0 0 250 250" xmlns="http://www.w3.org/2000/svg">
                    <a target="_blank" href="https://github.com/cocoyayann/moris.day/" aria-label="ソースコードを表示">
                        <rect class="octo-back" width="100%" height="100%"></rect>
                        <path class="octo-arm"  d="M128.3,109C113.8,99.7 119,89.6 119,89.6C122,82.7 120.5,78.6 120.5,78.6C119.2,72 123.4,76.3 123.4,76.3C127.3,81 125.5,87.3 125.5,87.3C123,97.6 130.6,102 134.4,103.2" style="transform-origin: 130px 106px;"></path>
                        <path class="octo-body" d="M115,115C115,115 118.7,116.5 119.8,115.4L133.7,101.6C137,99.2 140,98.4 142.2,98.6C133.8,88 127.5,74.4 143.8,58C148.5,53.4 154,51.2 159.7,51C160.3,49.4 163.2,43.6 171.4,40C171.4,40 176,42.5 178.8,56.2C183,58.6 187.2,61.8 191,65.4C194.5,69 197.7,73.2 200,77.6C213.8,80.2 216.3,85 216.3,85C212.7,93 207,96 205.4,96.6C205.1,102.4 203,107.8 198.3,112.5C182,129 168.3,122.5 157.7,114C158,117 156.7,121 152.7,125 L141,136.5C139.8,137.7 141.6,142 141.8,141.8Z"></path>
                    </a>
                </svg>
            </div>
        </div>
    </header>
    <main>
        <div id='article'>
            <div id="slot"><slot /></div>
        </div>
        <footer>
            <div id="footercontents">
                <div id="ftitle">
                    <svg class="title" version="1.1" viewBox="0 0 300 64" xmlns="http://www.w3.org/2000/svg" fill="white"><path d="m10 45.6v-26.3h3.8v6c1.2-2.56 2.3-4.3 3.34-5.3 2.57-2.4 5-1.5 6.2 0 1.24 1.64 1.17 3.7 1.17 5.65 0.723-2.5 2.13-4.6 4.1-6.26 1.2-0.92 3.72-1.66 5.56 0.54 0.8 0.96 1.2 2.86 1.2 5.72v20h-3.8v-17.9c0-2.8-0.137-3.7-0.7-4.26-1.26-1.27-2.9 0.6-3.5 1.46-0.92 1.24-1.86 3.3-2.8 6.2v14.6h-3.65v-18c0-2.3-0.225-3.7-0.68-4.1-2.2-2-4.5 1.84-6.4 6.85v15.2zm41.4 0.73c-3.7 0-6.7-1.3-9-3.9-2.24-2.6-3.4-5.95-3.4-10s1.1-7.31 3.4-9.9 5.2-3.9 9-3.9c3.7 0 6.7 1.3 9 3.9s3.4 5.9 3.4 9.9-1.1 7.3-3.4 10c-2.24 2.6-5.2 3.9-9 3.9zm0-3.65c2.3 0 4.2-0.9 5.53-2.73 1.4-1.8 2.1-4.32 2.1-7.5 0-3.2-0.685-5.7-2.1-7.5-1.37-1.8-3.2-2.73-5.53-2.73-2.33 0-4.2 0.9-5.6 2.73-1.37 1.8-2.1 4.3-2.1 7.5 0 3.2 0.69 5.7 2.1 7.5 1.37 1.8 3.2 2.7 5.6 2.7zm20 2.9v-26.3h4.35v5.74c2.44-4 5.8-6.5 10.5-6.5 1.6 0 3.15 0.243 4.7 0.73v9.5h-4.2v-6c-5.3-1-8.7 3.5-11 7.53v15.3zm34 0v-22.6h-7.24v-3.65h11.6v22.6h7.27v3.65zm-0.724-36c0-1 0.34-1.73 1-2.2s1.3-0.73 1.9-0.73c0.6 0 1.24 0.24 1.92 0.73 0.67 0.49 1 1.2 1 2.2 0 0.97-0.335 1.7-1 2.2-0.67 0.49-1.3 0.73-1.9 0.73-0.6 0-1.22-0.24-1.9-0.73-0.675-0.49-1-1.2-1-2.2zm22.4 34.4v-4.6c4.5 2.9 9.3 3.1 10.5 3.1 2.35 0 6.2-0.5 6.2-3.74-0.22-2.7-3.4-3.4-5.5-4.3l-3-1.2c-3.24-1.3-5.3-2.45-6.1-3.5-1.75-2.2-2.1-6.5 1.2-9.24 3.26-2.7 10.8-2.6 16-0.9v4c-2.9-1.04-5.6-1.55-8.1-1.55-0.5 0-5.9 0.078-5.9 3.4 0 1.5 0.81 2.4 5.7 4.2l2.94 1.1c2.7 1 4.6 2.1 5.7 3.2 2.3 2.4 2.44 7.1-0.98 10-3 2.5-10.4 3.34-18.6 0.07zm39.1 2.5c-1 0-1.94-0.38-2.7-1.13-0.75-0.75-1.12-1.65-1.1-2.7 0-1.1 0.37-2 1.12-2.7 0.76-0.75 1.66-1.13 2.7-1.13s1.92 0.376 2.66 1.13c0.763 0.737 1.14 1.64 1.14 2.7 0 1.05-0.373 1.95-1.12 2.7s-1.64 1.13-2.7 1.13zm35.5-7c-3.63 6-10.7 9.3-15.8 3.8-3.37-3.7-3.3-11.8-0.864-16.8 2.9-6.1 7.53-7.76 11.8-7.76 1.63 0.016 3.25 0.215 4.86 0.376v-11.7h4.37v38h-4.37zm0-5.2v-11.3c-1.54-0.41-3-0.61-4.3-0.61-4.67 0-9.37 3.6-9.4 11.6 0 7.36 4 7.9 4.8 7.9 2.5 0 6-2.6 8.9-7.65zm28.4 5.2c-3.5 5.8-8.4 6.6-9.9 6.6-0.7 0-8.5-0.253-8.5-11.5 0-2.65 0.58-9.68 6.36-13.8 3.55-2.6 7.93-2.14 12-1.72h4.37v18.6c0 3.17 0.327 5.74 1 7.7h-4.53c-0.343-1.44-0.615-3.4-0.82-5.9zm0-5.2v-11.3c-5.57-1.5-8.75-0.11-11 2.5-1.8 2.1-2.66 4.9-2.66 8.5 0 7.36 4 7.9 4.8 7.9 2.5 0 6-2.6 8.9-7.65zm21.2 10-12-25.2h4.8l9.6 19.7 8-19.7h4.4l-10.1 24.4c-2.14 5.16-4.16 8.6-6.1 10.3-4 3.53-9.8 2.46-11 2.2v-3.86c1.62 0.5 4.53 1 7.17-0.26 2.8-1.6 4.16-4.7 5.3-7.55z"/><line class="underline" x1="268" y1="50" x2="290" y2="50" stroke="white" stroke-width="3"/><style>.underline {animation: 1.5s step-end infinite underline;}@keyframes underline {0% {visibility: visible;}50% {visibility: hidden;}}</style></svg>
                </div>
                <div id='footlink'>
                    <dl>
                        <dt>Site Map</dt>
                        <dd><a href="/">Top Page</a></dd>
                        <dd><a href="/about">About me</a></dd>
                        <dd><a href="/blog">Blog</a></dd>
                    </dl>
                    <dl>
                        <dt>SNS</dt>
                        <dd><a target="_blank" href="https://mi.moris.day/@moris">Misskey</a></dd>
                        <dd><a target="_blank" href="https://github.com/cocoyayann">Github</a></dd>
                        <dd><a target="_blank" href="https://twitter.com/cocoyayan">Twitter</a></dd>
                    </dl>
                </div>
                <div id="coffee"><a href="https://www.amazon.jp/hz/wishlist/ls/1OA6N018YLSF0?ref_=wl_share" target="_blank">☕️ Buy me a coffee</a></div>
            </div>
            <div style="margin:8px auto;width:fit-content;font-size:0.8em;">
                    Copyright ©2024 moris All Rights Reserved.
            </div>
        </footer>
    </main>
</div>


<style>
    #contents {
        display: flex;
        flex-direction: column;
        background-color: var(--back-color);
        min-height: 100vh;
    }

    header {
        position: sticky;
        top: 0;
        left: 0;
        height: 100px;
        transition: height .2s;
        z-index: 10;
        @media(width<1000px) {
            height: 50px;
        }
    }
    #h-container {
        position: relative;
        height: 100%;
        background-color: var(--theme-color);
        transition: height .2s, transform .5s;
    }
    #h-container.hide {
        height: 50px;
        transition: height .4s, transform .5s;;
        @media(width<1000px) {
            transform: translate(0px,-50px);
        }
    }

    #headercontents {
        display: flex;
        align-items: center;
        justify-content: space-around;
        height: 100%;

        & >* {
            height: 75%;
        }

        & .title {
            height: 100%;
        }
    }
    #octocat {
        position: absolute;
        /*display: inline-block;*/
        top: 0;
        right: 0;
        height: 100%;
        aspect-ratio: 1;
        clip-path: polygon(0 0, 100% 0, 100% 100%);
        @media (width<1000px) {
			display: none;
		}
        & .octo-arm,.octo-body {
            fill: var(--theme-color);
        }
        & .octo-back {
            fill: var(--back-color);
        }
    }
    #octocat:hover .octo-arm {
        animation: octocat-wave 560ms ease-in-out
    }

    @keyframes octocat-wave {
        0%,100%{transform:rotate(0)}
        20%,60%{transform:rotate(-25deg)}
        40%,80%{transform:rotate(10deg)}
    }

    main {
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        color: var(--font-color);
    }

    #article {
        flex-grow: 1;
        margin: 3%;
    }

    footer {
        font-family: "Source Code Pro", "Monaco", "Consolas", monospace;
        height: fit-content;
        background-color: var(--theme-color);
        color: white;

        & a {
            color: white;
        }
        & dd {
            margin: 12px 0 0 24px;
        }
        & dt {
            font-size: 1.25em;
        }

        & #footercontents {
            display: flex;
            align-items: center;
            justify-content: space-around;
            height: 85%;
            margin: 25px;
            @media(width < 720px) {
                flex-direction: column;
                row-gap: 20px;
            }
        }

        & #ftitle {
            margin-bottom: 20px;
        }

        & .title {
            height: 50px;
        }

        & #footlink {
            width:80%;
            max-width: 600px;
            display: flex;
            justify-content: space-around;
            
        }
        & #coffee{display:none;}
    }

    @media (scripting: none) {
        header{height:50px !important;}
    }
</style>
