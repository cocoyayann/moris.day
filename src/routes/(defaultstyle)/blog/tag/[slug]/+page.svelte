<script lang="ts">
    export let data;
</script>

<div>
    <div style='font-size:2rem; margin: 12px 10px;'>#{data.id}</div>
    {#each data.taglist as post}
        <div><a href='/blog/{post}'>{post}</a></div>
    {/each}
</div>