angular
  .module('operatorsApp')
  .controller('operatorController',
    function ($scope, $routeParams, Operators) {
      $scope.formData = {};
      $scope.serviceProvider = {};
      Operators.getById($routeParams.id)
        .success(function(data){
          console.log(data);
          $scope.operator = data;
        })
        .error(function(err){
          console.log('Error: ' + err);
        });

      // delete a service_provider after checking it

      $scope.editOperator = function() {
        $scope.buttonDisabled = true; // we can disable the button now, but we cannot clear the form yet!
        //var serviceProvider = $scope.serviceProvider;
        var nameAvailable = $scope.operator.name && $scope.operator.name.length;
        if (nameAvailable) { // check if something is entered
          Operators.edit($scope.operator)
            .success(function(data) {
              $scope.operators = data;
              console.log(data);
            })
            .error(function(data) {
              console.log("Error");
              console.log(data);
            })
            .finally(function(data) {
              $scope.formData.name = ""; // only now we can clear the form
              $scope.buttonDisabled = false; // now we can enable the button again
            });
        }
      };

      $scope.deleteOperator = function(id) {
        Operators.delete(id)
          .success(function(data) {
            $scope.operator = data;
          })
          .error(function(err) {
            console.log('Error: ' + err);
          });
      };
    }
  );
