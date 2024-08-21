<div class="profile" aria-label="プロフィール">
    <div>
        <div class="space topspace">Profile</div>
        <div class="icon">
            <img src="/my_icon_256x256.webp" alt="moris icon">
        </div>
        <div class="space bottomspace"></div>
    </div>

    <div class="discription">
        <span>有機化学好きの大学生<br>電子工作やプログラムもいじります<br>ご連絡は<a href="https://mi.moris.day/@moris">Misskey</a> or <a href="https://github.com/cocoyayann">Github</a>から</span>
    </div>
</div>

<style>
    .profile {
        position: relative;
    }
    .topspace {
        height: 60px;
        background-color: color-mix(in srgb, var(--theme-color) 25%, var(--back-color));
        padding: 4px 8px;

        font-size: 0.85em;
    }
    .bottomspace {
        height: 40px;
    }
    .icon {
        position: absolute;
        margin: 0 auto;
        padding: 4px;
        border-radius: 50%;
        width: 70px;
        top: calc(60px - 35px);
        left: calc(50% - 35px);
        background-color: var(--grid-color);
    }
    img {
        width: 100%;
        border-radius: 50%;
    }
    .discription {
        padding: 0 10px 10px 10px;
        font-size: 0.9em;
        text-align: center;
    }
</style>