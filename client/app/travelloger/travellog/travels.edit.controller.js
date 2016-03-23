'use strict';

angular.module('fullstackApp')
  .controller('TravelEditCtrl', function ($scope , CasesResource) {
    $scope.message = 'Hello';

    $scope.save = function(){
        CasesResource.save($scope.case).$promise.then(function(response){
            console.log(response);
            $scope.case = response;
        });
    };
  });
