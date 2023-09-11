/*
==========================================================
IIFE:- 
==========================================================
 - Immediately invoked function expression.
 - Introduced in ES9.
 - These are self invokable functions, i.e. no need to call IIFEs.
 - Syntax
	(()=>{})()
*/

// Eg01
(()=>{
    console.log(`Hello i am from IIFE`);
})();

// Eg02 - passing args to IIFE
((a,b)=>{
    console.log(a+b);
})(10,20);

(function (date){
    console.log(date.toLocaleDateString());
})(new Date());

// Eg03 
let ans = ((a,b)=>{
    return a+b
})(10,20);

console.log(ans);