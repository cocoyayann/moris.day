<script lang="ts">
    let y: number = 0;
    let header_height;
    $:header_height = y<50 ? 100-y : 50;
</script>

<svelte:window bind:scrollY={y} />

<div id="contents">
    <header style="--scroll:{header_height}px; --">
        <div id="title">
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 250 50">
                <a href="/">
                    <text x="0" y="35" font-family="monospace" font-size="40" fill="white">moris.day</text>
                </a>
            </svg>
        </div>
        <div id="git_logo">
            <svg version="1.1" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
                <a target="_blank" href="https://github.com/cocoyayann">
                    <path id="back" d="m0 0h80v80z" />
                    <path id="tail" d="m39.7 33.4c-6.71-3.88-4.32-8.47-4.32-8.47 1.23-2.85 0.619-4.54 0.619-4.54-0.528-2.7 1.17-0.964 1.17-0.964 1.62 1.89 0.881 4.5 0.881 4.5-1.12 4.5 2.29 6.22 4.26 6.8z" fill="#fff"/>
                    <path id="body" d="m35.9 36.3c0.388-0.396 1.73-1.84 3.14-3.28l2.62-2.51c1.27-1.01 2.5-1.33 3.38-1.3-3.45-4.25-5.92-9.95 0.741-16.8 1.9-1.95 4.16-2.81 6.41-2.95 0.252-0.607 1.44-3.05 4.75-4.51 0 0 1.87 0.973 2.96 6.63 1.78 1.05 3.41 2.33 4.86 3.82 1.41 1.44 2.73 3.21 3.73 4.97 5.52 1.06 6.48 3.03 6.48 3.03-1.43 3.41-3.82 4.61-4.4 4.86-0.0706 2.38-0.987 4.61-2.89 6.56-6.69 6.85-12.1 4.18-16.4 0.72 0.106 1.19-0.423 2.81-2.01 4.43-2.33 2.38-4.37 4.4-4.93 4.97z" fill="#fff"/>
                </a>
            </svg>
        </div>
    </header>
    <main>
        <div>
            <div id="slot"><slot /></div>
        </div>
    </main>
    <footer>
        <div id="footer">
            <div id="ftitle">moris.day<span>_</span></div>
            <dl>
                    <dt>Site Map</dt>
                    <dd><a href="/">Top Page</a></dd>
                    <dd><a href="/about">About me</a></dd>
                    <dd><a href="/blog">Blog</a></dd>
            </dl>
            <dl>
                    <dt>SNS</dt>
                    <dd>
                        <a target="_blank" href="https://mi.moris.day/moris">Misskey</a>
                    </dd>
                    <dd>
                        <a target="_blank" href="https://github.com/cocoyayann">Github</a>
                    </dd>
                    <dd>
                        <a target="_blank" href="https://twitter.com/cocoyayan">Twitter</a>
                    </dd>
            </dl>
            <div id="coffee"><a href="https://www.amazon.jp/hz/wishlist/ls/1OA6N018YLSF0?ref_=wl_share" target="_blank">☕️ Buy me a coffee</a></div>
        </div>
        <div style="margin:auto;width:fit-content;font-size:0.8em;">
                Copyright ©2024 moris All Rights Reserved.
        </div>
    </footer>
</div>

<style>
    #contents {
        --bg-mode: light;
        --back-color: #fff;
        --font-color: #222;
        --head-color: teal;
        --foot-color: teal;

        @media(prefers-color-scheme: dark){
            --bg-mode: dark;
            --back-color: #333;
            --font-color: #fff;
            --head-color: teal;
            --foot-color: teal;
        }

        background-color: var(--back-color);
        transition: all 1s;
    }

    header {
        display: flex;
        align-items: center;
        justify-content: space-around;
        position: sticky;
        top: 0px;
        left: 0;
        height: var(--scroll);
        max-height: 120px;
        width: 100%;
        background-color: var(--head-color);

        & #title {
            position: absolute;
            height: 75%;
            max-height: 80px;
            aspect-ratio: 5;
            display: inline-block;

        }
        & #git_logo {
            position: absolute;
            top: 0;
            right: 0;
            height: 100%;
            aspect-ratio: 1;
        }
    }
    #git_logo:hover #tail {
            transform-origin: center;
            animation: octotail 0.5s ease-in-out;
    }
    @keyframes octotail {
        from,
        50%,
        to {
            rotate: 0deg;
        }
        25%,
        75% {
            rotate: 10deg;
        }
    }

    main {
        margin: 25px;
        min-height: calc(100vh - 400px); /* header 100px + main_margin 2*25 + footer 250px */
        color: var(--font-color);
        font-family: sans-serif;
    }

    footer {
        top: auto;
        bottom: 0;
        left: 0;
        height: 250px;
        width: 100%;
        background-color: var(--foot-color);
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

        & #footer {
            display: flex;
            align-items: center;
            justify-content: space-around;
            width: 85%;
            height: 85%;
            margin: auto;
        }

        & #ftitle {
            font-size: 40px;
            font-family: monospace;
            padding-bottom: 50px;
            padding-right: 50px;
        }
    }
    #ftitle > span {
        animation: 1.5s step-end infinite underline;
    }
    @keyframes underline {
        0% {
            visibility: visible;
        }
        50% {
            visibility: hidden;
        }
    }


    :global(body) {
        margin: 0;
    }

    @media (scripting: none) {
        :global(.js) {display: none;}
        haeder{height:50px !important;}
    }

    :global(li) {
        height: 22px;
    }
</style>
