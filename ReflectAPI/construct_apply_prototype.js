class Person{
    constructor(name){
        this.name = name;
    }
}

let person = new Person();
Person.prototype.age = 27;

let proto = {
    age : 20,
    greet(){
        console.log('Hello!', this.age);
    }
}

Reflect.setPrototypeOf(person, proto);
Reflect.apply(person.greet,  person, []);