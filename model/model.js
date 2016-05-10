var util = require('util');

function Base() {
    this.name = 'base';
    this.base = 1991;
    
    this.sayHello = function () {
        console.log('hello '+ this.name);
    }
}

Base.prototype.showName = function () {
    console.log(this.name);  
};

function Sub() {
    this.name = 'sub';
}

util.inherits(Sub,Base);
var obBase = new Base();
obBase.showName();
obBase.sayHello();
console.log(obBase);

var obSub = new Sub();
obSub.showName();
// obSub.sayHello(); 
console.log(obSub);

console.log(util.inspect(obBase,true,10,true));



