// /**
//  * TESTING IN NODE JS
//  * You can test your functions/promises here. Make sure to remove the 'export' keyword
//  * to be able to run the functions successfully with
//  * ```node exercises/test.js```
//  */



// e9.js below
// function iterate(arg) {
//   arg += 1;
//   console.log(arg);
//   return arg
// }

// function alwaysThrows() {
//   console.log("OH NOES");
// }

// function onReject(e) {
//   if(typeof e === "object"){
//     console.log(e.message);
//   }else{
//     console.log(e);
//   }

// }
// const promise = (val) => Promise.resolve(iterate(val))
// .then((e) =>
//   iterate(e))
// .then((e) => 
//   iterate(e)
// )
// .then((e) => 
//   iterate(e)
// )
// .then((e) => 
//   iterate(e)
// )
// .then((e) => 
//   iterate(e)
// )
// .then((e) => alwaysThrows(e))
// .then((e) => 
//   iterate(e)
// )
// .then((e) => 
//   iterate(e)
// )
// .then((e) =>
//   iterate(e)
// )
// .then((e) => iterate(e))
// .catch((e) => console.log(onReject(e)))

// console.log(promise(0));


// ej10 below

// const promise1 = new Promise((res) => setTimeout(res, 4000, "RESOLVED AGAIN"));
// const promise2 = Promise.reject("Promise 2 REJECTED");
// const promise3 = Promise.resolve("Promise 3 RESOLVED");
// const promise4 = new Promise((res) => setTimeout(res, 3000, "RESOLVED AGAIN"));
// const promiseArr = [promise1, promise2, promise3, promise4];

// const handlePromise1 = Promise.all(promiseArr).catch((e) => console.log(e));

// const handlePromise2 = (promiseArr) => Promise.allSettled(promiseArr).catch((e) => console.log(e));
