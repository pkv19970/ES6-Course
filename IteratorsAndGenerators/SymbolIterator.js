let array = [];

//overriding the iterator using Symbol

array[Symbol.iterator] = function(){
    let nextValue = 10;
    return{
        next: function(){
            nextValue++;
            return{
                done:nextValue>15?true:false,
                value : nextValue
            }
        }
    }
}
console.log(array)

for(let element of array){
    console.log(element);
}