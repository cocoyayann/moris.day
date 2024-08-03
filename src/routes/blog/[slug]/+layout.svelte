<div id="blog">
    <article>
        <slot />
    </article>
</div>

<style>
    #blog {
        --bg-color: #fff8;

        @media(prefers-color-scheme: dark){
            --bg-color: #fff4;
        }
    }
    article {
        border-radius: 20px;
        padding: 15px;
        background-color: var(--bg-color);
    }
</style>
