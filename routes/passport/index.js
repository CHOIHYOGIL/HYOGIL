
const sequelize =require('sequelize')
const express = require('express')
const router = express.Router()
const { isLoggedIn, isNotLoggedIn } = require('../user_info/middlewares');
const service = require('./service.js')
var template=require('../../template1/template.js');

router
   
    .get('/login',service.login)
    .post('/login',isNotLoggedIn,service.loginprocess)
    .get('/profile', isLoggedIn,(req,res)=>{
        res.render('profile',{title:'내정보',user:req.user})
    })

    .post('/join',isNotLoggedIn,service.joinprocess)
    .get('/logout',service.logout)