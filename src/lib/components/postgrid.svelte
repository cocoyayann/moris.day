<script lang="ts">
    export let meta;
</script>

<div class='grid'>
    <div class='thumbnail'>
        <img src="/img/{meta.thumbnail}" alt='thumbnail' />
        <div class="tag date">{meta.date.toLocaleDateString('sv-SE')}</div>
        <div class="tag category">{meta.category}</div>
    </div>
    <div class='label'>
        <div class='title'>{meta.title}</div>
        <div class='description'>{meta.description}</div>
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
            object-fit: cover;
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