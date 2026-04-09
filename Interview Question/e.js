// const arr = [1, 2, 3, 4, 5];
// for (var i = 0; i < arr.length; i++) {
//    // Pass `i` as an argument to the IIFE
//    test(i);
// }

// function test (i) {
//     setTimeout(function () {
//       console.log(i);
//     }, 1000);
// };

//  Another Way
const arr = [1, 2, 3, 4, 5];
for (var i = 0; i < arr.length; i++) {
  (function (i) {
    setTimeout(function () {
      console.log(i);
    }, 1000);
  })(i); // Pass `i` as an argument to the IIFE
}