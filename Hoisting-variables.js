/**
 * Created by Mikkel on 15-02-2016.
 */

// This works because the declaration of name is hoisted
name = "Hubba Bubba";

console.log(name);

var name;



// Here, "Funkytown" is NOT logged because the assignment is NOT hoisted.
hardCunt = "Scooby";

console.log(hardCunt);

hardCunt = "Funkytown";
var hardCunt;


// Hoisting is JavaScript's default behavior of moving all declarations
// to the top of the current scope (to the top of the current script or the current function).
// JavaScript only hoists declarations, not initializations.
// To avoid bugs, always declare all variables at the beginning of every scope.
// Since this is how JavaScript interprets the code, it is always a good rule.
