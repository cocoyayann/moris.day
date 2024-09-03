<script lang="ts">
    import './app.css'

    function toggleFullScreen() {
        if (document.fullscreenElement) {
            document.exitFullscreen();
        } else {
            document.querySelector("body")?.requestFullscreen();
        }
    }
</script>

<div id='window'>
    <header>
        <div style="background-color: rgb(255 95 87)"></div>
        <div style="background-color: rgb(255 188 46)"></div>
        <button style="background-color: rgb(40 200 64)" on:click={toggleFullScreen}></button>
    </header>
    <div class="code">
        <slot />
    </div>
</div>

<style>
    #window {
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 100%;
        box-sizing: border-box;
        border: solid var(--border-color) 1px;
        border-radius: 12px;
        box-shadow: 0px 8px 40px var(--shadow-color);
        background-color: var(--back-color);
    }

    header {
        display: flex;
        height: 28px;
        padding: 0 4px;
        border-radius: 12px 12px 0 0;
        background-color: var(--head-color);
        border-bottom: solid var(--divider-color) 1px;

        & >* {
            all: unset;
            width: 12px;
            height: 12px;
            margin: 8px 4px;
            border-radius: 50%;
            background-color: gray;
        }
    }

    .code {
        height: calc(100% - 28px);
        overflow: hidden;
    }
</style>