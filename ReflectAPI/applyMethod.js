class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    greet(prefix){
        console.log(prefix+'hello i am '+this.name);
    }
}

let person = Reflect.construct(Person, ['Pawan',27]);
//Reflect.apply(person.greet, person, []);
Reflect.apply(person.greet, person, ['This is pawan']);