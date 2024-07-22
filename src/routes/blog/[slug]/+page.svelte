<script>
    export let data;
</script>

<div class="meta">
    <ul>
		{#each data.metadata as meta}
			<li>{meta}</li>
		{/each}
	</ul>
</div>
<div>{@html data.post}</div>