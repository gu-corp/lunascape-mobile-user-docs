---
title: WalletConnect
---

# WalletConnect

WalletConnectは、QRコードまたはディープリンクを介して暗号ウォレットと分散アプリケーション（dApps）間の安全な接続を可能にする**オープンソースプロトコル**です。ユーザーが秘密鍵をdAppと直接共有することなく、取引に署名し、認証することを可能にします。

詳細はこちら：[https://walletconnect.network/](https://walletconnect.network/)

LunascapeアプリはQRコードとディープリンクの両方でWalletConnectを完全にサポートしています

## QRコード経由でDAppに接続

DAppで、ユーザーはWalletConnect経由でウォレットに接続することを選択します。接続QRコードが生成され、表示されます。

![Screenshot 2025-09-26 at 13.23.25.png](img/Screenshot_2025-09-26_at_13.23.25.png)

Lunascapeアプリケーションで、ユーザーはQRコードスキャンアイコン付きのボタンをクリックします

ホーム画面

![Screenshot 2025-09-26 at 13.28.15.png](img/Screenshot_2025-09-26_at_13.28.15.png)

またはウォレット/ダッシュボード

![Screenshot 2025-09-26 at 13.29.08.png](img/Screenshot_2025-09-26_at_13.29.08.png)

その後、QRコードをスキャンして接続します。接続確認ポップアップが表示され、ユーザーが確認します。

![IMG_0823.png](img/IMG_0823.png)

## ディープリンク経由でDAppに接続

DAppで、Lunascapeウォレットに接続するために移動します。

![Simulator Screenshot - iPhone 16 - 2025-09-26 at 13.42.00.png](img/Simulator_Screenshot_-_iPhone_16_-_2025-09-26_at_13.42.00.png)

Lunascapeウォレットをクリックすると、Lunascapeアプリを開くことを確認するポップアップが表示されます。ユーザーは開くをクリックしてLunascapeアプリを開き、接続を行います。

![Simulator Screenshot - iPhone 16 - 2025-09-26 at 13.42.59.png](img/Simulator_Screenshot_-_iPhone_16_-_2025-09-26_at_13.42.59.png)

Lunascapeアプリが開かれると、DAppへの接続を確認するポップアップが表示されます。ユーザーが接続を確認します。

![Simulator Screenshot - iPhone 16 - 2025-09-26 at 13.43.10.png](img/Simulator_Screenshot_-_iPhone_16_-_2025-09-26_at_13.43.10.png)

## WalletConnectセッション

WalletConnect経由でDAppに正常に接続すると、セッションが作成されます。
ユーザーはウォレット→設定→WalletConnectで接続されたセッションのリストを確認できます。

![Screenshot 2025-09-26 at 14.01.56.png](img/Screenshot_2025-09-26_at_14.01.56.png)

WalletConnect画面で、ユーザーは接続セッションを削除できます。ユーザーがセッションを削除すると、DAppは自動的にウォレットから切断されます。

逆に、DAppで、ユーザーがウォレットから切断すると、接続されたセッションもLunascapeアプリケーションのWalletConnect画面のリストから自動的に削除されます。

## 取引に署名

Lunascapeは以下の署名タイプをサポートしています：

- Personal Sign

![Screenshot 2025-09-26 at 15.41.37.png](img/Screenshot_2025-09-26_at_15.41.37.png)

- Sign Typed Data

![Screenshot 2025-09-26 at 15.41.54.png](img/Screenshot_2025-09-26_at_15.41.54.png)

- Sign Typed Data V3

![Screenshot 2025-09-26 at 15.42.13.png](img/Screenshot_2025-09-26_at_15.42.13.png)

- Sign Typed Data V4

![Screenshot 2025-09-26 at 15.42.29.png](img/Screenshot_2025-09-26_at_15.42.29.png)

## 取引を送信

ユーザーがDAppで取引を行うと、確認ポップアップがLunascapeアプリに表示されます。

![IMG_0869.png](img/IMG_0869.png)

現在LunascapeはLegacy Transactionのみをサポートしています。

EIP1559 Transactionは将来のバージョンでサポートされる予定です。

## ネットワークを切り替え

DAppがネットワークを変更すると、ネットワーク切り替え確認ポップアップが表示され、ユーザーが確認します。

![IMG_0870.png](img/IMG_0870.png)
