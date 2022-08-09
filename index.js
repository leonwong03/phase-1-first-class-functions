const { spy } = require("chai");

function receivesAFunction(spies) {
    spies();
    return spies;
    spy();
    return spy;
}
    

function returnsANamedFunction() {
    return function namedFunc() {
        console.log("named function");
    }
}

function returnsAnAnonymousFunction() {
    return function() {
        console.log("anonymous function")
    }
}
