const order = false;

const breakfastPromise = new Promise( (resolve, reject) => {
    setTimeout(() => {
        if (order) {
            resolve('Your order is ready!');
        } else {
            reject( Error('Sorry Your order cant be made') ); // it helps with debugging.
        }
    }, 3000);
});

console.log(breakfastPromise);
breakfastPromise
.then( val => console.log(val) )
.catch( err => console.log(err) )