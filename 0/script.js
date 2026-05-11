const arr = [1, 2, 3, 4, 5];
console.log(arr.pop());
console.log(arr)
arr.push(10);
console.log(arr)
// find() method
const ans = arr.find((val)=>{
    return val == 4;
})
console.log(ans)

const a = arr.map((val)=> {
    return val == 10;
})
console.log(a)