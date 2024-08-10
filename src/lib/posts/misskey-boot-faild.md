---
title: misskeyの起動に失敗する問題
description: OS起動直後にmisskeyがエラー終了する問題を探る
thumbnail: misskey-boot-faild-thunbnail.avif
date: 2024-01-01
category: Tech
tags: [Misskey, Linux]
---

ラズパイで稼働中のmisskeyサーバーを運用開始してから初めてのアップデートをしたところ、順調にアップデート完了と思いきや起動に失敗、再起動をしてみたもののやはり失敗してしまいました。
`journalctl`でログを確認したところ、どうやらDBへの接続に失敗しているようです。しかし、postgresqlは問題なく起動していました。