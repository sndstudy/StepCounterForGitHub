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

    var ans = "300";

    const test = ()=>{
        return new Promise((resolve)=>{
            request(options,(err,res,body)=>{
                resolve(res);
            });
        });
    } 

    return test().then((res)=>{
        console.log("A"+res.statusCode);
        return res.statusCode;
    });

}