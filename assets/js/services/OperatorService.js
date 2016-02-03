operatorsApp.service('operatorService', function($http, $q) {
  return {
    'getOperators': function() {
      var defer = $q.defer();
      $http.get('/todo/getOperators').success(function(resp){
        defer.resolve(resp);
      }).error( function(err) {
        defer.reject(err);
      });
      return defer.promise;
    },
    'addOperator': function(operator) {
      var defer = $q.defer();
      $http.post('/operator/addOperator', operator).success(function(resp){
        defer.resolve(resp);
      }).error( function(err) {
        defer.reject(err);
      });
      return defer.promise;
    },
    'removeTodo': function(operator) {
      var defer = $q.defer();
      $http.post('/todo/removeOperator', operator).success(function(resp){
        defer.resolve(resp);
      }).error( function(err) {
        defer.reject(err);
      });
      return defer.promise;
    }
  }});
