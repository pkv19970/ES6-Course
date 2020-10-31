function *select(){
    yield 'Garage';
    yield 'Pawan'
}

let it = select()
console.log(it.next())
console.log(it.next())
console.log(it.next())