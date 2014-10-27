(function(angular){

    var app =
    angular.module('app', ['ngRoute', 'hc.marked', 'ui.bootstrap'])
        .config(['markedProvider', function(markedProvider) {
            markedProvider.setOptions({
                gfm: true,
                tables: true
                /*
                highlight: function (code) {
                    return hljs.highlightAuto(code).value;
                }
                */
            });
    }])
    .config(['$routeProvider', function($routeProvider){
        $routeProvider
            .when('/00', {
                controller : 'topCtrl',
                templateUrl: 'partials/top.html'
            })
            .when('/01', {
                controller : 'pageCtrl',
                templateUrl: 'partials/sample01.html'
            })
            .when('/02', {
                // controller : 'Sample02Ctrl',
                templateUrl: 'partials/sample02.html'
            })
            .when('/powerdBy', {
                controller : 'pageCtrl',
                templateUrl: 'partials/powerd_by.html'
            })
            /*
            .otherWise({
                controller : 'topCtrl',
                templateUrl: 'partials/top.html'
            })
*/
            ;
    }])
    .controller('mainCtrl', ['$location', '$scope', function($location, $scope){
        $scope.pageInfo = { 'no' : 'top' };
        $scope.active = function(num) {
            if (('/' + num) == $location.path()) {
                return 'active';
            }
            return '';
        }
        $scope.pageNo = $location.path();
        $scope.$on('$routeChangeSuccess', function(event, data){
            var path = $location.path();
            if (path) {
                $scope.pageInfo.no = path.substr(1);
            } else {
                $scope.pageInfo.no = 'top';
            }
        });
    }])
    .controller('pageCtrl', ['$scope', function($scope){
    }])
    .controller('topCtrl', ['$scope', function($scope){
    }])
    /*
    .controller('Sample02Ctrl', ['$scope', function($scope){
        console.info("11");
        console.info(app);
        $scope.books = [
            { "title" : "Java入門"},
            { "title" : "JavaScript入門"},
            { "title" : "Ruby入門"}
        ];
        console.info("12");
    }])
*/
    .run(function() {
    });

})(angular);
