const express=require('express');
const path=require('path');
const hbs=require('hbs');
// with the help of app all method inside expreess we can access
const app=express();
const port= process.env.PORT||8000;
// public static path
const static_path=path.join(__dirname,"../public");
const template_path=path.join(__dirname,"../templates/views");
const partials_path=path.join(__dirname,"../templates/partials");
// console.log(__dirname)
app.set('view engine','hbs');
app.set('views',template_path);
app.use(express.static(static_path));
hbs.registerPartials(partials_path);

// res.render('main', {layout : 'index'});
// routing
app.get("/",(req,res)=>{
   res.render('index')
})

app.get("/about",(req,res)=>{
    res.render('about')
 })

 app.get("/weather",(req,res)=>{
    res.render('weather')
 })

 //For showing error page using special operator
 app.get("*",(req,res)=>{
    res.render('404error',{
      errorMsg:'Oops! Page not found'
    })
 })


app.listen(port,()=>{
    console.log(`Listening to the port number ${port}`);
})