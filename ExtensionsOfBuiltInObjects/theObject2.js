let person = {
   // name :'max' // this is commented the line 14 gives output as anna else it outputs max
}

let boss = {
    name : 'anna'
}

console.log(person.__proto__ == Object.prototype)

Object.setPrototypeOf(person, boss);

console.log(person.__proto__ == boss)
console.log(person.name)