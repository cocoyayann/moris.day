<script>
    export let data
	import Markdown from '$lib/components/markdown.svelte'
	import Toc from './toc.svelte'
	import Share from '$lib/components/share.svelte'
	import Profile from '$lib/components/profile.svelte'
</script>


<svelte:head>
	<title>{data.metadata.title} | moris.day Blog</title>

	<meta property="og:title" content="{data.metadata.title}">
	<meta property="og:url" content="https://moris.day/blog/{data.id}">
	<meta property="og:description" content="{data.metadata.description}">
	{#if data.metadata.thumbnail}
		<meta property="og:image" content="https://moris.day{data.metadata.thumbnail}">
	{/if}
</svelte:head>

<div id='blog'>
	<article>
		<h1 class="title">{data.metadata.title}</h1>

		<div class="meta">
			<div class="category">
				<span class="txt">Category:</span>
				<a class="tag" href='/blog/category/{data.metadata.category}'>{data.metadata.category}</a>
			</div>

			{#if data.metadata.tags.length }
			<div class="divider"></div>

			<div class="tags">
				<span class="txt">Tags:</span>
				{#each data.metadata.tags as tag}
					<a class='tag' href='/blog/tag/{tag}'>{tag}</a>
				{/each}
			</div>
			{/if}
			
			<div class="date">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M480-120q-138 0-240.5-91.5T122-440h82q14 104 92.5 172T480-200q117 0 198.5-81.5T760-480q0-117-81.5-198.5T480-760q-69 0-129 32t-101 88h110v80H120v-240h80v94q51-64 124.5-99T480-840q75 0 140.5 28.5t114 77q48.5 48.5 77 114T840-480q0 75-28.5 140.5t-77 114q-48.5 48.5-114 77T480-120Zm112-192L440-464v-216h80v184l128 128-56 56Z"/></svg>
				<span>{data.metadata.date.toLocaleDateString('sv-SE')}</span>
			</div>
		</div>

		{#if data.metadata.thumbnail}
			<img class="thumbnail" alt="thumbnail" src="{data.metadata.thumbnail}">
		{:else if data.metadata.emoji}
			<img class="thumbnail emoji" alt="thumbnail" src="{data.metadata.emoji}">
		{/if}

		<Markdown mdtext={data.post} />
	</article>
	<aside>
		<div id='side'>
			<div>
				<Profile></Profile>
			</div>
			<div>
				<Share share={{url:`https://moris.day/blog/${data.id}`, title:data.metadata.title}} />
			</div>
			<div id='toc'>
				<Toc toclist={data.heading}></Toc>
			</div>
		</div>
	</aside>
</div>


<style>
	#blog {
		display: flex;
		gap: 20px;
	}
	aside {
		@media (width<1000px) {
			display: none;
		}
	
		& #side {
			width: 280px;
			display: flex;
			flex-direction: column;
			row-gap: 20px;
			position: sticky;
			top: 70px;
		}
		& #side>* {
				background-color: var(--grid-color);
				border-radius: 8px;
				box-shadow: 0 0 6px #1111;
				overflow: hidden;
		}

		& #toc {
			max-height: 50vh;
			overflow: scroll;
		}
	}

	article {
		min-width: 0;
		flex-grow: 1;
		background-color: var(--back-color);
		padding: 0 20px;
		border-radius: 8px;
		@media(width<720px){
			padding: 0;
		}


		& .title {
			font-size: 2em;
			margin: 0;
			padding: 5px;
			border-bottom: 1px solid;
		}
		& .thumbnail {
			display: block;
			margin: 0 auto;
			width: 100%;
			max-height: 50vh;
			object-fit: contain;
		}
		& .thumbnail.emoji {
			margin: 30px auto;
			max-width: 40%;
		}
		& .md {
			margin: 25px 0;
		}
	}

	.meta {
		display: grid;
		grid-template-rows: auto auto;
		grid-template-columns: auto auto 1fr auto;
		gap: 8px;
		font-size: 0.95em;
		margin: 8px;
		white-space: nowrap;

		@media(width<1000px) {
			flex-direction: column;
		}

		& .category {
			grid-row: 1;
			grid-column: 1;
		}

		& .tags {
			grid-row: 1;
			grid-column: 3;
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;
			@media(width<1000px) {
				grid-row: 2;
				grid-column: 1 / 5;
			}
			@media(width<480px){
				display: inline-block;
				grid-row: 1;
				grid-column: 3;
			}
		}

		& .tag {
			display: inline-block;
			background-color: var(--theme-color);
			color: var(--font-color);
			border-radius: 3px;
			padding: 0 4px 1px 4px;
			margin: 3px;
		}

		& .divider {
			display: inline-block;
			width: 1px;
			margin: 3px 0;
			background-color: var(--font-color);
			grid-row: 1;
			grid-column: 2;
			@media(480px<width<1000px){
				display: none;
			}
		}
		& .date{
			display: flex;
			grid-row: 1;
			grid-column: 4;
			vertical-align: middle;
			align-items: center;
			@media(width<480px){
				display: inline-block;
				grid-row: 2;
				grid-column: 1 / 5;
			}
		}
		& .date svg{
			height: 1rem;
			fill: var(--font-color);
			vertical-align: middle;
		}
		@media(width<480px) {
			& .txt {display: none;}
		}
	}
</style>