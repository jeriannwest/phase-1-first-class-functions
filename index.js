const { spy } = require("chai");

function receivesAFunction(callback) {
    callback(spy)
}
function returnsANamedFunction() {
    return function receivesAFunction(name) {
        console.log(name);
    }
}
function returnsAnAnonymousFunction() {
    return function (name) {
        console.log(name);
    }
}