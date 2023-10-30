# 笑顔と素顔 - 広報さばえ

https://code4fukui.github.io/sabae-egaosugao/

## 作成方法

1. MacのOCRツール[ocr_mac](https://github.com/code4fukui/ocr_mac/)などで、PDFデータをテキスト化
```sh
ocr 202308-24.pdf > 202308-24.kv.txt
```

2. [KVTXT](https://github.com/code4fukui/KVTXT/)形式に変更

3. CSVデータを生成
```sh
deno run -A make.js
```
