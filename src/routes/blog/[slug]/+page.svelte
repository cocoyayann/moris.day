<script>
    export let data
	import Markdown from './markdown.svelte'
	import Toc from './toc.svelte'
	import Share from '$lib/components/share.svelte'
	import Profile from '$lib/components/profile.svelte'
</script>


<svelte:head>
	<title>{data.metadata.title} | moris.day Blog</title>
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
					<a class='tag' href='/blog/tag/{tag}'>
						{tag}
					</a>
				{/each}
				</div>
			<div class="date">{data.metadata.date.toLocaleDateString('sv-SE')}</div>
		</div>
		<img id="thumbnail" alt="thumbnail" src="/img/{data.metadata.thumbnail}">
		<Markdown mdtext={data.post} />
	</div>
	<aside>
		<div id='side'>
			<div>
				<Share share={{url:`https://moris.day/blog/${data.id}`, title:data.metadata.title}} />
			</div>
			<div id='toc'>
				<Toc toclist={data.heading}></Toc>
			</div>
			<div>
				<Profile></Profile>
			</div>
		</div>
		<div style='flex-grow:1;'></div>
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
		padding: 24px;
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
		& #thumbnail {
			width: 100%;
			max-height: 50vh;
			object-fit: contain;
		}
	}

	.meta {
		position: relative;
		font-size: 0.95em;
		margin: 16px 8px;
		vertical-align: middle;
		& .tag {
			background-color: var(--theme-color);
			color: var(--font-color);
			border-radius: 3px;
			padding: 1px 4px;
			margin: 3px;
			text-decoration: none;
		}
		& .divider {
			display: inline-block;
			background-color: var(--font-color);
			width: 1.5px;
			height: 1.2em;
			margin: 0 8px;
			vertical-align: bottom;
		}
		& .date{
			position: absolute;
			right: 0;
			top: 0;
			font-size: 0.9em;
		}
	}
	.txt {
		@media(width<480px){
			display: none;
		}
	}
</style>