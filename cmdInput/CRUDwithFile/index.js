let fs=require('fs');
let path=require('path');
let dirPath=path.join(__dirname,'crud');
//create
// fs.writeFileSync(`${dirPath}/apple.txt`,`Apple is a fruit`);
// fs.readFileSync(`${dirPath}/apple.txt`);
//read
// fs.readFile(`${dirPath}/apple.txt`,'utf8',(err,data)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(data);
//     }
// })
//update
// fs.appendFile(`${dirPath}/apple.txt`,' adam  apple',(err)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log('updated');
//     }
// }
// )
//rename
// fs.rename(`${dirPath}/Fruit.txt`,`${dirPath}/adam.txt`,(err)=>{
//     if(!err){
//         console.log('renamed');
//     }
//     else{
//         console.log(err);
//     }
// })
//delete
fs.unlink(`${dirPath}/adam.txt`,(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log('deleted');
    }
})
//buffer means temporary storage