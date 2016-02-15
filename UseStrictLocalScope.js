/**
 * Created by Mikkel on 15-02-2016.
 */

// Declared inside a function, it has local scope
// only the code inside the function is in strict mode



x = 3.14;       // This will not cause an error.
myFunction();

function myFunction() {
    "use strict";
    // y = 3.14;                   This will cause an error (y is not defined)
}
