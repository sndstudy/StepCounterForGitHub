exports.getRepoNameList = function(repoList){

    let nameList = [];

    for(const repo of repoList){

        nameList.push(repoList.name);

    }

    return nameList;

}