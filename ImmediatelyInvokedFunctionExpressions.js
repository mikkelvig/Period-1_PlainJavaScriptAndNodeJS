/**
 * Created by Mikkel on 15-02-2016.
 */

// IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon
// as it is defined.

// Either of the following two patterns can be used to immediately invoke
// a function expression, utilizing the function's execution context to create "privacy".

(function(){ /* code */ }());
(function(){ /* code */ })();

// Passing variables into the scope is done as follows:

(function(a, b) {
    // a == 'hello'
    // b == 'world'
})('hello', 'world');