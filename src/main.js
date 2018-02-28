exports.getRepoList = function(){

    let request = require('request');
    const URL = "https://api.github.com/users/sndstudy/repos"

    var headers = {
        "User-Agent":"sndstudy"
    }

    var options = {
        "url": URL,
        "headers": headers
    }

    const list = ()=>{
        return new Promise((resolve)=>{
            request(options,(err,res,body)=>{
                resolve(res);
            });
        });
    } 

    return list();

}