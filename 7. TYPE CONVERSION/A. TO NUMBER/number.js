Number("42")       // 42
Number("3.14")     // 3.14
Number("")         // 0
Number("abc")      // NaN
Number(true)       // 1
Number(false)      // 0
Number(null)       // 0
Number(undefined)  // NaN

parseInt("42px")   // 42   (stops at non-numeric character)
parseFloat("3.14") // 3.14
+"42"              // 42   (unary + operator)

const t = parseInt("42");
console.log(typeof t)
console.log(parseInt("42px"))