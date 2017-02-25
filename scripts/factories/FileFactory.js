'use strict';

godaddy.factory('File',function (Node) {

    function File(name, parent, type) {
        Node.apply(this,[name,parent,type]);
        this._text = "Ovo je text fajla : ";
    };

    File.prototype = new Node();

    File.prototype.setText = function (text, mod) {
        if (mod == "w") {
            this._text = text;
        }
        if (mod == "a") {
            this._text += text;
        }
    };

    File.prototype.getText = function () {
        return this._text + this.getName();
    };

    return File;
});