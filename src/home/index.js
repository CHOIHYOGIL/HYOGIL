
const express = require('express')
const router = express.Router()
const service = require('./service.js')
const models=require("../../models");
var template=require('../../template1/template.js');
router
    
    .get('/', service.getShow)
    .get('/login',(req,res)=>{
        var title='LOGIN';
        var description='<h1>Login</h1>'
         var template1=template.HTML(title,
           `<form action="/home/login" method="post">
           <table><tr> <td>아이디:</td>
           <td><input type="text" name="login_id",placeholder="아이디"></td></tr>
           <tr><td>비번:</td><td><input type="password" name="login_passwd",placeholoder="비밀번호"></td>
           </tr>
           <tr>
           <td><input type="submit" value="로그인"></td></tr>
           </table></form>`,
         `<a href="/home/Login">Login</a>`);
        
         res.send(template1);
    })
    // .post('/login',service.startLogin)
반갑습니다
module.exports = router