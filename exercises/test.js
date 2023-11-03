/**
 * TESTING IN NODE JS
 * You can test your functions/promises here. Make sure to remove the 'export' keyword
 * to be able to run the functions successfully with
 * ```node exercises/test.js```
 */

function parsePromised(json_string) {
  return new Promise((res, rej) => {
    try {
      res(JSON.parse(json_string));
    } catch (e) {
      rej(e);
    }
  });
}

function onReject(e) {
  console.log(e.message);
}

const handlePromise = (promise) => {
  return promise
        .then((val) => val)
        .catch((err) => {
          if (err.message){
            return onReject(err);
          }else{
            console.error(err);
            return err;
          }
        })
};

const json = '{"penutbutter":"and Jelly"}'
const json2 = 'eiworjeioj';
handlePromise(parsePromised(json));
handlePromise(parsePromised(json2));