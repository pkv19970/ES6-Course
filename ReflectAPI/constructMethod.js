class Person{
    constructor(name){
        this.name = name;
    }
}

function topObj(){
    this.age = 27;
}

let person = Reflect.construct(Person, ['max'], topObj);
console.log(person);

console.log(person.__proto__ == topObj.prototype);