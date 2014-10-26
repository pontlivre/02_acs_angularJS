<div ng-non-bindable>
# 第３回：フィルター

AngularJSにはフィルターと呼ばれるデータを整形する機能が標準で搭載されています。  
このフィルター機能によりモデルの値を変更することなく表示フォーマットを変換することができます。  
つまり、**ビュー部分の表示ロジックを提供する** のがフィルターの役割ということです。

----

### 図1 AngularJSにおけるMVC構成とその役割

![AngularJSにおけるMVC構成とその役割](./images/sample03_1.png)

----

## フィルターの利用方法

フィルターはエクスプレッションでモデルを出力するときに _|_ に続いてフィルター名を指定します。

```html
{{ model|フィルター名 }}
```

また、フィルターには引数を指定できるものもあります。その場合は _:_ を区切り文字として引数を指定します。

```html
{{ model | フィルター名:引数1:引数2:... }}
```

あと、フィルターをいくつもチェーンして指定することも出来ます。

```html
{{ model | フィルター１ | フィルター２ | ... }}
```

## ビルトインフィルター

まずは標準で用意されているフィルターについて紹介したいと思います。

* 大文字／小文字フィルター(lowercase/uppercase)
* 通貨フィルター(currency)
* 日付フィルター(date)
* 数値フィルター(number)

* JSONフィルター(json)
* 表示件数フィルター(limitTo)
* ソートフィルター(orderBy)
* フィルタリングフィルター(filter)





## カスタムフィルター




</div>