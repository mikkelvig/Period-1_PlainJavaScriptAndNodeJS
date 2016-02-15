/**
 * Created by Mikkel on 15-02-2016.
 */

talkDirtyToMe();



function talkDirtyToMe(){
    console.log("I'm a naked cowboy, boo boo bee boo...");
    console.log("Method call first, then method declaration");
};


// Hoisting is JavaScript's default behavior of moving all declarations
// to the top of the current scope (to the top of the current script or the current function).
// JavaScript only hoists declarations, not initializations.
// To avoid bugs, always declare all variables at the beginning of every scope.
// Since this is how JavaScript interprets the code, it is always a good rule.
