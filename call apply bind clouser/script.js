let obj = {
    num : 10
}
console.log(obj);

function myFun(args){
    return this.num + args;
}
// call():- 
//  - This function is used to create relationships between two unknown memory locations.

console.log(myFun(10)); // NaN
console.log(myFun.call(obj,10)); // 20

/*
apply():-
 - This is same as call function
 - When we have to pass arguments as an array this function is used.
   (array implies no independent arguments)
*/

function myFunApply(args1,args2,args3,args4){
    return this.num + args1+args2+args3+args4;
}


//instead of taking individual args we can use rest operatot
// function myFunApply(...args){
//     return this.num + args[0]+args[1]+args[2]+args[3]
// }

let arr = [10,20,30,40];
console.log(myFunApply.apply(obj,arr));


/*
bind():-
 - this function is used to merge two unknown memory locations.
 - this function returns new function
*/

let bindFun = myFunApply.bind(obj);
console.log(bindFun(1,2,3,4));

/*
==========================================================
Closure
==========================================================
 - Inner function can have access of data from outer function.
 - Outer function returns inner function.
 - Closure means inner function can have access of data 
   from outer function even after returning inner function
*/

function add(x){
    return (y) => {
        return x+y;
    }
}

// here outer function returns a inner function
let var_a = add(10);
let var_b = add(20);

//here we are calling a inner function that is returned from outer function with access of variable

console.log(var_a(4));
console.log(var_b(3));