'use strict';

angular.module('fullstackApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('cases', {
<<<<<<< HEAD
        url: '/travels',
=======
        url: '/cases',
>>>>>>> a8d9c66351bef4d772cf5460b090bf53ebc6f133
        abstract: true,
        template: '<div ui-view></div>'
      })
      .state('cases.list', {
        url: '',
        controller: 'CasesCtrl',
        templateUrl: 'app/cases/cases.html'
      })
      .state('cases.new', {
        url: '/new',
        controller: 'CasesEditCtrl',
        templateUrl: 'app/cases/casesEdit.html'
    });

  });
