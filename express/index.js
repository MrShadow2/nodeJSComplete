const express=require('express');
const app=express();
const port=3000;

app.get('/',(req,res)=>{
    console.log(req.query);
    res.send('Hello '+req.query.name
    +' '+req.query.age);


})
app.get('/html',(req,res)=>{
    res.send(`<h1><a href="/json">json</a></h1>
    <input type="text" value="${req.query.name}" id="name">
    `);
})
app.get('/json',(req,res)=>{
    res.send(
    [
        {
            name:'A',
            age:20
        },
        {
            name:'B',
            age:21
        },
        {

            name:'C',
            age:22
        },

    ]
    

    );
})
app.get((req,res)=>{
    res.status(404).send('Sorry, we cannot find that!');
})
app.listen(port)