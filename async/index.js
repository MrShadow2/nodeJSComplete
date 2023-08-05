let a=4;
let b=0;

let waitingsync= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(30);
    },2000)
})
waitingsync.then((data)=>{
    b=data;
    console.log(a+b);
})

