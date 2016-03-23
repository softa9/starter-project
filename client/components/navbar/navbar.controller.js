'use strict';

angular.module('fullstackApp')
  .controller('NavbarCtrl', function ($scope, $location, Auth) {
    $scope.menu = [{
      'title': 'Home',
<<<<<<< HEAD
      'link': '/travelloger/travellog/travellog.js'
  },{
      'title' : 'Travels',
      'link': '/travels'
=======
      'link': '/'
  },{
      'title' : 'Cases',
      'link': '/cases'
>>>>>>> a8d9c66351bef4d772cf5460b090bf53ebc6f133
  }];

    $scope.isCollapsed = true;
    $scope.isLoggedIn = Auth.isLoggedIn;
<<<<<<< HEAD
    $scope.isAdmin = Auth.iTravels
=======
    $scope.isAdmin = Auth.isAdmin;
>>>>>>> a8d9c66351bef4d772cf5460b090bf53ebc6f133
    $scope.getCurrentUser = Auth.getCurrentUser;

    $scope.logout = function() {
      Auth.logout();
      $location.path('/login');
    };

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });
