const express = require('express');
const path=require('path')
const app=express();
const port=3000;
console.log(__dirname);
const fName=path.join(__dirname+'/public');
console.log(fName);
app.use(express.static(fName));
app.get('/',(req,res)=>{

})