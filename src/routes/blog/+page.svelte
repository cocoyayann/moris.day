<script>
	export let data;

	import Postgrid from '$lib/components/postgrid.svelte'
</script>

<div id='contain'>
	<div class="posts">
		{#each data.posts as post}
			<div class="post">
				<a style='text-decoration: none;' href="/blog/{post['id']}">
					<Postgrid {...post.meta}></Postgrid>
				</a>
			</div>
		{/each}
	</div>
</div>

<style>
	.posts {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		grid-template-rows: max-content;
		gap: 24px;
		justify-content: center;
		margin: 0 3%;
	}
	.post {
		border-radius: 8px;
		overflow: hidden;
		/*border: 1px solid black;*/
		box-shadow: 0 0 6px #0002;
	}
</style>
