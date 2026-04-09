function hello() {
    console.log(this)
}

const greet = ()=> {
    console.log(this);
}

hello();
greet();