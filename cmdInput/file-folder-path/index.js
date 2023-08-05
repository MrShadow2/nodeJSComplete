const fs = require('fs');
const path = require('path');
const dir_path=path.join(__dirname,'files')
console.log(dir_path);
// for(let i=0;i<5;i++){
// fs.writeFileSync(`${dir_path}/mango${i}.txt`,`This is file no ${i}`)
// }

fs.readdir(dir_path,(err,files)=>{
    if(err){
        console.log(err);
    }
    else{
        // console.log(files);//array of files
        files.forEach((files)=>{
            console.log(files);//printing files one by one indiviually
        })
    }
})  