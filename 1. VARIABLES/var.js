var accessAnyWhere = 225;

{
    console.log(accessAnyWhere); // 225
    var accessAnyWhere = 10;
    console.log(accessAnyWhere) // 10
}

let a = 100;

{
    let a = 200;
    console.log(a)
}

console.log(a)