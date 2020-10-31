let promise1 = new Promise(function(resolve, reject){
    setTimeout(function(){
        reject('Rejected1')
    }, 0);
})

let promise2 = new Promise(function(resolve, reject){
    setTimeout(function(){
        reject('Rejected2');
    },2000)
})

let promise3 = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve('resolved2')
    }, 1000)
})
Promise.race([promise3, promise2 , promise1 ]).then(function(success){console.log(success)})
.catch(function(error){
    console.log(error)
})