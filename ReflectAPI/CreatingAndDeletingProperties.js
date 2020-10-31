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

Reflect.defineProperty(person, 'hobbies',{
    value:['cricket','football','tennis'],
    writable:true,
    configurable:true
})

person.hobbies.push('baseball')

//delete person.age  OR

Reflect.deleteProperty(person, 'age')

console.log(person.age)

console.log(person.hobbies)

console.log(Reflect.ownKeys(person))


