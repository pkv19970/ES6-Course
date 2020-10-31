function waitASecond(seconds){
    return new Promise((resolve, reject)=>{
        if(seconds>1){
            reject('rejected');
        }
        else
        {   
            console.log(seconds)
            setTimeout(()=>{
                seconds++;
                resolve(seconds);
            }, 2000);
        }
    });
}

waitASecond(0)
.then(waitASecond)
.then(waitASecond) //the value 1 is automatically passed to waitASecond method
.then(function(data){
    console.log(data)
})
.catch(err=>{
    console.log(err)
})