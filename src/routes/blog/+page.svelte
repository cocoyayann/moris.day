<script>
	export let data;
</script>

<div>
	<p style="font-weight:bold;">POSTS</p>
	<ul>
		{#each data.posts as post}
			<li><a href="/blog/{post}">{post}</a></li>
		{/each}
	</ul>
</div>
