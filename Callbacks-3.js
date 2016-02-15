/**
 * Created by Mikkel on 15-02-2016.
 */

var array1 = [1,2,3];
var array2 = [1,2,3];

function handleNumArrays(na1, na2, callbackMethod){
    var newArray = [];
    for(var i= 0; i < na1.length; i++){
        newArray.push(na1[i] + na2[i]);
    }
    callbackMethod(newArray);
};


function addComma(array){
    console.log(array.join(","));
};

function sumCalculation(array){
    var sum = 0;
    for(var i= 0; i < array.length; i++){
        sum += array[i];
    }
    console.log(sum);
};

function multiplyStuff(array){
    var newArray = array.map(function(x){
        return x * 10;
    });
    console.log(newArray.join(","));
};


handleNumArrays(array1,array2,addComma);
handleNumArrays(array1,array2,sumCalculation);
handleNumArrays(array1,array2,multiplyStuff);