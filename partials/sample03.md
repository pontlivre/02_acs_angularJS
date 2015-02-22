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

標準で用意されている８つのフィルターについて紹介したいと思います。

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

書式（小文字）：```{{文字列 | lowercase}}```  
書式（大文字）：```{{文字列 | uppercase}}```

```lowercase``` フィルターは文字を小文字に変換します。```uppercase``` フィルターはその逆で小文字を大文字に変換します。

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

書式：```{{数値 | currency}}```

```currency``` は通貨を表示するフィルターです。$や¥などの通貨のシンボルと3桁ごとにカンマで編集してくれます。  
デフォルトではUSドル表記となるため、日本円での表記をするには別途 i18n 用のスクリプト(i18n/angular-locale_ja-jp.js)を読み込む必要があります。  
また、読み込んだとしても小数点以下2桁が表示されるため、あまり使う機会はないでしょう。

```javascript
{{100 | currency}}   // => $100.00
{{1000 | currency}}  // => $1,000.00
```
### 3. 日付フィルター(date)

書式：```{{日付オブジェクト or ISO8601形式日付文字列 | date:format}}```

```date``` フィルターは日付オブジェクトを指定したフォーマットに変換します。

```javascript
{{ member[0].birthday | date:'yyyy/MM/dd'}}  // => '2004/06/21'
{{ '2014-02-15T10:23:56+9:00' | date:'yyyy年M月d日 H時m分s秒'}}  // => '2014年02月15日 10時23分56秒'
```

### 4. 数値フィルター

書式：```{{数値 | number}}```

```number``` フィルターは、currency フィルターのように3桁ごとにカンマで区切って表示します。  
また、引数に数値を指定することで、小数点以下の桁数を制限できます。

```javascript
{{ 1000 | number }}        // => 1,000
{{ 198.643 | number:1 }}   // => 198.6  小数点以下２桁目で四捨五入  
{{ 198.645 | number:2 }}   // => 198.65  小数点以下３桁目で四捨五入
```

### 5. JSONフィルター

書式：```{{任意オブジェクト | json}}```

```json``` フィルターは JavaScriptオブジェクトをJSON形式に変換して表示します。  
業務としては使用することはないと思いますが、開発時のデバッグとしてモデルの値を確認したいときに便利です。

```javascript
{{ members[0] | json }}
// => { "name": "日向(Hinata)", "position": "ミドルブロッカー", "birthday": "2004-06-20T15:00:00.000Z", "height": 162.8 }
```

### 6. 表示件数フィルター(limitTo)

書式：```{{配列 | limitTo:件数}}```

```limitTo``` フィルターは ```ng-repeat``` と併用して、配列の表示件数をフィルタリングします。

```html
&lt;ul>
  &lt;li ng-repeat="member in members | limitTo:3">
  {{$index}} {{member.name}}
  &lt;/li>
&lt;/ul>

// 出力結果
//   0 日向(Hinata)
//   1 影山(Kageyama)
//   2 澤村(Sawamura)
```

### 7. ソートフィルター(orderBy)

書式：```{{配列 | orderBy:項目名:逆順オプション}}```

```orderBy``` フィルターは配列をソートします。  
第1引数には、ソートする項目名を指定します。例えばサンプルモデルで身長(height)の順でソートするには、```orderBy:'height'``` とします。
第2引数は、逆順オプションで ```true``` を指定すると逆順にソートされます。  
また、第2引数を指定しなくても第1引数の項目名にプレフィックス ```+```(昇順), ```-```(降順) をつけても順序を指定することができます。

```html
&lt;ul>
  &lt;li ng-repeat="member in members | orderBy:'-height'">
  {{member.name}}
  &lt;li>
&lt;ul>
```

フィルタはチェーンすることができるため、例えば 烏野高校での身長の高いトップ３を表示するには
以下のように書くことで実現できます。

```html
&lt;ul>
  &lt;li ng-repeat="member in members | orderBy:'-height' | limitTo:3">
  {{member.name}}
  &lt;li>
&lt;ul>
```

### 8. フィルタリングフィルター(filter)

書式：```{{配列 | filter:expression:comparator}}```

```filter``` はユーザー入力によ絞り込み機能を提供します。  

第1引数 ```expression``` には検索値を指定します。 リテラルで指定することもできますし、変数を指定することもできます。
第2引数 ```comparator``` では完全一致(true)か部分一致(false)を指定します。省略した場合は、undefinedのため 部分一致(false)となります。

以下の例では、```ng-model``` により ```query``` と定義された入力ボックスの内容に応じて烏野高校メンバーを絞り込みを行います。  
入力ボックスに入力した内容は、モデルの全ての項目にマッチングされるため、「セッター」と入力して絞り込んだり、「18」と入力して身長180cm台で絞り込んだりすることができます。
```html
&lt;p>検索：&lt;input type="text" ng-model="query">&lt;p>
&lt;table class="table">
&lt;tr>
  &lt;th>名前&lt;th>
  &lt;th>ポジション&lt;th>
  &lt;th>生年月日&lt;th>
  &lt;th>身長&lt;th>
&lt;tr>
&lt;tr ng-repeat="member in members | filter:query">
  &lt;th>{{member.name}}&lt;th>
  &lt;th>{{member.position}}&lt;th>
  &lt;th>{{member.birthday | date:'M/d'}}&lt;th>
  &lt;th>{{member.height}}&lt;th>
&lt;tr>
&lt;table>
```

また、以下のようにすることで検索項目を名前(name)項目だけとすることもできます。
```html
&lt;p>検索：&lt;input type="text" ng-model="query.name">&lt;p>
```

## 今回のまとめ

ビューロジックであるフィルター機能を利用することで、モデルの値を変更することなく表示フォーマットが変更できます。  
そして、よく使うフィルターはあらかじめ用意されているため、すぐに使うことができます。  
また、独自変換ロジックを持つフィルターをカスタムフィルターとして定義もできます。
カスタムフィルターについては、次回説明したいと思います。


