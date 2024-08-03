<script>
    export let data;
</script>

<div class="meta">
	<h1 class="title">{data.metadata.title}</h1>
	<div>
		<span>Tags: </span>
		{#each data.metadata.tags as tag}
			<span class='tag'>{tag}</span>
		{/each}
	</div>
</div>
<article>{@html data.post}</article>

<style>
	.title {
		font-size: 2em;
		border-bottom: 1px solid;
	}
	.tag {
		background-color: darkorange;
		border-radius: 4px;
		padding: 2px 4px;
		margin: 3px;
	}

	article {
		margin: 24px 12px;
	}
</style>