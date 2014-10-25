(function(angular) {
    angular.module('app')
        .controller('Sample02Ctrl', ['$scope', function($scope){
            $scope.message = 'Hello World';
            $scope.sayGoodbye = function() {
                $scope.message = 'Goodbye Everyone!';
            };

        /*
        $scope.characters = [
            { "name" : "hinata", height: 162.8 },
            { "name" : "kageyama", height: 180.6 },
            { "name" : "sawamura", height: 176.8 },
            { "name" : "sugawara", height: 174.3 },
            { "name" : "tanaka", height: 177.2 },
            { "name" : "azumane", height: 184.7 },
            { "name" : "nishinoya", height: 159.3 },
            { "name" : "tsukishima", height: 188.3 },
            { "name" : "yamaguchi", height: 179.5 }
        ];
        */
    }]);
})(angular);