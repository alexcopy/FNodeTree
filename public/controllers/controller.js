var fTree = angular.module('fTree', []);

fTree.controller('AppCtrl', ['$scope', '$http',
  function ($scope, $http) {
    console.log("UFO Traces in Controller");
    var refresh = function () {
      $http.get('/contactlist').success(function (response) {
        console.log('I got data requested');
        $scope.contactlist = response;
        $scope.contact = "";
      });
    };
    refresh();

    $scope.addContact = function () {
      console.log($scope.contact);
      $http.post('/contactlist', $scope.contact).success(function (response) {
        console.log(response);
        refresh();
      });
    };

    $scope.removeContact = function (id) {
      console.log(id);
      $http.delete('/contactlist/' + id).success(function (response) {
        refresh();
      });
    };

    $scope.editContact = function (id) {
      console.log(id);
      $http.get('/contactlist/' + id).success(function (response) {
        $scope.contact = response;
      });
    };

    $scope.updateContact = function (id) {
      console.log($scope.contact._id);
      $http.put('/contactlist/' + $scope.contact._id, $scope.contact).success(function (response) {
        refresh();
      });
    };
    $scope.deselectContact = function () {
      $scope.contact = "";
    }

  }]);


