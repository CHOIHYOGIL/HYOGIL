
const sequelize =require('sequelize')
const express = require('express')
const router = express.Router()
const service = require('./service.js')
var template=require('../../template1/template.js');
const { isLoggedIn, isNotLoggedIn } = require('./middlewares');
//new data로 들어가면 크롤링하게
router

.get('/welcome',service.welcome)

.get('/login',(req,res)=>{
  res.render('login.ejs')
})
.post('/login',isNotLoggedIn,service.loginprocess)
.get('/profile', isLoggedIn,(req,res)=>{
  res.render('profile',{title:'내정보',user:req.user})
})

.get('/create', isNotLoggedIn,(req, res) => {
       res.render('join.ejs',{
         title:'회원가입' ,
         user:req.user,
         joinError:req.flash('joinError')
       })
  })
  
    .post('/create',isNotLoggedIn,service.joinprocess)

    .get('/logout',isLoggedIn,(req,res)=>{
      req.logout();
      req.session.destroy();
      res.redirect('/');
    })


module.exports = router