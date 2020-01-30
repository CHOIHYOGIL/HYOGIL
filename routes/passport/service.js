
 const passport=require('passport');
 const { user_info } = require('../../models');

 function loginprocess(req,res,next){

    passport.authenticate('local',function(authError,user,info){
        if (authError) {
            console.error(authError);
            return next(authError);
          }
          if (!user) {
            req.flash('loginError', info.message);
            return res.redirect('/');
          }
          return req.login(user, (loginError) => {
            if (loginError) {
              console.error(loginError);
              return next(loginError);
            }
            return res.redirect('/');
          });
    })(req,res,next);
 }

async function joinprocess(req,res,next){
    const { id, user_name, password } = req.body;
    try {
      const exUser = await user_info.find({ where: { id } });
      if (exUser) {
        req.flash('joinError', '이미 가입된 이메일입니다.');
        return res.redirect('/join');
      }
      const hash = await bcrypt.hash(password, 12);
      await user_info.create({
        id,
        user_name,
        password: hash,
      });
      return res.redirect('/');
    } catch (error) {
      console.error(error);
      return next(error);
    }

}

function logout(req,res){
    req.logout();
    req.session.destroy();
    req.redirect('/');
}

exports.create=create
exports.logout=logout;
exports.loginprocess=loginprocess;
exports.joinprocess=joinprocess

