const arr = [1, 2, 3, 4, 5];

arr.map(function(item) {
    return item + 10;
});

const arrSum = arr.map(item => item + 10);

console.log(arr);
console.log(arrSum);