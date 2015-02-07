'use strict';

var myApp = angular.module('LM', ['duScroll']);

myApp.directive('owlSingle', [function () {
  return {
    restrict: 'A',

    link: function (scope, element) {
      element.owlCarousel({
        autoPlay: true,
        singleItem: true
      });
    }
  };
}]);

myApp.directive('owlBrands', [function () {
  return {
    restrict: 'A',

    link: function (scope, element) {
      element.owlCarousel({
        items: 6,
        autoPlay: true,
        pagination: false
      });
    }
  };
}]);

myApp.directive('owlServices', [function () {
  return {
    restrict: 'A',

    link: function (scope, element) {
      element.owlCarousel({
        autoPlay: true
      });
    }
  };
}]);

myApp.controller('SubscribeCtrl', ['$scope', '$log', function($scope, $log) {
  $scope.formData = {};

  $scope.submit = function (isValid) {
    if (isValid) $log.log($scope.formData);
  };
}]);

myApp.controller('ContactCtrl', ['$scope', '$log', function($scope, $log) {
  $scope.formData = {};

  $scope.submit = function (isValid) {
    if (isValid) $log.log($scope.formData);
  };
}]);