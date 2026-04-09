Boolean(0)         // false
Boolean("")        // false
Boolean(null)      // false
Boolean(undefined) // false
Boolean(NaN)       // false
Boolean("hello")   // true
Boolean(42)        // true
Boolean([])        // true  ⚠️ empty array is truthy!
Boolean({})        // true  ⚠️ empty object is truthy!
!!value            // common shorthand

console.log(Boolean(""))