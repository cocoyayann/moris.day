<script lang="ts">
    export let title:string;
    export let description:string;
    export let thumbnail:string;
    export let date:Date;
    export let category:string;
</script>

<div class='grid'>
    <div class='thumbnail'>
        {#if thumbnail }
            <img src="/img/{thumbnail}" alt='thumbnail' />
        {:else}
            <img src='data:image/svg+xml,{encodeURIComponent('<svg fill="#aaa" version="1.1" viewBox="0 -960 96 96" xmlns="http://www.w3.org/2000/svg"><path d="m41-903q-0.8 0-1.4-0.6t-0.6-1.4v-14q0-0.8 0.6-1.4t1.4-0.6h14q0.8 0 1.4 0.6t0.6 1.4v14q0 0.8-0.6 1.4t-1.4 0.6zm0-2h14v-14h-14zm1-2h12l-3.8-5-3 4-2.25-3zm-1 2v-14z"/></svg>')}' alt="fallback"/>
        {/if}

        <div class="tag date">{date.toLocaleDateString('sv-SE')}</div>
        <div class="tag category">{category}</div>
    </div>
    <div class='label'>
        <div class='title'>{title}</div>
        <div class='description'>{description}</div>
    </div>
</div>

<style>
    .grid {
        display: flex;
        height: 100%;
        flex-direction: column;
        position: relative;
        background-color: var(--grid-color);
    }

    .thumbnail {
        aspect-ratio: 1/0.6;
        width: 100%;
        max-height: 200px;
        /*overflow: hidden;*/

        & img {
            width: 100%;
            height: 100%;
            object-fit: contain;
            transition: transform .2s;
        }
        /*& img:hover {
            transform: scale(1.1);
        }*/

        & .tag{
            position: absolute;
            top: 5px;
            padding:2px;
            color: var(--font-color);
            background-color: var(--back-color);
            border-radius: 3px;
            font-size: 0.85em;   
        }
        & .date {
            right:5px;
        }
        & .category {
            left: 5px;
        }
    }

    .label {
        flex-grow: 1;
        height: 100%;
        width: 100%;
        color: var(--font-color);

        & .title{
            font-size: 1.25em;
            font-weight: bold;
            margin: 4px 8px;
        }

        & .description {
            margin:8px;
            font-size: .9em;
            text-decoration: none;
        }
    }
</style>