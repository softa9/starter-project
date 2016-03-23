'use strict';

angular.module('routeApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('travels', {
        url: '/travel',
        abstract: true,
        template: '<div ui-view></div>'
      })
      .state('travels.list', {
        url: '',
        controller: 'TravelCtrl',
        templateUrl: 'travelloger/travellog/travels.html'
      })
      .state('travels.new', {
        url: '/new',
        controller: 'TravelEditCtrl',
        templateUrl: 'travelloger/travellog/travelsEdit.html'
    });

  });
