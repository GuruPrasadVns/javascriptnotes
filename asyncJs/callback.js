console.log('Before');
const user = getUserFromDb(1, (user)=>{
    console.log(`User details with userId 1 `, user);
});
console.log('After');

function getUserFromDb(userId, callback){
    setTimeout(()=>{
        console.log(`Simulating to fetch user from a db...`);
        callback({ userId , userName : 'sampleUser'});
    }, 2000);
}