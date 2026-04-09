let nums = [10, 20, 30, 40];

// ES5
console.log(nums[0]);
console.log(nums[1]);

// ES6 Feature
const [ele1, ele2, ele3, ele4] = nums;
console.log(ele1, ele2, ele3, ele4);

const arr = ["Hello", 1, 5, "Apple"];

const newArr = [...arr];
console.log(newArr);
