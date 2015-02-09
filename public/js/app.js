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

myApp.directive('selectFile', [function () {
  return {
    restrict: 'A',

    link: function (scope, element) {
      var trigger = element.find('.my-btn');
      var file = element.find('input[type="file"]');

      trigger.on('click', function(e) {
        e.preventDefault();
        file.trigger('click');
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