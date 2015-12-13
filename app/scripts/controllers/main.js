'use strict';

/**
 * @ngdoc function
 * @name nodejsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the nodejsApp
 */
angular.module('nodejsApp')
  .controller('MainCtrl', function ($scope) {
    $scope.trees = [
    ];
    $scope.addTree = function () {
      $scope.trees.push($scope.tree);
      $scope.tree = '';
    };

    $scope.removeTree = function (index) {
      $scope.tree.splice(index, 1);
    };

  });
