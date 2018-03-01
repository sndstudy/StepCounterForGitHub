
describe("GitHubAPIテスト",function(){

    let main = require("../src/main.js");

    it("リポジトリ一覧取得",(done)=>{

        main.getRepoList().then((data)=>{
            expect(200).toBe(data.statusCode);
            console.log(JSON.parse(data.body));
            expect(19).toBe((JSON.parse(data.body).length));
            done();
        });

    });

});

describe("データ加工テスト",function(){

    let getName = require("../src/getRepoNameList.js");

    it("リポジトリ一覧取得(名前)",(done)=>{

        let list = [{name:"test"},{name:"test2"}];

        expect(2).toBe(((getName.getRepoNameList(list)).length));
        
        done();
    });

});