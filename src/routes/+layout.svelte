<script lang="ts">
    import '../app.css';
    import { onMount } from 'svelte';
    
    let scrolled: boolean = true;
    $: header = scrolled ? '':'hide';

    onMount(()=>{
        let observer = new IntersectionObserver(
            (entries)=>{scrolled = entries[0].isIntersecting},
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
                <svg id="title" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 50">
                    <a href="/" style="text-decoration:none;" aria-label="トップページ">
                        <text class="logotxt" x="0" y="35" textLength='200'>moris.day</text>
                    </a>
                    <style>.logotxt{font-family:"Monaco",monospace; font-size:36px; fill:#fff;}</style>
                </svg>
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
                <div id="ftitle">moris.day<span class="underline">_</span></div>
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
        z-index: 10;
        @media(width<720px) {
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
        @media(width<720px) {
            transform: translate(0px,-50px);
        }
    }

    #headercontents {
        display: flex;
        align-items: center;
        justify-content: space-around;
        height: 100%;

        & #title {
            display: inline-block;
            height: 70%;
            /*aspect-ratio: 5;*/
            width: auto;
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
        @media (width<720px) {
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
        font-family: system-ui, sans-serif;
    }

    #article {
        flex-grow: 1;
        margin: 3%;
    }

    footer {
        font-family: "Monaco", monospace;
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
            font-size: 40px;
            font-family: "Monaco", monospace;
            margin-bottom: 20px;
            max-width: 500px;
        }
        & #footlink {
            width:80%;
            max-width: 600px;
            display: flex;
            justify-content: space-around;
            
        }
        & #coffee{display:none;}
    }
    .underline {
        animation: 1.5s step-end infinite underline;
    }
    @keyframes underline {
        0% {visibility: visible;}
        50% {visibility: hidden;}
    }

    @media (scripting: none) {
        header{height:50px !important;}
    }
</style>
