//angular.module('localServiceProviderApp', [])
angular
  .module('operatorsApp')
  // super simple service
  // each function returns a promise object
  .factory('Operators', function($http) {
    return {
      get : function() {
        return $http.get('/api/operators');
      },
      getById : function(id) {
        return $http.get('/api/operators/' + id);
      },
      create : function(newServiceProvider) {
        return $http.post('/api/operators', newServiceProvider);
      },
      edit : function(serviceProvider) {
        return $http.put('/api/operator', serviceProvider);
      },
      delete : function(id) {
        return $http.delete('/api/operators/' + id);
      }
    }
  });
