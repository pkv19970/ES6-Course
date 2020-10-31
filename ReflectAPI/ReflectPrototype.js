class Person{
    constructor(name){
        this.name = name;
    }
}

let person = new Person('Max');
Person.prototype.age = 27;

let proto = {
    age:30
}

Reflect.setPrototypeOf(person, proto)
console.log(Reflect.getPrototypeOf(person))