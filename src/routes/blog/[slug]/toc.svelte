<script lang='ts'>
    export let toclist:{depth: 1 | 2 | 3 | 4 | 5 | 6;title: string;}[];
</script>


<nav>
    <div style="margin:4px 0 0 8px;color:#aaaa;font-size:0.85em;">目次</div>
    <ul>
        {#each toclist as toc}
            {#if toc.depth==2}
                <li><a href='#{toc.title.replace(/ /g,"-").replaceAll(/`|~|!|\?|@|#|\$|%|\^|&|\*|\(|\)|=|\+|\[|\]|\{|\}|\\|\||\/|;|:|'|"|,|\.|<|>/g, "").toLowerCase()}'>{toc.title}</a></li>
            {/if}
        {/each}
    </ul>
</nav>


<style>
    ul {
        margin: 0;
        padding: 5px;
        font-size: .9rem;
    }
    li {
        padding: 2px 4px;
        border-radius: 3px;
        
        list-style-position:inside;
    }
    li:hover {
        background-color: #0002;
    }
    a {
        display: block;
        text-decoration: none;
        color: var(--font-color);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
</style>