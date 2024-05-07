console.log('Before');
getUserFromDb(1)
    .then(user => console.log(user));
console.log('After');

function getUserFromDb(userId){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log(`Simulating to fetch user from a db...`);
            resolve({ userId , userName : 'sampleUser'});
        }, 2000);
    });
}