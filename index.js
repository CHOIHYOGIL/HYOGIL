const express = require('express')
const cookieParser=require('cookie-parser')
const morgan =require('morgan')
const path = require('path');
const session=require('express-session')
const flash=require('connect-flash')
const passport=require('passport')
const bodyParser = require('body-parser');
require('dotenv').config();


const user_info=require('./routes/user_info')

const home=require('./routes/home')
// const login=require('./routes/login')
const { sequelize } = require('./models');
const passportConfig=require('./passport')

const app=express()
sequelize.sync();
passportConfig(passport)

// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'pug');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(session({
  resave: false,
  saveUninitialized: false,
  secret: process.env.COOKIE_SECRET,
  cookie: {
    httpOnly: true,
    secure: false,
  },
}));
app.use(flash());
app.use(passport.initialize());//요청(req)객체에 passport 설정을 심는다
app.use(passport.session());//req.session객체에 passport 정보를 ㅈㅓ장 , 
//req.session객체는 express-session에서 생성하는 것이므로 passport 미들웨어는 express-session 미들웨어 뒤에 연결해야한다.

//app.use('/login',login)
app.use('/user_info',user_info);
app.use('/',home)
app.listen(process.env.port || 3000);
