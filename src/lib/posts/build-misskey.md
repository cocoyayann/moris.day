---
title: ラズパイでおひとり様Misskey鯖
description: RaspberryPi4で分散型SNS、Misskeyのサーバーを建てた際の記録です。
thumbnail: buid-misskey-thunbnail.avif
category: Tech
tags: [Misskey, RaspberryPi]
---

自分は１年ほど前にTwitterに見切りを付け、Misskeyに移行していたのですが、Twitterとの最大の違いはなんといっても「分散型」ということ。そして、オープンソースで公開されており、誰でもMisskeyのサーバーを建てられるということでしょう。\
ユーザーが数人程度であれば、RaspberryPi4でも快適にミス廃生活を送ることができます。([実際に建てたMisskey鯖](https://mi.moris.day))

今回建てたサーバーはこんな感じです
- RaspberryPi4 4GB
- Debian 12
- Misskey 2024.5.0
- ドメインはCloudflareで取得
- Cloudflare Tunnelで公開

ラズパイはNASとして持て余していた物を使用、Cloudflare TunnelはFreeユーザーでも利用可能なので、追加の費用はドメイン代のみです。

** OSは趣味の都合上Debianを使いましたがUbuntu Serverがおすすめです。公式も推奨してるので。 \
** 最後の「Cloudflare Tunnelで公開」はアパート住みでポート解放ができない為です。セキュリティ的にもこれがいいと思います。

# node.jsのインストール
atpコマンドでインストール
```
sudo pat install nodejs

sudo pat install nodejs


sudo pat install nodejs




sudo pat install nodejs




sudo pat install nodejs




sudo pat install nodejs





sudo pat install nodejs
```
