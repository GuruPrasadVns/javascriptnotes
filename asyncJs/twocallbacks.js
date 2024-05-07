console.log('Before');
const user = getUserFromDb(1, (user)=>{
    console.log(`User details with userId 1 `, user);
    getGitHubRepositories(user.userName, (repos)=>{
        console.log(`List of github repos for user ${user.userName}`, repos);
    });
});
console.log('After');

function getUserFromDb(userId, callback){
    setTimeout(()=>{
        console.log(`Simulating to fetch user from a db...`);
        callback({ userId , userName : 'sampleUser'});
    }, 2000);
}

function getGitHubRepositories(userName, callback){
    setTimeout(()=>{
        console.log(`Simulating to fetch github repos from gitHub....`);
        callback(['repo1', 'repo2', 'repo3']);
    }, 3000);
}