(function(angular) {
    angular.module('app')
    .controller('Sample03Ctrl', ['$scope', function($scope) {
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
    }]);
})(angular);
