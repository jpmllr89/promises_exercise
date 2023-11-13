const promise1 = Promise.resolve((res) => setTimeout(res, 4000, "RESOLVED AGAIN"));
const promise2 = Promise.reject("Promise 2 REJECTED");
const promise3 = Promise.resolve("Promise 3 RESOLVED");
const promise4 = new Promise((res) => setTimeout(res, 3000, "RESOLVED AGAIN"));
const promiseArr = [promise1, promise2, promise3, promise4];

const handlePromise1 = 
  Promise
  .all(promiseArr)
  .catch((e) => e);

// console.log(handlePromise1);


const handlePromise2 = (promiseArr) => Promise.any(promiseArr).then((e) => e);


const handlePromise3 = Promise.allSettled(promiseArr).catch((e) => e);


const newPromiseArr = promiseArr.filter(handlePromise3());

console.log(newPromiseArr);

const handlePromise4 = (arr) => {
  return Promise.race(arr)
    .then((val) => val)
    .catch((e) => e);
};



