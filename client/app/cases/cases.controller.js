'use strict';

angular.module('fullstackApp')
  .controller('CasesCtrl', function ($scope , $state , CasesResource) {
    $scope.message = 'Hello';

    CasesResource.query().$promise.then(function (response) {
        $scope.cases = response;
    });
    
    $scope.newCase = function(){
        $state.go('cases.new');
    };
  });
