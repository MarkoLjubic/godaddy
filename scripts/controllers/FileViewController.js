'use strict';

godaddy.controller('FileViewController', ['$scope', 'SystemService',function ($scope, $SystemService) {

    var currentFolder = $SystemService.getRoot();
    $scope.filesAndFoldersArray = currentFolder.getChildren();
    $scope.currentPath = "Root";
    $scope.glyphiconArray = [];
    $scope.editSignalArray = [];
    $scope.editNewNameArray = [];
    initEditSignalArray();
    initGlyphiconArray();

    function initEditSignalArray(){
        for(var i = 0,length = currentFolder.getChildren().length; i < length; i++){
            $scope.editSignalArray[currentFolder.getChildren()[i].getName()] = false;
        }
    }

    function initGlyphiconArray() {
        for(var i = 0,length = currentFolder.getChildren().length; i < length; i++){
            if(currentFolder.getChildren()[i].getType()=="folder") {
                $scope.glyphiconArray[currentFolder.getChildren()[i].getName()] = "folder-close";
            }
            else{
                $scope.glyphiconArray[currentFolder.getChildren()[i].getName()] = "file";
            }
        }
    }

    function addNameOnPath(name) {
        $scope.currentPath += ("/" + name);
    }

    function removeNameFromPath() {
        var pathArray = $scope.currentPath.split("/");
        pathArray.pop();
        $scope.currentPath = pathArray.join("/");
    }

    $scope.openEditForm = function (name) {
        if(!$scope.editSignalArray[name]){
            $scope.editSignalArray[name] = true;
            return;
        }

        $scope.editSignalArray[name] = false;
    };

    $scope.editFolder = function (name) {
        if(currentFolder.getChildByName($scope.editNewNameArray[name])){
            alert("Folder with that name already exists in this folder!");
            $scope.editNewNameArray[name] = "";
            return;
        }

        currentFolder.getChildByName(name).setName($scope.editNewNameArray[name]);
        currentFolder.sortChildren();
        initEditSignalArray();
        initGlyphiconArray();
    };

    $scope.backToParentFolder = function () {
        if(!currentFolder.getParent()){
            return;
        }

        currentFolder = currentFolder.getParent();
        $scope.filesAndFoldersArray = currentFolder.getChildren();
        removeNameFromPath();
        initEditSignalArray();
        initGlyphiconArray();
    };
    
    $scope.openNode = function (name) {
        if(currentFolder.getChildByName(name).getType()=="folder") {
            currentFolder = currentFolder.getChildByName(name);
            $scope.filesAndFoldersArray = currentFolder.getChildren();
            addNameOnPath(name);
            initEditSignalArray();
            initGlyphiconArray();
        }
        else{
            alert(currentFolder.getChildByName(name).getText());
        }
    };

    $scope.deleteNode = function (name) {
        currentFolder.deleteChild(name);
        $scope.filesAndFoldersArray = currentFolder.getChildren();
        initEditSignalArray();
        initGlyphiconArray();
    }

}]);


