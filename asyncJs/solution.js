
const customer = await getCustomer(1);
console.log('Customer: ', customer);
if(customer.isGold){
    const movies = getTopMovies()
}
getCustomer(1, (customer) => {
    if (customer.isGold) {
        getTopMovies((movies) => {
            console.log('Top movies: ', movies);
            sendEmail(customer.email, movies, () => {
                console.log('Email sent...')
            });
        });
    }
});

function getCustomer(id) {
    setTimeout(() => {
        return new Promise((resolve)=>{
           resolve({
               id: 1,
               name: 'Mosh Hamedani',
               isGold: true,
               email: 'email'
           }) ;
        });
    }, 4000);
}

function getTopMovies() {
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve(['movie1', 'movie2']);
        }, 4000);
    });

}

function sendEmail(email, movies) {
    setTimeout(() => {
        callback();
    }, 4000);
}