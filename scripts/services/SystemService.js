'use strict';

godaddy.service('SystemService',['File','Folder', function (File,Folder) {

    //System treelike structure
    this._root = new Folder("Root",null);

    this.findNodeByPath = function (path) {
        if(path == "Root" || path == "/Root"){
            return this._root;
        }

        var pathArray = path.split("/");
        var currFolder = this._root;

        for(var i = 1, length = pathArray.length; i < length; i++){
            currFolder = currFolder.getChildByName(pathArray[i]);
        }

        if(!currFolder){
            throw new Error("Can't find folder!");
        }

        return currFolder;
    };

    this.addFolder = function (name, path) {
        var parent = this.findNodeByPath(path);
        var newFolder = new Folder(name,parent);

        if(parent.getChildByName(name)){
            alert("Folder or file with that name already exists in this folder!");
            return;
        }
        parent.getChildren().push(newFolder);
        parent.sortChildren();
        alert("Uspesno je dodat novi folder!");
    };


    this.getRoot = function () {
        return this._root;
    };

    //File functions
    this.addFile = function (name,path) {
        if(!(/.*\.((php)|(js)|(css)|(html))$/.test(name))){
            alert("Fajl nije odgovarajuceg formata!");
            return;
        }

        var parent = this.findNodeByPath(path);
        var type = name.slice().split(".")[1];
        var newFile = new File(name,parent,type);

        if(parent.getChildByName(name)){
            alert("Folder or file with that name already exists in this folder!");
            return;
        }
        parent.getChildren().push(newFile);
        parent.sortChildren();
        alert("Uspesno je dodat novi fajl!");
    };

}]);
