const promise = Promise.reject(new Error('Default rejected promise....'));
promise.catch(err => console.log(err.message));