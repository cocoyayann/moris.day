<div class="profile" aria-label="プロフィール">
    <div>
        <div class="space topspace"></div>
        <div class="icon">
            <img src="/icon_192.webp" width="192" height="192" alt="moris icon">
        </div>
        <div class="space bottomspace"></div>
    </div>

    <div class="discription">
        <span>有機化学好きの大学生<br>電子工作やプログラムもいじります<br>ご連絡は<a href="https://mi.moris.day/@moris" target="_blank">Misskey</a>から<br>誤字などは<a href="https://github.com/cocoyayann" target="_blank">Github</a>のissueへ</span>
    </div>
</div>

<style>
    .profile {
        position: relative;
    }
    .topspace {
        height: 55px;
        background-color: color-mix(in srgb, var(--theme-color) 25%, var(--back-color));
    }
    .bottomspace {
        height: 45px;
    }
    .icon {
        position: absolute;
        padding: 4px;
        border-radius: 50%;
        width: 70px;
        height: 70px;
        top: 14px;  /*calc(55px - 35px - 6px);*/
        left: calc(50% - 41px);  /*calc(50% - 35px - 6px);*/
        background-color: var(--grid-color);
    }
    img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
    }
    .discription {
        padding: 0 10px 10px 10px;
        font-size: 0.9em;
        text-align: center;
        line-height: 1.8;
    }
</style>