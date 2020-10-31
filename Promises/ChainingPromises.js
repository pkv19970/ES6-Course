function waitASecond(seconds){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            seconds++;
            resolve(seconds);
        }, 2000);
    });
}

waitASecond(0)
.then(waitASecond) //the value 1 is automatically passed to waitASecond method
.then(function(data){
    console.log(data)
})