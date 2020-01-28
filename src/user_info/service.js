

var qs = require('querystring');
const repository = require('./repository')
const { User_Info} = require('../../models')
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


exports.getAllData = getAllData
exports.getSaveData= getSaveData
