# 笑顔と素顔 - 広報さばえ

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

[
![Deploy to GitHub Pages](https://github.com/code4fukui/sabae-egaosugao/actions/workflows/gh-pages.yml/badge.svg)
](https://github.com/code4fukui/sabae-egaosugao/actions/workflows/gh-pages.yml)

「広報さばえ」の人気コーナー「笑顔と素顔」をオープンデータ化し、ウェブで閲覧できるようにしたアーカイブサイトです。

**Demo: https://github.com/code4fukui/sabae-egaosugao

## データ更新の流れ (Workflow)

新しい記事を追加する手順は以下の通りです。

### 1. PDFからテキストを抽出

[ocr_mac](https://github.com/code4fukui/ocr_mac/) などのOCRツールを使い、広報誌のPDFからテキストデータを抽出します。

```sh
# 例: 2023年8月号の24ページから
ocr 202308-24.pdf > 202308-24.kv.txt
```

### 2. KVTXT形式に手動で整形

抽出したテキストを、既存のファイル（例: `202310-26.kv.txt`）を参考に、キーと値がペアになった[KVTXT](https://github.com/code4fukui/KVTXT/)形式に手動で整形します。記事の本文、プロフィール、写真のファイル名などを対応するキーに割り当ててください。

### 3. データファイルを生成

Denoスクリプトを実行し、整形した `.kv.txt` ファイルから `egaosugao.csv` と個別の `.json` ファイルを生成します。

```sh
deno run -A make.js
```

これにより、ウェブサイトが自動的に更新されます。

## データ形式 (Data Format)

-   **`*.kv.txt`**: 各記事の元データです。キーバリュー形式で情報を保持します。
-   **`*.json`**: `make.js` によって `.kv.txt` から自動生成されるJSONファイルです。
-   **`egaosugao.csv`**: 全記事のデータをまとめたCSVファイルです。ウェブサイト (`index.html`) はこのファイルを読み込んで表示しています。

## 出典 (Source)

-   **データ**: [広報さばえ - 鯖江市](https://www.city.sabae.fukui.jp/about_city/koho_kocho/kohosabae/index.html)
-   **音声**: [音訳ボランティア くさぶえ](https://www.sabae-npo.org/doyano/dantai/402/dantai.html)

## 関連ツール (Dependencies)

-   [Deno](https://deno.land/)
-   [KVTXT.js](https://github.com/code4fukui/KVTXT/)
-   [CSV.js](https://js.sabae.cc/CSV.js)