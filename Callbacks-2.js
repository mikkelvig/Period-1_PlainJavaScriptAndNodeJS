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


function usingFilterMethod(array, filterMethodCallback) {
    var newArray = [];
    for (var i = 0, max = array.length; i < max; i++) {
        if (filterMethodCallback(array[i])) {
            newArray.push(array[i]);
        }
    }
    return newArray;
};

function usingMapMethod(array, mapMethodCallback) {
    var newArray = [];
    for (var i = 0, max = array.length; i < max; i++) {
        newArray.push(mapMethodCallback(array[i]));
    }
    return newArray;
};

console.log(usingFilterMethod(shitHorseArray, filterMethod));
console.log(usingMapMethod(shitHorseArray, mapMethod));
