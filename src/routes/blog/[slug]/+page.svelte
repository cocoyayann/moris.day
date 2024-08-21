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
	<meta property="og:image" content="https://moris.day/img/{data.metadata.thumbnail}">
</svelte:head>

<div id='blog-container'>
	<div id='main-container'>
		<h1 class="title">{data.metadata.title}</h1>

		<div class="meta">
			<div class="left">
				<span class="txt">Category:</span>
				<a class="tag" href='/blog/category/{data.metadata.category}'>{data.metadata.category}</a>

				<span class="divider"></span>

				<span class="txt">Tags:</span>
				{#each data.metadata.tags as tag}
					<a class='tag' href='/blog/tag/{tag}'>{tag}</a><wbr />
				{/each}
			</div>
			
			<div class="date">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M480-120q-138 0-240.5-91.5T122-440h82q14 104 92.5 172T480-200q117 0 198.5-81.5T760-480q0-117-81.5-198.5T480-760q-69 0-129 32t-101 88h110v80H120v-240h80v94q51-64 124.5-99T480-840q75 0 140.5 28.5t114 77q48.5 48.5 77 114T840-480q0 75-28.5 140.5t-77 114q-48.5 48.5-114 77T480-120Zm112-192L440-464v-216h80v184l128 128-56 56Z"/></svg>
				<span>{data.metadata.date.toLocaleDateString('sv-SE')}</span>
			</div>
		</div>

		<img id="thumbnail" alt="thumbnail" src="/img/{data.metadata.thumbnail}">
		<Markdown mdtext={data.post} />
	</div>
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
	#blog-container {
		display: flex;
		gap: 20px;
		width: 100%;
		height: fit-content;
		margin: 1px;
	}
	aside {
		min-width: 280px;
		width: 20%;
		@media (width<1000px) {
			display: none;
		}
	
		& #side {
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

	#main-container {
		min-width: 0;
		flex-grow: 1;
		background-color: var(--back-color);
		padding: 0 24px;
		border-radius: 8px;
		@media(width<720px){
			padding: 0;
		}


		& .title {
			font-size: 2em;
			margin: 0;
			padding: 5px;
			border-bottom: 1px solid;
			@media(width<480px){
				font-size: 1.7em;
			}
		}
		& #thumbnail {
			width: 100%;
			max-height: 50vh;
			object-fit: contain;
		}
	}

	.meta {
		display: flex;
		position: relative;
		font-size: 0.95em;
		/*vertical-align: middle;*/
		margin: 8px;
		line-height: 150%;

		@media(width<1000px) {
			flex-direction: column;
		}

		& .left {
			margin: 4px 0;
			flex-grow: 1;
		}
		& .tag {
			background-color: var(--theme-color);
			color: var(--font-color);
			border-radius: 3px;
			padding: 0 4px 1px 4px;
			margin: 3px;
		}
		& .divider {
			display: inline-block;
			background-color: var(--font-color);
			width: 1.5px;
			height: 1.5em;
			margin: 0 4px;
			vertical-align: bottom;
		}
		& .date{
			display: flex;
			align-items: center;
			gap: 2px;
			margin: 4px 0;
			font-size: 0.9em;
			flex-shrink: 0;
		}
		& .date svg{
			height: 1.2em;
			fill: var(--font-color);
			vertical-align: middle;
		}
		@media(width<400px) {
			& .txt {display: none;}
		}
	}
</style>