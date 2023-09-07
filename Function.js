// function, argument, retrun

// function expression vs function declaration
 
// fat arrow functions


// function declaration
/*function findResult(mark){
    let result="";
    if(mark>=50){
        result="pass";
    }else{
        result="fail";
    }
    return result;
}
let result = findResult(60);
console.log(result);
*/


// function expression
//  function expression --> also called anonymous
/*let x=10,y=20;
let temp = function(x,y){
    return x*y;
    // console.log(x*y);
}
let ans = temp(x,y);
console.log(ans);
*/



// fat arrow functions
/*
let sayHello  = () => {
    console.log("Hello");
}
sayHello();
*/

// Calling one function from another function

/*function one(){
    return "balaji";
}
function two(){
    return one
}
console.log(two()());
*/

/*
let fun_one = () =>{
    return () =>{
        return 'Have a nice day...!'
    }
}
console.log(fun_one) // [Function: fun_one]
console.log(fun_one()) //[Function (anonymous)]
console.log(fun_one()()) // Have a nice day...!
*/

// Function Constructor

// let temp = new Function("x","y","return x*y;");

/*
// function class_one(){
//     this.wish = `Welcome to counstruct function`
//     this.myWish = () =>{
//         return this.wish
//     }
// }
// let obj = new class_one()
// console.log(obj.wish)
// console.log(obj.myWish())
*/

/*
function class_one(arg1, arg2, arg3) {
    this.sub_one = arg1
    this.sub_two = arg2
    this.sub_three = arg3
}
let obj = new class_one(1, 2, 3)
console.log(obj.sub_one, obj.sub_two, obj.sub_three)
*/

// let obj1 = new class_one('Maths', 'SS', 'Tamil')
// console.log(obj1.sub_one, obj1.sub_two, obj1.sub_three)

// ===============================================
// prototype
// ===============================================
//  - prototype is a property which adds members
//    dynamically to constructor functions
/*   
function class_one(){}
class_one.prototype.sub_one = `Javascript`
class_one.prototype.sub_two = `ReactJS`
class_one.prototype.sub_three = `Node.JS`

let obj = new class_one()
console.log(obj.sub_one, obj.sub_two, obj.sub_three)
*/

// ===============================================
// Prototype Chaining:- 
// ===============================================
//  - Nesting one constructor prototype to another constructor
//    is called as prototype chaining.
//  - Concept of inheritance is achieved with prototype chaining

// Multi-level inheritance
/*
function class_one(){}
class_one.prototype.fun_one = () =>{
    return 'I am from fun_one'
}

function class_two(){}
class_two.prototype = Object.create(class_one.prototype)
class_two.prototype.fun_two = () =>{
    return 'I am from fun_two'
}

function class_three(){}
class_three.prototype = Object.create(class_two.prototype)
class_three.prototype.fun_three = () =>{
    return 'I am from  fun_three'
}

let obj = new class_three()
console.log(obj.fun_one(), obj.fun_two(),obj.fun_three())
*/

// Hierarchial inheritance
/*
function class_one(){}
class_one.prototype.fun_one = () =>{
    return 'I am from fun_one'
}

function class_two(){}
class_two.prototype = Object.create(class_one.prototype)
class_two.prototype.fun_two = () =>{
    return 'I am from fun_two'
}

function class_three(){}
class_three.prototype = Object.create(class_one.prototype)
class_three.prototype.fun_three = () =>{
    return 'I am from  fun_three'
}

let obj1 = new class_two()
console.log(obj1.fun_one(),obj1.fun_two());

let obj2 = new class_three()
console.log(obj2.fun_one(),obj2.fun_three());
*/

// Overriding 
/*
function class_one() { }
class_one.prototype.dbFun = () => {
    return "MySql data soon"
}
function class_two() { }
class_two.prototype = Object.create(class_one.prototype)
class_two.prototype.dbFun = () => {
    return "MongoDB data soon"
}
let obj = new class_two()
console.log(obj.dbFun())
*/


// ===============================================
// Passing parameters to functions
// ===============================================

// 1. Default Parameters
//  - It allows named parameters to be initialised with
//    default values if no value or undefined is passed.

/*
function fun_one(arg1 = 10, arg2 = "Fullstack", arg3 = "Angular") {
    console.log(arg1, arg2, arg3)
}
fun_one()                                   //10 FullStack Angular
fun_one(25)                                 //25 Fullstack Angular
fun_one(undefined, "MERN")                  //10 MERN Angular
fun_one(undefined, 'undefined', undefined)  //10 undefined Angular
fun_one(null, null, null)                   //null null null
fun_one(null, undefined, "MongoDB")         //null Fullstack MongoDB
fun_one(undefined, undefined, undefined)    //10 FullStack Angular
*/


// 2. Optional Parameters
//  - While calling a function no need to pass all arguments.
//  - We can keep few arguments as Optional.
//  - Optional Parameters introduced in ES6.
/*
function fun_one(arg1, arg2, arg3) {
    console.log(arg1, arg2, arg3)
}
fun_one()                                   //undefined undefined undefined
fun_one("Hello_1")                          //Hello_1 undefined undefined
fun_one(null, "Hello_2")                    //null Hello_2 undefined
fun_one(10, 15.7, "MEAN")                   //10 15.7 MEAN
fun_one(null, null, null)                   //null null null
*/


// 3. Rest Parameters
//  - It is improved way to handle function parameters.
//  - It allows us to represent indefinite number of arguments
//    as an array.
//  - Rest parameters represented by '...' ( ... is called as spred operator)
/*
function fun_one(...arg) {
    console.log(arg)
}
fun_one("Angular")                          //[ 'Angular' ]
fun_one()                                   //[]
fun_one(`Angular`, `Fullstack`)             //[ 'Angular', 'Fullstack' ]
fun_one(undefined, null)                    //[ undefined, null ]
*/

/*
function fun_one(arg1, arg2 = "Hello_2", ...arg3) {
    console.log(arg1, arg2, arg3)
}
fun_one("Hello_1")                                  //Hello_1 Hello_2 []
fun_one("Hello_1", undefined, "Hello_3")            //Hello_1 Hello_2 [ 'Hello_3' ]
fun_one("Hello_1", "Hello_2", "Hello_3", "Hello_4") //Hello_1 Hello_2 [ 'Hello_3', 'Hello_4' ]
fun_one(undefined, undefined, undefined)            //undefined Hello_2 [ undefined ]
fun_one(undefined, undefined, [1, 2, 3], [4, 5, 6]) //undefined Hello_2 [ [ 1, 2, 3 ], [ 4, 5, 6 ] ]
fun_one(undefined, undefined, [1, 2, 3], 4, 5, 6)   //undefined Hello_2 [ [ 1, 2, 3 ], 4, 5, 6 ]
fun_one("Hello_1", [1, 2, 3], 4, 5, 6,[6, 8, 9])    //Hello_1 [ 1, 2, 3 ] [ [ 4, 5, 6 ], [6, 8, 9] ]
*/


// Overloading
/*
function BaseClass() {}

BaseClass.prototype.fun_one = function (...args) {
  if (args.length === 2) {
    return this.fun_one_2args(...args);
  } else if (args.length === 3) {
    return this.fun_one_3args(...args);
  } else {
    return "Invalid number of arguments";
  }
};

BaseClass.prototype.fun_one_2args = (arg1, arg2) =>{
  return arg1 + arg2;
};

BaseClass.prototype.fun_one_3args =  (arg1, arg2, arg3) =>{
  return arg1 + arg2 + arg3;
};

function DerivedClass() {}
DerivedClass.prototype = Object.create(BaseClass.prototype);

let obj = new DerivedClass();
console.log(obj.fun_one(10, 20));          // Output: 30
console.log(obj.fun_one(10, 20, 30));      // Output: 60
*/


// JavaScript Closures
// A closure is a function having access to the parent scope, even after the parent function has closed.

const add = (function () {
    let counter = 0;
    console.log("Counter "+counter);
    return function () {
    counter += 1; 
    return counter;
   }
})();

console.log(add());
console.log(add());
console.log(add());
console.log(add());
console.log(add());