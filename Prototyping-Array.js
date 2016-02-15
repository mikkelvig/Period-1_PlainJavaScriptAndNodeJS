/**
 * Created by Mikkel on 15-02-2016.
 */

var shitHorseArray = ["Bo", "Bob", "Bubba", "Boba", "Darth Vader"];

function filterMethod(parameter) {
    if (parameter.length <= 3) {
        return parameter;
    }
};
function mapMethod(parameter) {
    return parameter.toUpperCase();
};


Array.prototype.usingFilterMethod = function (filterMethodCallback) {
    var newArray = [];
    for (var i = 0, max = this.length; i < max; i++) {
        if (filterMethodCallback(this[i])) {
            newArray.push(this[i]);
        }
    }
    return newArray;
};

Array.prototype.usingMapMethod = function (mapMethodCallback) {
    var newArray = [];
    for (var i = 0, max = this.length; i < max; i++) {
        newArray.push(mapMethodCallback(this[i]));
    }
    return newArray;
};


console.log(shitHorseArray.usingFilterMethod(filterMethod));
console.log(shitHorseArray.usingMapMethod(mapMethod));