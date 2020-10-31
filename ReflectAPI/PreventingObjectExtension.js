class Person{
    constructor(name, age){
        this._name = name;
        this.age = age;
    }

    get name(){
        return this._name;
    }

    set name(value){
        this._name = value;
    }
}

let mum = {
    _name:'mum'
}

let person = Reflect.construct(Person, ['max',27]);

Reflect.preventExtensions(person)

Reflect.defineProperty(person, 'hobbies',{
    value:['cricket','football','tennis'],
    writable:true,
    configurable:true
})

console.log(person.hobbies)