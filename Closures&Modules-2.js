/**
 * Created by Mikkel on 15-02-2016.
 */

objectBuilderModule = (function() {

    var reusableModuleObject = {};

    reusableModuleObject.age;
    reusableModuleObject.name;

    reusableModuleObject.setAge = function(newAge){
        reusableModuleObject.age = newAge;
    };

    reusableModuleObject.setName = function(newName){
        reusableModuleObject.name = newName;
    };

    reusableModuleObject.getInfo = function(){
        return "Age is: "+reusableModuleObject.age + ", Name is: " + reusableModuleObject.name;

    };

    return reusableModuleObject;
});

var newObject = objectBuilderModule();
var welcomeToANewObject = objectBuilderModule();

newObject.setAge(666);
newObject.setName("Scooby");
welcomeToANewObject.setAge(4);
welcomeToANewObject.setName("Cartoon Hero");

console.log(newObject.getInfo()); // output is: Age is: 666, Name is: Scooby
console.log(welcomeToANewObject.getInfo()); // output is: Age is: 4, Name is: Cartoon Hero
