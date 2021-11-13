const promise = new Promise ((resolve, reject) => {
    setTimeout(() => {
        console.log("got the user");
        resolve ({user:"ed"});
    }, 1000);
});

promise
.then(user => {
    console.log(user);
});

const promiseError = new Promise ((resolve, reject) => {
    setTimeout(() => {
        console.log("got the user");
        reject (new Error ("ERROR: user not logged in"));
    }, 1000);
});

promiseError
.catch(err => console.log(err.message));