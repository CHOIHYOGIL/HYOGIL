
var express=require('express')
var app=express()
var user_info=require('./src/user_info')
var home=require('./src/home')
var port=3000


app.use('/user_info',user_info);
app.use('/home',home)
app.listen(port)

asd