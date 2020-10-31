/*var obj1 ={
    a:1
}
var obj2 = {
    b:2
}

var obj = Object.assign(obj1, obj2)
console.log(obj)*/

class Obj1{
    constructor(){
        this.a = 1;
    }
}

class Obj2{
    constructor(){
        this.b = 2;
    }
}

var obj1 = new Obj1();
var obj2 = new Obj2();

//var obj = Object.assign(obj1, obj2);

// console.log(obj.__proto__ == obj1.__proto__)
// console.log(obj.__proto__ == obj2.__proto__)
// console.log(obj.__proto__ == Object.prototype)

var obj = Object.assign({},obj1, obj2); //this will take first object and merge all the objects into it
console.log(obj.__proto__ == Object.prototype)  //new javascript object return true
