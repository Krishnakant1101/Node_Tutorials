// How to handle asyncronus data
/* Handle asyncronus data with the help of async await and  promises
*/
//Ex:-
let a = 10;
let b = 0;

let p = new Promise((resolve, reject) => {
    setTimeout(() => {
        b = 5; // Update b after 2 seconds
        resolve(); // Resolve the Promise
    }, 2000);
});

p.then(() => {
    console.log("a+b : ", a + b); // Log a + b after the Promise resolves
});
