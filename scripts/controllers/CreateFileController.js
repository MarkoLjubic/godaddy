'use strict';

godaddy.controller('CreateFileController', ['$scope', 'SystemService',function ($scope, $SystemService) {

    $scope.fileName = "";
    $scope.path = "Root";

    $scope.createFile = function () {
        $SystemService.addFile($scope.fileName,$scope.path);
        $scope.fileName = "";
        $scope.path = "Root";
    }

}]);

