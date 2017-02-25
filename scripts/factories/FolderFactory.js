'use strict';

godaddy.factory('Folder',function (Node) {

    function Folder(name, parent) {
        Node.apply(this,[name,parent,"folder"]);
        this._children = [];
    };

    Folder.prototype = new Node();

    Folder.prototype.isEmpty = function () {
        if(this._children.length == 0){
            return true;
        }
        return false;
    };

    Folder.prototype.getChildren = function () {
        return this._children;
    };

    Folder.prototype.getChildByName = function (name) {
        for(var i = 0, length = this._children.length; i < length ; i++){
            if(name == this._children[i]._name){
                return this._children[i];
            }
        }

        return null;
    };


    Folder.prototype.sortChildren = function () {
        this._children.sort(function(a,b){
            var x,y;
            if(a._type == "folder"){
                x = "a" + a._name.toLowerCase();
            }
            else{
                x = "b" + a._name.toLowerCase();
            }
            if(b._type == "folder"){
                y = "a" + b._name.toLowerCase();
            }
            else{
                y = "b" + b._name.toLowerCase();
            }

            if(x > y){return 1;}
            if(x < y){return -1;}
            else{return 0;}
        });
    };

    Folder.prototype.deleteChild = function (name) {
        var index = 0;
        for(var length = this._children.length; index < length ; index++){
            if(name == this._children[index]._name){
                break;
            }
        }

        if(this._children[index]._type == "folder") {
            (function recurse(currentFolder) {
                var length = currentFolder._children.length;
                for (var i = 0; i < length; i++) {
                    if (!currentFolder._children[i].isEmpty()) {
                        recurse(currentFolder._children[i]);
                    }
                }

                currentFolder._children.splice(0, length);
            })(this._children[index]);
        }

        this._children.splice(index,1);
    };

    return Folder;
});
