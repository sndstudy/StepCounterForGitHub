
describe("GitHubAPIテスト",function(){

    let main = require("../src/main.js");

    main.getRepoList().then((data)=>{
        console.log("data"+ data);
    });

    it("リポジトリ一覧取得",function(){

        expect("200").toBe(main.getRepoList());

    });

});