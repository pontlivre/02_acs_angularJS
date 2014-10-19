(function(angular){

    angular.module('app', ['ngRoute', 'hc.marked', 'ui.bootstrap'])
        .config(['markedProvider', function(markedProvider) {
            markedProvider.setOptions({
                gfm: true,
                tables: true
                /*
                sanitize: true,
                highlight: function (code) {
                    return hljs.highlightAuto(code).value;
                  }
                  */
            });
    }])
    .config(['$routeProvider', function($routeProvider){
        $routeProvider
            .when('/01', {
                controller : 'PageCtrl',
                templateUrl: 'partials/sample01.html'
            });
    }])
    .controller('PageCtrl', ['$scope', function($scope){

    }])
    .run(function() {
        console.info('RUN')	;
        // hljs.initHighlightingOnLoad();
    });

})(angular);
