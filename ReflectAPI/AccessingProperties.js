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

Reflect.set(person, 'name', 'pawan', mum);

console.log(Reflect.get(person,'name', mum));

console.log(Reflect.has(person,'name'));