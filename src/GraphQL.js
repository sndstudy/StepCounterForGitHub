function test(){

    let request = require('request');
    const URL = "https://api.github.com/graphql"

    var headers = {
        "User-Agent":"sndstudy",
        "Content-type":"application/graphql"
    }

    var options = {
        "url": URL,
        "headers": headers,
        "body": "query {repository(owner:\"sndstudy\,name:\"til\"){createdAt}}"
    }

    request(options,(err,res,body)=>{
        console.log(body);
    });
}

test();