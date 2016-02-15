/**
 * Created by Mikkel on 15-02-2016.
 */

var shitHorseArray = ["Bo", "Bob", "Bubba", "Boba", "Darth Vader"];

function filterMethod(parameter) {

    if (parameter.length <= 3)
    {
        return parameter;
    }
};

function mapMethod(parameter) {

    return parameter.toUpperCase();
};



console.log(shitHorseArray.filter(filterMethod));
console.log(shitHorseArray.map(mapMethod));
