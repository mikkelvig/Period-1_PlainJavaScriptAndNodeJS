/**
 * Created by Mikkel on 15-02-2016.
 */

var makeCounter = function() {
    var privateCounter = 0;
    function changeBy(val) {
        privateCounter += val;
    }
    return {
        increment: function() {changeBy(1);},
        decrement: function() {changeBy(-1);},
        value: function() {
            return privateCounter;
        }
    }
};
var counter1 = makeCounter();
var counter2 = makeCounter();

counter1.increment();
counter2.increment();
counter1.increment();
counter2.increment();


console.log(counter1.value()); // both logs should be "2"
console.log(counter2.value());
