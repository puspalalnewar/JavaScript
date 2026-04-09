// infinite args
function add(...nums) {
    let total = 0;
    nums.forEach((ele)=> {
        total += ele;
    })
    return total;
}

console.log(add(add(1, 2, 3, 4, 5, 6)));