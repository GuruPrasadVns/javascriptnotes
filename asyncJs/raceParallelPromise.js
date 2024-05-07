const firstPromise = new Promise((resolve)=>{
    setTimeout(()=>{
        console.log('First async operation...');
        resolve(1);
    },2000)
});

const secondPromise = new Promise((resolve)=>{
    setTimeout(()=>{
        console.log('Second async operation....');
        resolve(2);
    },1000)
});

const allPromise = Promise.race([firstPromise, secondPromise])
    .then(result => console.log(result));