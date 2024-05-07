const promise = Promise.resolve({id : 1, name: 'sample'});
promise.then(result => console.log(result));