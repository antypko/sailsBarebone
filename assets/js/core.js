angular
  .module('operatorsApp', ['ngRoute'])
  .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
    $routeProvider
      .when('/operators',{
        templateUrl: 'partials/operators.html',
        controller: 'operatorsController'
      })
      .when('/serviceProvider/:id',{
        templateUrl: 'partials/operator.html',
        controller: 'operatorController'
      })
      .otherwise({
        redirectTo: '/operators'
      });
    $locationProvider.html5Mode(true);
  }]);
