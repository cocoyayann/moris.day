<script lang="ts">
    export let data;
</script>

{#each data.categorys as category}
    <span class='tag'><a href="/blog/tag/{category}">{category}</a></span>
{/each}

<style>
    .tag {
        margin: 4px;
        padding: 2px 4px;
        border-radius: 4px;
        background-color: orange;
        font-size: 1.5em;
    }

    a {
        text-decoration: none;
        color: black;
    }
</style>