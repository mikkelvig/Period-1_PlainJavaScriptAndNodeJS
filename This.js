/**
 * Created by Mikkel on 15-02-2016.
 */

// All functions in JavaScript have properties, just as objects have properties.
// And when a function executes, it gets the this property—a variable with the value of the
// object that invokes the function where this is used.

// The this reference ALWAYS refers to (and holds the value of) an object—a singular object—
// and it is usually used inside a function or a method, although it can be used outside a
// function in the global scope. Note that when we use strict mode, this holds the value of
// undefined in global functions and in anonymous functions that are not bound to any object.



// In the global execution context (outside of any function), this refers to the global object,
// whether in strict mode or not:
console.log(this.document === document); // true


// Inside a function, the value of this depends on how the function is called:
function f1(){
    return this;
}
f1() === window; // global object


// When a function is called as a method of an object, its this is set to the object the method
// is called on.
var o = {
    prop: 37,
    f: function() {
        return this.prop;
    }
};
console.log(o.f()); // logs 37



// Call & Apply
// Where a function uses the this keyword in its body, its value can be bound to a particular
// object in the call using the call or apply methods that all functions inherit from
// Function.prototype.

function add(c, d){
    return this.a + this.b + c + d;
}
var o = {a:1, b:3};
// The first parameter is the object to use as
// 'this', subsequent parameters are passed as
// arguments in the function call
add.call(o, 5, 7); // 1 + 3 + 5 + 7 = 16

// The first parameter is the object to use as
// 'this', the second is an array whose
// members are used as the arguments in the function call
add.apply(o, [10, 20]); // 1 + 3 + 10 + 20 = 34



// Bind
// Calling f.bind(someObject) creates a new function with the same body and scope as f,
// but where this occurs in the original function, in the new function it is permanently
// bound to the first argument of bind, regardless of how the function is being used.
function f(){
    return this.a;
}
var g = f.bind({a:"mikkel"});
console.log(g()); // mikkel

var o = {a:25, f:f, g:g};
console.log(o.f(), o.g()); // 25, mikkel