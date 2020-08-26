const arr = [1, 2, 3, 4, 5];

console.log(arr);


const [
    x,
    ...y
] = arr;

console.log(x);
console.log(y);


const soma = (...params) => params.reduce((total, next) => total + next);

console.log('soma: ' + soma(1, 2, 3, 4, 10));