<script lang="ts">
    export let share: sharetype;

    type sharetype = {
        url: string;
        title: string;
    };

    let copyed = false

    function copylink(){
        navigator.clipboard.writeText(share.url);
        copyed = true
        setTimeout(()=>copyed=false, 1000)
    };

</script>

<div style="margin:4px 0 0 8px;color:#aaaa;font-size:0.85em">Share</div>
<div id="share">
    <button class='copylink' type="button" on:click={copylink} aria-label="urlをコピー">
        {#if copyed}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M620-163 450-333l56-56 114 114 226-226 56 56-282 282Zm220-397h-80v-200h-80v120H280v-120h-80v560h240v80H200q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h167q11-35 43-57.5t70-22.5q40 0 71.5 22.5T594-840h166q33 0 56.5 23.5T840-760v200ZM480-760q17 0 28.5-11.5T520-800q0-17-11.5-28.5T480-840q-17 0-28.5 11.5T440-800q0 17 11.5 28.5T480-760Z"/></svg>
        {:else}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h167q11-35 43-57.5t70-22.5q40 0 71.5 22.5T594-840h166q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560h-80v120H280v-120h-80v560Zm280-560q17 0 28.5-11.5T520-800q0-17-11.5-28.5T480-840q-17 0-28.5 11.5T440-800q0 17 11.5 28.5T480-760Z"/></svg>
        {/if}
    </button>
    <div class='misskey'>
        <a href="https://misskey-hub.net/share?url={share.url}&text={share.title}+-+moris+Blog" target="_blank" aria-label="misskeyで共有">
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 136 136"><path d="M16.5 20.3q -3 0-5.6.99-4.8 1.7-7.9 6Q 0 31.6 0 36.8v62q0 6.8 4.8 11.7Q9.7 115 16.5 115q7 0 11.7-4.8Q33.2 105.5 33 99V87.4c0-2.4 2.5-1.8 3.8 0 2.4 4 7.4 7.6 13.3 7.6s10.7-3 13.3-7.6c1-1.1 3.7-3 4 0V99q0 6.8 4.8 11.7Q77.3 115.2 84 115q6.9 0 11.7-4.8 5-5 5-11.7V36.8q0-5-3-9.5-3-4.4-8-6-2.8-1-5.7-1-7.6 0-13 6L54.6 45.8c-.377.283-1.6 2.4-4.3 2.4s-3.8-2.2-4.1-2.4L29.3 26.2Q24.2 20.3 16.5 20.3zm104.5 0q -5.9 0-10.2 4.2-4 4-4 10t4 10.2q4.2 4 10.2 4t10.2-4.1q4.2-4.2 4.2-10.2 0-5.9-4.2-10-4.2-4.2-10.2-4.2m0 31.4q-6 0-10 4.2c-4.2 4.2-4.2 6.2-4.2 10.2v35q0 5.9 4.2 10.2 4.2 4 10.2 4c5.9 0 7.3-1.4 10-4q4.2-4.2 4.2-10.2V66q0-6-4.2-10.2-4-4.2-10-4.2"></path></svg>
            </div>
        </a>
    </div>
    <div class='threads'>
        <a href="https://www.threads.net/intent/post?text={share.title}+-+moris+Blog%0A{share.url}" target="_blank" aria-label="threadsで共有">
            <div>
                <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="m520 1012h-0.3c-149-1-264-50.2-341-146-68.5-85.5-104-204-105-353v-0.7c1.2-149 36.6-268 105-353 77-96.1 192-145 341-146h0.6c114 0.8 210 30.2 284 87.4 69.9 53.8 119 130 146 228l-85 23.7c-46-165-162-249-346-251-121 0.9-213 39-272 113-55.7 69.5-84.5 170-85.6 298 1.1 129 29.9 229 85.7 298 59.6 74.3 151 112 272 113 109-0.8 182-26.3 242-85.2 68.6-67.2 67.4-150 45.4-200-12.9-29.6-36.4-54.2-68.1-72.9-8 56.3-25.9 102-53.5 136-36.9 45.9-89.2 71-155 74.6-50.1 2.7-98.4-9.1-136-33.4-44.3-28.7-70.2-72.5-73-124-2.7-49.6 17-95.2 55.4-128 36.7-31.7 88.3-50.3 149-53.8 44.9-2.5 87-0.5 126 5.9-5.2-30.9-15.6-55.5-31.2-73.2-21.4-24.4-54.5-36.8-98.3-37.1h-1.2c-35.2 0-83 9.7-113 55l-73.2-49.1c40.8-60.6 107-94 187-94h1.8c133 0.8 212 82.3 220 224 4.5 1.9 9 3.9 13.4 5.9 62.1 29.2 108 73.4 131 128 33.2 75.9 36.3 200-64.5 298-77.1 75.4-171 110-303 110zm41.8-487c-10.1 0-20.3 0.3-30.8 0.9-76.5 4.3-124 39.4-122 89.3 2.8 52.3 60.5 76.6 116 73.6 51-2.7 117-22.6 129-155-28.2-6.1-59.1-9.2-92.3-9.2z"/></svg>
            </div>
        </a>
    </div>
    <div class='twitter'>
        <a href="http://twitter.com/share?url={share.url}&text={share.title}+-+moris+Blog%0A" target="_blank" aria-label="twitterで共有">
            <div>
                <svg viewBox="0 0 248 248" xmlns="http://www.w3.org/2000/svg"><path d="M 222,73 C 222,205 87,257 1,201 28,204 54,196 76,180 54,180 35,166 29,145 37,147 44,146 52,144 28,139 11,118 11,94 18,98 26,100 34,100 12,85 5,56 18,33 44,65 81,84 122,86 111,38 172,2 208,40 219,38 230,34 240,28 236,40 228,50 218,56 227,56 238,52 247,48Z"/></svg>
            </div>
        </a>
    </div>
    <div class="rss">
        <a href="/blog/feed.rss" target="_blank" aria-label="rss配信">
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M200-120q-33 0-56.5-23.5T120-200q0-33 23.5-56.5T200-280q33 0 56.5 23.5T280-200q0 33-23.5 56.5T200-120Zm480 0q0-117-44-218.5T516-516q-76-76-177.5-120T120-680v-120q142 0 265 53t216 146q93 93 146 216t53 265H680Zm-240 0q0-67-25-124.5T346-346q-44-44-101.5-69T120-440v-120q92 0 171.5 34.5T431-431q60 60 94.5 139.5T560-120H440Z"/></svg>
            </div>
        </a>
    </div>
</div>

<style>
    button {
        all: unset;
        height: 100%;
    }
    svg {
        display: block;
        margin: 0 auto;
        max-height: 100%;
        max-width:100%;
        fill: #aaaa;
        transition: fill .2s;
    }
    #share {
        display: flex;
        height: 36px;
        padding: 5px;
        justify-content:space-between;
        align-items: center;
        gap: 4px;

        & div {
            height: 100%;
        }
    }
    #share>* {
        flex-grow: 1;
        border-radius: 3px;
    }
    #share>*:hover {
        background-color: #0001;
    }
    .copylink svg:hover {
        fill: hsl(0, 25%, 35%);
    }
    .misskey svg:hover{
        fill: #99cc01;
    }
    .threads svg:hover{
        fill: #000;
    }
    .twitter svg:hover {
        fill: hsl(203, 89%, 53%);
        fill: hsl(203, 100%, 70%);
    }
    .rss svg:hover {
        fill: orange;
    }
</style>
