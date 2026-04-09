const myPromise = new Promise((resolve, reject) => {
  let a = 5,
    b = 0;
  let c = a + b;

  if (c === 5) {
    resolve(`${a} + ${b} = ${5}`);
  } else {
    reject(`${a} + ${b} != ${5}`);
  }
});

// console.log(typeof myPromise) // Object

myPromise
  .then((msg) => {
    console.log("I am resolved : ", msg);
  })
  .catch((err) => {
    console.log("I am rejected : ", err);
  });
