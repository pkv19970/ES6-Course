/*let array = [10,12,16];
console.log(array)

let newArray = Array.from(array, val => val*2);
console.log(newArray)*/

var inventory = [
    {name:'apples', quantity:2},
    {name:'bananas', quantity:0},
    {name:'cherries', quantity:5}
]

function findCherries(fruit){
    return fruit.name === 'cherries';
}

console.log(inventory.find(findCherries));