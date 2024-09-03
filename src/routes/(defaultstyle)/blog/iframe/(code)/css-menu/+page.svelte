<header>
    <nav>
        <input type="checkbox" id="🍔👈👩‍💻" />
        <label for="🍔👈👩‍💻">
            <div style="background-color:tomato"></div>
            <div>
                <div style="background-color:forestgreen"></div>
                <div style="background-color:forestgreen"></div>
            </div>
            <div style="background-color:gold"></div>
        </label>
        <div id="menu">
            <div><a href="https://www.mcdonalds.co.jp/products/1210/" target="_blank">ビッグマック</a></div>
            <div><a href="https://www.mcdonalds.co.jp/products/1070/" target="_blank">てりやきマックバーガー</a></div>
            <div><a href="https://www.mcdonalds.co.jp/products/1360/" target="_blank">ダブルチーズバーガー</a></div>
            <div><a href="https://www.mcdonalds.co.jp/products/1090/" target="_blank">えびフィレオ</a></div>
            <div><a href="https://www.mcdonalds.co.jp/products/7070/" target="_blank">エグチ(エッグチーズバーガー)</a></div>
            <div><a href="https://www.mcdonalds.co.jp/products/8000/" target="_blank">チキチー (マックチキン チーズ)</a></div>
        </div>
    </nav>
</header>


<style>
    header {
        position: relative;
        height: 50px;
        background-color: orange;
    }
    label {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 8px;
        align-items: center;
        width: 50px;
        height: 50px;
        background-color: wheat;
        cursor: pointer;

        & >div {
            height: 4px;
            width: 75%;
            background-color: forestgreen;
        }
    }
    input {
        display: none;
    }
    nav {
        position: absolute;
        top: 0;
    }
    #menu {
        position: relative;
        width: 250px;
        background-color: lemonchiffon;
        left: 0px;
        transition: left .25s ease-out;
    }
    #🍔👈👩‍💻:checked~#menu {
        left: -251px;
    }
    #🍔👈👩‍💻:checked~label  {
        left: -251px;
    }
    #menu div {
        height: fit-content;
        padding: .5em;
        border-bottom: solid black 1px;
        font-family: sans-serif;
    }
    a {
        display: block;
        width: 100%;
        height: 100%;
        text-decoration: none;
        color: black;
    }
</style>