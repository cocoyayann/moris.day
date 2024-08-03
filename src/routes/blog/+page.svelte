<script>
	export let data;
</script>

<div>
	<p style="font-weight:bold;">POSTS</p>
	<div class='posts'>
		{#each data.posts as post}
			<div class='post'>
				<a href="/blog/{post}">{post}</a>
			</div>
		{/each}
	</div>
</div>

<style>
	.posts {
    	display: grid;
    	grid-auto-rows: 300px;
    	grid-template-columns: repeat(auto-fit, 300px);
		column-gap: 10px;
		row-gap: 10px;
		justify-content: center;
	}
	.post {
		background-color: #fff4;
		border-radius: 25px;
	}
</style>