
'use strict';
var qs = require('querystring');
const repository = require('./repository')
const { user_info} = require('../../models')
const { isLoggedIn, isNotLoggedIn } = require('./middlewares');
const passport=require('passport');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');

function getAllData(req,res){

     repository.getData(req,function(result){
         res.json(result)
     })

}


function getSaveData(req,res){
       
    repository.SaveData(req,function(data){
        res.json(data);
    })
    res.redirect('/');

}





function loginprocess(req,res,next){

   passport.authenticate('local',function(authError,user,info){
    //    console.log(authError)
    //    console.log(user)
    //    console.log(info)
       if (authError) {
           console.error(authError);
           return next(authError);
         }
         if (!user) {
           req.flash('loginError', info.message);
           //console.log(info.message)
           return res.redirect('/');
         }
         return req.login(user, (loginError) => {
             console.log(user)
             console.log(loginError)
           if (loginError) {
             console.error(loginError);
             return next(loginError);
           }
           return res.redirect('/user_info/welcome');
         });
   })(req,res,next);
}

async function joinprocess(req,res,next){
   
       console.log(req.body.name)
   const {  user_name, identification,id,passwd,phone,address ,fishing,email} = req.body;

   try {
     const exUser = await user_info.findOne({ where: { id } });
     if (exUser) {
       req.flash('joinError', '이미 가입된 이메일입니다.');
       console.log("이미 가입된 아이딥니다.")
       return res.redirect('/user_info/create');
     }

     const hash = await bcrypt.hash(passwd, 12);
     await user_info.create({
        user_name:user_name,
        id :id,
       identification:identification,
       phone:phone,
       address:address,
       fishing:fishing,
       email:email,
       passwd: hash,
     });
     return res.redirect('/');
   } catch (error) {
     console.error(error);
     return next(error);
   }
   
}
function welcome(req,res){
    var output="";
    if(req.user && req.user.id){
        output+=
        `<h1>Hello, ${req.user.id}</h1>
        <a href="/user_info/logout">LogOut</a>`;
        res.send(output);
    }
    else
    {
        res.redirect('/user_info')
    }
}
function logout(req,res){

   req.logout();
   req.session.destroy();
   req.redirect('/');
}


exports.logout=logout;
exports.loginprocess=loginprocess;
exports.joinprocess=joinprocess
exports.welcome=welcome

exports.getAllData = getAllData
exports.getSaveData= getSaveData
