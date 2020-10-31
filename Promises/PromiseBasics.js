let promise = new Promise(function(resolve, reject){
    setTimeout(()=>{
         reject('rejected');
    }, 3000)
})

promise.then(data=>{console.log(data)}).catch(err=>{console.log(err)})