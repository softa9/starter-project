'use strict';

angular.module('fullstackApp')
  .controller('TravelCtrl', function ($scope , $state , CasesResource) {
    $scope.message = 'Hello';

    CasesResource.query().$promise.then(function (response) {
        $scope.cases = response;
    });

    $scope.newCase = function(){
        $state.go('travels.new');
    };
  });
