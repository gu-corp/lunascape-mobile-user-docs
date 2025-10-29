---
title: ウォレット操作
---

# DAppでのウォレット操作

## ウォレットを接続

DAppで、接続ボタンをクリックして接続ウォレットオプションを表示します。Lunascapeを選択すると、接続確認ポップアップが表示され、ユーザーが接続を確認します。

![Simulator Screenshot - iPhone 16 - 2025-09-26 at 17.29.24.png](img/Simulator_Screenshot_-_iPhone_16_-_2025-09-26_at_17.29.24.png)

![Simulator Screenshot - iPhone 16 - 2025-09-26 at 17.29.30.png](img/Simulator_Screenshot_-_iPhone_16_-_2025-09-26_at_17.29.30.png)

Pancakeswapなどの一部のDAppでは、Lunascapeウォレットが接続ウォレットのリストに表示されない場合があります。ethereum.isMetaMaskを有効にし、Metamaskウォレットの名前で接続してください。

![Simulator Screenshot - iPhone 16 - 2025-09-26 at 17.32.35.png](img/Simulator_Screenshot_-_iPhone_16_-_2025-09-26_at_17.32.35.png)

![Simulator Screenshot - iPhone 16 - 2025-09-26 at 17.33.47.png](img/Simulator_Screenshot_-_iPhone_16_-_2025-09-26_at_17.33.47.png)

## トークンを追加

ウォレットに新しいトークンを追加する方法は2つあります。

### 方法1：トークンを手動で追加

アセット一覧画面で、追加ボタンをクリックします。アセット追加画面が表示されます。

![Simulator Screenshot - iPhone 16 - 2025-09-29 at 10.49.21.png](img/Simulator_Screenshot_-_iPhone_16_-_2025-09-29_at_10.49.21.png)

トークンタイプが**ベース通貨**の場合、ユーザーは対応するネイティブトークンを追加するために**ネットワーク**を選択するだけです。

![Simulator Screenshot - iPhone 16 - 2025-09-29 at 10.52.47.png](img/Simulator_Screenshot_-_iPhone_16_-_2025-09-29_at_10.52.47.png)

トークンタイプが**ERC-20**の場合、ユーザーはアドレスフィールドに**コントラクトアドレス**を入力します。QRコードスキャン機能もサポートされています。
コントラクトアドレスを入力すると、トークン情報が自動的に表示されます：トークン名、シンボル、小数点以下桁数。

![Simulator Screenshot - iPhone 16 - 2025-09-29 at 10.56.57.png](img/Simulator_Screenshot_-_iPhone_16_-_2025-09-29_at_10.56.57.png)

**注意**：ERC-20トークンは**1つまたは複数のコントラクトアドレス**を持つことができ、各アドレスはこのトークンがサポートされているネットワークに対応します。
例えば：USCは多くのネットワークでサポートされています：Ethereum、BNB Smart Chain、Solana、Polygon、... 対応するコントラクトアドレスは：

- Ethereumのコントラクトアドレス：0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48
- BNB Smart Chainのコントラクトアドレス：0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d
- Solanaのコントラクトアドレス：EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v

したがって、ユーザーが選択されたネットワークと間違ったコントラクトアドレスを入力すると、正しいトークン情報が取得されません。

最後に、ユーザーは**アセットを追加**ボタンをクリックして新しいトークンの追加プロセスを完了します。

### 方法2：DAppからトークンを追加

ユーザーは使用しているDAppから新しいトークンを追加できます。

例えば、ユーザーはCoinMarketCapから多くのトークンを検索して追加できます - これは有名で、正当で安全なWebサイトです。ここで、ユーザーは希望するトークンを検索し、**コントラクト**フィールドに移動できます。

![Simulator Screenshot - iPhone 16 - 2025-09-29 at 11.15.03.png](img/Simulator_Screenshot_-_iPhone_16_-_2025-09-29_at_11.15.03.png)

次に、ウォレットで選択されたネットワークに対応するコントラクトアドレスに移動します。ウォレットでEthereumネットワークが選択されている場合、Ethereumネットワークのコントラクトアドレスに移動します。その後、MetaMaskアイコンをクリックします。

![Simulator Screenshot - iPhone 16 - 2025-09-29 at 11.16.03.png](img/Simulator_Screenshot_-_iPhone_16_-_2025-09-29_at_11.16.03.png)

次に、CoinMarketCapへの接続許可を求めるポップアップが表示されます。以前に接続したことがある場合、接続許可を求めるポップアップは表示されません。

![Simulator Screenshot - iPhone 16 - 2025-09-29 at 11.21.09.png](img/Simulator_Screenshot_-_iPhone_16_-_2025-09-29_at_11.21.09.png)

ユーザーが接続を確認した後、トークン追加ポップアップが表示されます。

![Simulator Screenshot - iPhone 16 - 2025-09-29 at 11.21.16.png](img/Simulator_Screenshot_-_iPhone_16_-_2025-09-29_at_11.21.16.png)

最後に、ユーザーは**トークンを追加**ボタンをクリックしてトークン追加プロセスを完了します。

## ネットワークを追加

ネットワークを追加する方法は2つあります

### 方法1：ネットワークを手動で追加

設定/ネットワーク/ネットワークを追加の指示を確認

### 方法2：DAppからネットワークを追加

DAppで、ユーザーがネットワーク変換を実行したり、ネットワークを追加したりし、そのネットワークがウォレットに存在しない場合、ネットワーク追加確認ポップアップが表示され、ユーザーがネットワークの追加を確認します。

![Simulator Screenshot - iPhone 16 - 2025-09-29 at 14.15.12.png](img/Simulator_Screenshot_-_iPhone_16_-_2025-09-29_at_14.15.12.png)

**注意**：新しいネットワークが追加されると、そのネットワークのネイティブトークン（ベース通貨）も自動的にウォレットに追加されます。

## ネットワークを切り替え

ユーザーがDAppでネットワークを切り替えると、ネットワーク切り替え確認ポップアップが表示されます。

![Simulator Screenshot - iPhone 16 - 2025-09-29 at 14.15.25.png](img/Simulator_Screenshot_-_iPhone_16_-_2025-09-29_at_14.15.25.png)

逆に、ユーザーがウォレットでネットワークを切り替えると、DAppは自動的に対応するネットワークに切り替わります（この場合、確認ポップアップは表示されません）

以下の場合：ネットワークAがウォレットに追加されているが、ネットワークAのネイティブトークン（ベース通貨）がウォレットから削除されている。ユーザーがDAppでネットワーク切り替え操作を実行すると、まずネットワークのネイティブトークン追加確認ポップアップが表示され、ユーザーが確認した後、ネットワーク切り替え確認ポップアップが次に表示されます。

![Simulator Screenshot - iPhone 16 - 2025-09-29 at 14.31.33.png](img/Simulator_Screenshot_-_iPhone_16_-_2025-09-29_at_14.31.33.png)

## 取引に署名

多くのDAppはウォレット経由でのログインをサポートしており、ユーザーがウォレット情報を使用してDAppでアクティブなアカウントを作成できることを意味します。

DAppをウォレットに接続した後、ユーザーはアカウント作成またはDAppの使用を確認するために取引に署名します。

![Simulator Screenshot - iPhone 16 - 2025-09-29 at 14.43.40.png](img/Simulator_Screenshot_-_iPhone_16_-_2025-09-29_at_14.43.40.png)

ユーザーがDAppで署名ボタンをクリックすると、署名リクエストポップアップが表示され、ユーザーが確認します。

![Simulator Screenshot - iPhone 16 - 2025-09-29 at 14.45.03.png](img/Simulator_Screenshot_-_iPhone_16_-_2025-09-29_at_14.45.03.png)

ユーザーは署名するためにウォレットパスワードが必要です。

![Simulator Screenshot - iPhone 16 - 2025-09-29 at 14.45.15.png](img/Simulator_Screenshot_-_iPhone_16_-_2025-09-29_at_14.45.15.png)

Lunascapeは4つの署名方法をサポートしています：Personal Sign、Sign Typed Data、Sign Typed Data V3、Sign Typed Data V4

## 取引を送信

ユーザーがDAppで送信取引を行うと、取引確認ポップアップが表示されます。

![Simulator Screenshot - iPhone 16 - 2025-09-29 at 15.30.30.png](img/Simulator_Screenshot_-_iPhone_16_-_2025-09-29_at_15.30.30.png)

![Simulator Screenshot - iPhone 16 - 2025-09-29 at 15.30.46.png](img/Simulator_Screenshot_-_iPhone_16_-_2025-09-29_at_15.30.46.png)

または、ユーザーがスワップ操作を実行すると、取引確認ポップアップも表示されます。

![Simulator Screenshot - iPhone 16 - 2025-09-29 at 15.33.55.png](img/Simulator_Screenshot_-_iPhone_16_-_2025-09-29_at_15.33.55.png)

取引確認ポップアップで、ユーザーは希望する取引手数料を設定できます。

Lunascapeは選択されたネットワークに基づいて3つの値を計算しました：スロー、平均、高速。デフォルトでは、平均値が選択されています。

ユーザーは取引手数料設定ポップアップの詳細設定ボタンをクリックして、取引手数料を手動で調整することもできます。

![Screenshot 2025-09-29 at 15.39.10.png](img/Screenshot_2025-09-29_at_15.39.10.png)

![Simulator Screenshot - iPhone 16 - 2025-09-29 at 15.36.47.png](img/Simulator_Screenshot_-_iPhone_16_-_2025-09-29_at_15.36.47.png)
