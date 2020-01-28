
const sequelize =require('sequelize')
const express = require('express')
const router = express.Router()
const service = require('./service.js')
var template=require('../../template1/template.js');
//new data로 들어가면 크롤링하게
router
    
  .get('/create', (req, res) => {
    var title='User-Create';
    var template1=template.HTML(title,  
        
        `<form action="/user_info/create_process" method="post">
    <p><input type="text" name="name" placeholder="이름"></p>
    <p><input type="text" name="identification" placeholder="주민등록번호"></p>
    <p><input type="text" name="id" placeholder="아이디"></p>
    <p><input type="text" name="passwd" placeholder="비밀번호"></p>
    <p><input type="text" name="phone" placeholder="핸드폰번호"></p>
    <p><input type="text" name="address" placeholder="주소"></p>
    <p><input type="text" name="fishing" placeholder="낚시종목"></p>
    <p><input type="text" name="email" placeholder="이메일"></p>
 
    <p><input type="submit" value="입력완료"></p>
    </form>`,'');
  
      
      res.send(template1);
  })
  
    .post('/create_process',service.getSaveData)




module.exports = router