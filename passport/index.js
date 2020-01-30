const local=require('./localStrategy');

const{user_info}=require('../models');

module.exports=(passport)=>{

    passport.serializeUser((user,done)=>{
        console.log(user.id)
        done(null,user.id);
    });

    passport.deserializeUser((id,done)=>{
        console.log(id)
        user_info.findOne({
            where:{ id } })
            .then(user => done(null, user))
        .catch(err=>done(err))
    });

    local(passport);
}