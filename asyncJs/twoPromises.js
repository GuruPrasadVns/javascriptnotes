console.log('Before');
getUserFromDb(1)
    .then(user => getGitHubRepositories(user.userName))
    .then(repos => console.log(repos));
console.log('After');

function getUserFromDb(userId){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log(`Simulating to fetch user from a db...`);
            resolve({ userId , userName : 'sampleUser'});
        }, 2000);
    });
}

function getGitHubRepositories(userName){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log(`Simulating to github repos for user ${userName}...`);
            resolve(['repo1', 'repo2', 'repo3']);
        }, 3000);
    });
}