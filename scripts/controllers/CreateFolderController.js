'use strict';

godaddy.controller('CreateFolderController', ['$scope', 'SystemService',function ($scope, $SystemService) {
    $scope.folderName = "";
    $scope.path = "Root";

    $scope.createFolder = function () {
        $SystemService.addFolder($scope.folderName,$scope.path);
        $scope.folderName = "";
        $scope.path = "Root";
    }

}]);

