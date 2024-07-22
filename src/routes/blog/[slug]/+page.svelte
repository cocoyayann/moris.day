<script>
    export let data;
</script>

<div class="meta">
	<div>Title: {data.metadata.title}</div>
	<div>
		{#each data.metadata.tags as tag}
			<span class='tag'>{tag}</span>
		{/each}
	</div>
</div>
<div>{@html data.post}</div>

<style>
	.tag {
		background-color: darkorange;
		border-radius: 4px;
		padding: 2px 4px;
		margin: 3px;
	}
</style>