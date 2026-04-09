for(let i= 0; i<=5; i++) {
    console.log(i)
}

setInterval(function(){
    console.log("Hey, This is setInterval");
}, 2000)

let i;
setTimeout(()=>{
    console.log("Hello");
    i = 10;
    console.log(i);
}, 2000)

console.log(420)