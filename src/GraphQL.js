function test(){

    let request = require('request');
    const URL = "https://api.github.com/graphql"
    const TOKEN = "GitHubのトークン"

    var headers = {
        "User-Agent":"sndstudy",
        "Content-type":"application/graphql",
        "Authorization":`bearer ${TOKEN}`
    }

    var options = {
        "url": URL,
        "headers": headers,
        "body": JSON.stringify({query : "{repository(owner: \"sndstudy\", name: \"til\") {createdAt}}"})
    }

    request.post(options,(err,res,body)=>{
        console.log(body);
    });
}

test();