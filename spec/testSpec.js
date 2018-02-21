
describe("GitHubAPIテスト",function(){

    let main = require("../src/main.js");

    it("リポジトリ一覧取得",(done)=>{

        main.getRepoList().then((data)=>{
            expect(200).toBe(data);
            done();
        });

    });

});