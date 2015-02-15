<div ng-non-bindable>
# 第３回：フィルター

AngularJSにはフィルターと呼ばれるデータを整形する機能が標準で搭載されています。  
このフィルター機能によりモデルの値を変更することなく表示フォーマットを変換することができます。  
つまり、**ビュー部分の表示ロジックを提供する** のがフィルターの役割ということです。

今回は、AngularJSであらかじめ用意されているビルトインフィルターについて紹介します。

----

### 図1 AngularJSにおけるMVC構成とその役割

![AngularJSにおけるMVC構成とその役割](./images/sample03_1.png)

----

## フィルターの利用方法

フィルターはエクスプレッションでモデルを出力するときに ```|``` に続いてフィルター名を指定します。

```html
{{ model|フィルター名 }}
```

また、フィルターには引数を指定できるものもあります。その場合は ```:``` を区切り文字として引数を指定します。

```html
{{ model | フィルター名:引数1:引数2:... }}
```

あと、フィルターをいくつもチェーンして指定することも出来ます。

```html
{{ model | フィルター１ | フィルター２ | ... }}
```

## ビルトインフィルター

まずは標準で用意されているフィルターについて紹介したいと思います。

1. 大文字／小文字フィルター(lowercase/uppercase)
2. 通貨フィルター(currency)
3. 日付フィルター(date)
4. 数値フィルター(number)
5. JSONフィルター(json)
6. 表示件数フィルター(limitTo)
7. ソートフィルター(orderBy)
8. フィルタリングフィルター(filter)

以降のフィルターの説明では、次のモデルを使用します。

```javascript
// ハイキュー！！烏野高校メンバー９人を格納したリストモデル
// ※生年月日の年は適当です
$scope.members = [
    {name : "日向(Hinata)",     position : "ミドルブロッカー",   birthday : new Date(2004, 6,21), height : 162.8 },
    {name : "影山(Kageyama)",   position : "セッター",           birthday : new Date(2004,12,22), height : 180.6 },
    {name : "澤村(Sawamura)",   position : "ウイングスパイカー", birthday : new Date(2002,12,31), height : 176.8 },
    {name : "菅原(Sugawara)",   position : "セッター",           birthday : new Date(2003, 6,13), height : 174.3 },
    {name : "田中(Tanaka)",     position : "ウイングスパイカー", birthday : new Date(2004, 3, 3), height : 177.2 },
    {name : "東峰(Azumane)",    position : "ウイングスパイカー", birthday : new Date(2003, 1, 1), height : 184.7 },
    {name : "西谷(Nishinoya)",  position : "リベロ",             birthday : new Date(2003,10,10), height : 159.3 },
    {name : "月島(Tsukishima)", position : "ミドルブロッカー",   birthday : new Date(2004, 9,27), height : 188.3 },
    {name : "山口(Yamaguchi)",  position : "ミドルブロッカー",   birthday : new Date(2004,11,10), height : 179.5 }
];
```


### 1. 大文字／小文字フィルター(lowercase/uppercase)

lowercase フィルターは文字を小文字に変換します。uppercase フィルターはその逆で小文字を大文字に変換します。

以下のサンプルでは、リストモデルの各要素が奇数であれば```name```を小文字化し、偶数であれば大文字化して表示しています。

```html
&lt;li ng-repeat="member in members">
    {{$index}}
    &lt;span ng-show="$odd">{{member.name|lowercase}}&lt;span>
    &lt;span ng-show="$even">{{member.name|uppercase}}&lt;span>
&lt;li>
```

この例で使用している ```ng-repeat``` について簡単に説明します。  
```ngRepeat``` は、テンプレート上でループ処理を行うディレクティブです。

```変数 in 式``` や ```(キー, 値) in 式``` のように書いて使用します。
また、ループ内では以下の変数が使用できます。

* $index : 現在の繰り返し処理中の何番目かを表す(０始まり)
* $first : 現在の繰り返し中の最初の要素であれば true
* $last  : 現在の繰り返し中の最後の要素であれば true
* $middle : 現在の繰り返し中の中間(最初と最後でない)の要素であれば true
* $even : $indexが偶数であれば true
* $odd : $indexが奇数であれば true

### 2. 通貨フィルター(currency)

currency は通貨を表示するフィルターです。$や¥などの通貨のシンボルと3桁ごとにカンマで編集してくれます。  
デフォルトではUSドル表記となるため、日本円での表記をするには別途 i18n 用のスクリプト(i18n/angular-locale_ja-jp.js)を読み込む必要があります。  
また、読み込んだとしても小数点以下2桁が表示されるため、あまり使う機会はないでしょう。

```html
&lt;div>{{100|currency}}&lt;div>
&lt;div>{{1000|currency}}&lt;div>
```
### 3. 日付フィルター(date)

```date``` フィルターは日付オブジェクトを指定したフォーマットに変換します。




</div>