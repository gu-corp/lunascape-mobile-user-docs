---
title: デフォルトRSSソース
---

# デフォルトRSSソース
<!-- 
- **特定の言語-地域の組み合わせ**: まず、`{language}-{region}`形式（例：en-us、es-mx、en-ca）を使用して完全一致を探します
     -->
    言語設定を変更（Lunascape mobile設定）
    
    ![IMG_3424.png](img/IMG_3424.png)
    
    iOS: 地域設定を変更（OS設定 → 一般 → 言語と地域 → 地域）
    
    ![IMG_3426.png](img/IMG_3426.png)
    
- **言語のみのフォールバック**: 特定の地域の一致が見つからない場合、言語コードのみ（例：`en`、`es`、`fr`）にフォールバックします
- **デフォルトフォールバック**: どちらも一致しない場合、デフォルトの英語BBCニュースソースを返します

アプリケーションは以下の特定の組み合わせをサポートしています：

**英語バリエーション:**

- en-us → New York Times (USA)
- en-ca → Global News (Canada)
- en-au → ABC News (Australia)
- en (default) → BBC News (UK)

**スペイン語バリエーション:**

- es-mx → El Siglo de Torreón (Mexico)
- es-ar → Clarín (Argentina)
- es (default) → El País (Spain)

**その他の言語:**

- ja → Infoseek (Japanese)
- vi → VnExpress (Vietnamese)
- zh-cn → General Chinese news sources
- ar → Al Masry Al Youm (Arabic)
- pt → RTP (Portuguese)
- ru → MK.ru (Russian)
- fr → Le Monde (French)
- de → Der Spiegel (German)
- hi → News18 (Hindi)
- bn → Hindustan Times (Bengali)
- id → AntaraNews (Indonesian)
- tr → Hürriyet (Turkish)
- it → ANSA (Italian)
- ko → YNA (Korean)
- th → Prachachat (Thai)
- nl → Telegraaf (Dutch)
- pl → PolsatNews (Polish)
- uk → LB.ua (Ukrainian)
