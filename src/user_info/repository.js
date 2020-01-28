var qs = require('querystring');
const {  user_info} = require('../../models')

function getData(req,cb){

   User_Info.findAll().then(function(result){
            cb(result)
    });

}


async function SaveData(req,res,next){
        var body='';
        req.on('data',function(data){
            body=body+data;
        });
        req.on('end',function(){
            var post=qs.parse(body);

            user_info.create({
                user_name:post.name,
              identification:post.identification,
              id:post.id,
              passwd:post.passwd,
              phone:post.phone,
              address:post.address,
              fishing:post.fishing,
              email:post.email
              
           })
        
        })
    
      

}


exports.getData = getData
exports.SaveData= SaveData
