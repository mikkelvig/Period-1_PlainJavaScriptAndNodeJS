/**
 * Created by Mikkel on 15-02-2016.
 */

// Every JavaScript object has a prototype. The prototype is also an object.
// All JavaScript objects inherit their properties and methods from their prototype.
// Objects created using an object literal, or with new Object(), inherit from a
// prototype called Object.prototype.
// Objects created with new Date() inherit the Date.prototype.
// The Object.prototype is on the top of the prototype chain.

// An object prototype with a method can be created like this:
function shitHorse(fluffy, name, age, yoyo) {
    this.fluffy = fluffy;
    this.name = name;
    this.age = age;
    this.yoyo = yoyo;
    this.whatYoyo = function () {
        return "YoYo currently used: " + this.yoyo;
    };
};

// When used that way, you can use "new" to create new objects:
var mikkel = shitHorse("Very fluffy", "Mikkel Vig", 3, "ShitHorse Extreme Max 2000 YoYo");
var bobaFett = shitHorse("Not so fluffy", "Boba Fett", 345, "Ding dong kapooow YoYo");

// Adding a property to an object:
mikkel.town = "Funkytown";

// Adding a new method to an object:
bobaFett.fluffyLevel = function () {
    return "Fluffy-level is: " + this.fluffy;
};
