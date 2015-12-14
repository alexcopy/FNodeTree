var fTree = angular.module('fTree', []);

fTree.controller('AppCtrl', ['$scope', '$http',
  function ($scope, $http) {
    console.log("UFO Traces in Controller");

    $http.get('/contactlist').success(function (response) {
      console.log('I got data requested');
      $scope.contactlist = response;
    });

    $scope.addContact = function () {
      console.log($scope.contact);
      $http.post('/contactlist', $scope.contact).success(function (response) {
        console.log(response);
      });
    };

  }]);


