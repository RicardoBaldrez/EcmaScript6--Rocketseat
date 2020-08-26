"use strict";

// const promise = function () {
//     return new Promise(function (resolve, reject) {
//         return resolve();
//     });
// };
var promise = function promise() {
  return new Promise(function (resolve, reject) {
    return resolve();
  });
};

console.log(promise);
promise().then(function (response) {
  console.log(response);
  console.log('Tudo certo, continue ...');
})["catch"](function (error) {
  console.log(error);
  console.log("Tudo errado, pare e volte ...");
});
