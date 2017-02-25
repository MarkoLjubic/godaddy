var godaddy = angular.module('godaddy', ['ui.router']);

godaddy.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider.state(
        {
            name: 'fileView',
            url: '/',
            templateUrl: 'view/fileView.html',
            controller: 'FileViewController'
        }
    ).state(
        {
            name: 'createFolder',
            url: '/createFolder',
            templateUrl: 'view/createFolder.html',
            controller: 'CreateFolderController'
        }
    ).state(
        {
            name: 'createFile',
            url: '/createFile',
            templateUrl: 'view/createFile.html',
            controller: 'CreateFileController'
        }
    )
}]);
