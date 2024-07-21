<script>
	export let data;
</script>

<div>
	<p>{data}</p>
	<ul>
		{#each data.posts as post}
			<li>{post}</li>
		{/each}
	</ul>
</div>
