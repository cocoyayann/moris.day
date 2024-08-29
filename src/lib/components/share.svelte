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
    <button class='link' type="button" on:click={copylink} aria-label="urlをコピー">
        {#if copyed}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M620-163 450-333l56-56 114 114 226-226 56 56-282 282Zm220-397h-80v-200h-80v120H280v-120h-80v560h240v80H200q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h167q11-35 43-57.5t70-22.5q40 0 71.5 22.5T594-840h166q33 0 56.5 23.5T840-760v200ZM480-760q17 0 28.5-11.5T520-800q0-17-11.5-28.5T480-840q-17 0-28.5 11.5T440-800q0 17 11.5 28.5T480-760Z"/></svg>
        {:else}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h167q11-35 43-57.5t70-22.5q40 0 71.5 22.5T594-840h166q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560h-80v120H280v-120h-80v560Zm280-560q17 0 28.5-11.5T520-800q0-17-11.5-28.5T480-840q-17 0-28.5 11.5T440-800q0 17 11.5 28.5T480-760Z"/></svg>
        {/if}
    </button>
    <div class='misskey'>
        <a href="https://misskey-hub.net/share?url={share.url}&text={share.title}+-+moris+Blog" target="_blank" aria-label="misskeyで共有">
            <svg version="1.1" viewBox="0 0 136 136" xmlns="http://www.w3.org/2000/svg"><path d="m16.5 20c-9 0-16.5 7.5-16.5 16.5v62c0 9 7.5 16.5 16.5 16.5 9 0 16.5-7.5 16.5-16.5v-12c0-3 2.6-2 4 0 2.4 4 7.4 7.6 13.3 7.5s10.9-3.5 13.3-7.5c1.4-2 4-3 4 0v12c0 9 7.5 16.5 16.5 16.5 9 0 16.5-9 16.5-16.5v-62c0-9-7.5-16.5-16.5-16.5-5 0-9.4 2-13 6l-16.5 19.5c-2.45 3.13-5.96 2.92-8.4 0l-16.5-19.5c-3.4-4-7.7-6-13-6zm105.5 0c-8 0-14 6-14 14 0 8 6 14 14 14 8 0 14-6 14-14 0-8-6-14-14-14m0 31c-8 0-14 6 -14 14v35c0 8 6 14 14 14 8 0 14-6 14-14v-35c0-8-6-14-14-14"/></svg>
        </a>
    </div>
    <div class='threads'>
        <a href="https://www.threads.net/intent/post?text={share.title}+-+moris+Blog%0A{share.url}" target="_blank" aria-label="threadsで共有">
            <svg version="1.1" viewBox="0 0 1100 1100" xmlns="http://www.w3.org/2000/svg"><path d="m558 1050c-229 0-444-129-446-499v-0.7c1.4-172 56-496 446-499h0.6c231 1.6 377 122 430 315l-85 23.7c-46-165-162-249-346-251-284 2.1-356 208-358 411 2.8 325 179 410 358 411 109-0.8 182-26 242-85 83.6-82 81-212-22.7-273-34.2 240-253 237-344 177-92-60-97-184-17.6-252 82-71 221-57 275-48-25-150-195-129-244-55l-73-49c93-138 393-152 409 130 196 83 203 303 80 432-82 88-172 112-304 112zm11-486c-173 9.7-151 171-6 163 51-2.7 117-22.6 129-155-41-3.7-82-10-123-8z"/></svg>
        </a>
    </div>
    <div class='twitter'>
        <a href="http://twitter.com/share?url={share.url}&text={share.title}+-+moris+Blog%0A" target="_blank" aria-label="twitterで共有">
            <svg viewBox="0 0 248 248" xmlns="http://www.w3.org/2000/svg"><path d="M 222,73 C 222,205 87,257 1,201 28,204 54,196 76,180 54,180 35,166 29,145 37,147 44,146 52,144 28,139 11,118 11,94 18,98 26,100 34,100 12,85 5,56 18,33 44,65 81,84 122,86 111,38 172,2 208,40 219,38 230,34 240,28 236,40 228,50 218,56 227,56 238,52 247,48Z"/></svg>
        </a>
    </div>
    <div class="rss">
        <a href="/blog/feed.rss" target="_blank" aria-label="rss配信">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M200-120q-33 0-56.5-23.5T120-200q0-33 23.5-56.5T200-280q33 0 56.5 23.5T280-200q0 33-23.5 56.5T200-120Zm480 0q0-117-44-218.5T516-516q-76-76-177.5-120T120-680v-120q142 0 265 53t216 146q93 93 146 216t53 265H680Zm-240 0q0-67-25-124.5T346-346q-44-44-101.5-69T120-440v-120q92 0 171.5 34.5T431-431q60 60 94.5 139.5T560-120H440Z"/></svg>
        </a>
    </div>
</div>

<style>
    #share {
        display: flex;
        gap: 4px;
        height: 36px;
        padding: 5px;

        &>* {
            height: 100%;
            flex: 1;
            border-radius: 3px;
            &:hover {
                background-color: #0001;
            }
        }
    }
    button {
        all: unset;
    }
    svg {
        height: 100%;
        width: 100%;
        fill: #aaaa;
        transition: fill .2s;
    }

    .link svg:hover    {fill: hsl(0, 25%, 35%);}
    .misskey svg:hover {fill: hsl(75, 99%, 40%);}
    .threads svg:hover {fill: black;}
    .twitter svg:hover {fill: hsl(203, 100%, 70%);}
    .rss svg:hover     {fill: orange;}
</style>
