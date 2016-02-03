angular
  .module('operatorsApp')
  .controller('operatorController',
    function ($scope, $http, Operators) {
      $scope.formData = {};
      // when landing on the page, get all service_providers and show them
      Operators.get()
        .success(function(data) {
          $scope.operators = data;
        })
        .error(function(data) {
          console.log('Error: ' + data);
        });

      $scope.createOperator = function() {
        // validate the formData to make sure that something is there
        // if form is empty, nothing will happen
        // people can't just hold enter to keep adding the same to-do anymore
        $scope.buttonDisabled = true; // we can disable the button now, but we cannot clear the form yet!
        if ($scope.formData.name.length) { // check if something is entered
          Operators.create($scope.formData)
            .success(function(data) {
              $scope.Operators = data;
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

      // delete a service_provider after checking it
      $scope.deleteOperator = function(id) {
        Operators.delete(id)
          .success(function(data) {
            $scope.operators = data;
            console.log(data);
          })
          .error(function(data) {
            console.log('Error: ' + data);
          });
      };
    });
