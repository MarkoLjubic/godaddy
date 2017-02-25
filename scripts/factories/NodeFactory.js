'use strict';

godaddy.factory('Node',function () {

    function Node(name, parent, type) {
        this._name = name;
        this._parent = parent;
        this._type = type;
        this._text = "";
    };


    Node.prototype.setName = function (name) {
        this._name = name;
    };

    Node.prototype.getName = function () {
        return this._name;
    };

    Node.prototype.getParent = function () {
        return this._parent;
    };

    Node.prototype.getType = function () {
        return this._type;
    };

    return Node;
});
