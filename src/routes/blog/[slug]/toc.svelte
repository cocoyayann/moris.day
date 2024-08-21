<script lang='ts'>
    export let toclist:{depth: 1 | 2 | 3 | 4 | 5 | 6;title: string;}[];
</script>


<nav>
    <div style="margin:4px 0 0 8px;color:#aaaa;font-size:0.85em;">目次</div>
    <ul>
        {#each toclist as toc}
            <li class="dep-{toc.depth}"><a href='#{toc.title.replace(/_| /g,"-").replaceAll(/\.|!/g, "").toLowerCase()}'>{toc.title}</a></li>
        {/each}
    </ul>
</nav>


<style>
    ul {
        margin: 0;
        padding: 2px 10px 10px 30px;
        font-size: .9rem;
    }
    li {
        height: auto;
        padding: 2px 4px;
        border-radius: 4px;
    }
    li:hover {
        background-color: #0002;
    }
    a {
        display: block;
        text-decoration: none;
        color: var(--font-color)
    }
</style>