# WalletConnect

WalletConnectは、QRコードまたはディープリンクを使い、ウォレットとDAppの間で接続、署名、取引の要求をやり取りするオープンプロトコルです。DAppに秘密鍵は渡りませんが、要求内容は利用者自身で確認する必要があります。

プロトコルの詳細は、[WalletConnect公式サイト](https://walletconnect.network/)を参照してください。

LunascapeはQRコードとディープリンクによるWalletConnect接続に対応しています。

> **重要:** WalletConnectのコードには、信頼できないサイトからの要求が含まれる場合があります。接続前にDAppのドメイン、要求されたアカウント、ネットワークを確認してください。WalletConnect接続のためにリカバリーフレーズや秘密鍵を入力することはありません。

## QRコードで接続する

1. DAppで**WalletConnect**を選びます。接続用QRコードが表示されます。

<img src="img/Screenshot_2025-09-26_at_13.23.25.png" alt="WalletConnectの画面 1" width="560" />

2. Lunascapeのホーム画面でQRスキャナーをタップします。

<img src="img/Screenshot_2025-09-26_at_13.28.15.png" alt="WalletConnectの画面 2" width="560" />

   または、ウォレットダッシュボードのQRスキャナーをタップします。

<img src="img/Screenshot_2025-09-26_at_13.29.08.png" alt="WalletConnectの画面 3" width="560" />

3. QRコードを読み取ります。
4. DApp名とドメイン、アカウント、ネットワーク、要求された権限を確認します。
5. 接続を確定します。

<img src="img/IMG_0823.png" alt="WalletConnectの画面 4" width="360" />

## ディープリンクで接続する

1. DAppのウォレット一覧で**Lunascape**を選びます。

<img src="img/Simulator_Screenshot_-_iPhone_16_-_2025-09-26_at_13.42.00.png" alt="WalletConnectの画面 5" width="360" />

2. Lunascapeを開く確認が表示されたら、**開く**をタップします。

<img src="img/Simulator_Screenshot_-_iPhone_16_-_2025-09-26_at_13.42.59.png" alt="WalletConnectの画面 6" width="360" />

3. Lunascapeで要求内容を確認し、接続を確定します。

<img src="img/Simulator_Screenshot_-_iPhone_16_-_2025-09-26_at_13.43.10.png" alt="WalletConnectの画面 7" width="360" />

## WalletConnectセッション

接続が完了するとセッションが作成されます。**ウォレット** > **設定** > **WalletConnect**で現在のセッションを確認できます。

<img src="img/Screenshot_2025-09-26_at_14.01.56.png" alt="WalletConnectの画面 8" width="560" />

セッションを削除するとDAppとの接続が切れます。DApp側で切断した場合も、Lunascapeのセッション一覧から削除されます。

> **ヒント:** 使わなくなったセッションや、覚えのないセッションは削除してください。

## メッセージに署名する

Lunascapeでは、次の署名方式による要求を表示できます。

- Personal Sign

<img src="img/Screenshot_2025-09-26_at_15.41.37.png" alt="WalletConnectの画面 9" width="560" />

- Sign Typed Data

<img src="img/Screenshot_2025-09-26_at_15.41.54.png" alt="WalletConnectの画面 10" width="560" />

- Sign Typed Data V3

<img src="img/Screenshot_2025-09-26_at_15.42.13.png" alt="WalletConnectの画面 11" width="560" />

- Sign Typed Data V4

<img src="img/Screenshot_2025-09-26_at_15.42.29.png" alt="WalletConnectの画面 12" width="560" />

> **警告:** 署名によってアカウントへのアクセスやトークン操作が許可される場合があります。予期していない要求や、内容を理解できないメッセージは拒否してください。

## 取引を確定する

DAppから取引が要求されると、Lunascapeに確認画面が表示されます。承認前にネットワーク、送信先またはコントラクト、数量、トークン権限、手数料を確認してください。

<img src="img/IMG_0869.png" alt="WalletConnectの画面 13" width="360" />

> **重要:** 確定したブロックチェーン取引は通常キャンセル・取り消しできません。

## ネットワークを切り替え

DAppが別のネットワークを要求すると、Lunascapeに切り替え確認が表示されます。意図した操作と一致しない場合は拒否してください。

<img src="img/IMG_0870.png" alt="WalletConnectの画面 14" width="360" />
