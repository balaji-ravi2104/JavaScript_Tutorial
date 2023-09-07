// console.log(`hello ${10+20} Balaji`);
// console.log(10==10);
// console.log(10=='10');
// console.log(10===10);
// console.log(10==='10');
// console.log('10'+10); 
// console.log(10 + +'10'); 
// let a=[1,10,5,20,6];
// a.sort((a,b)=>a-b);
// console.log(a);

// foreach doesn't return anything
// a.forEach((element,index) => {
//     console.log(element,index);
// });


//  map will return a value
// let b= a.map((element,index) => {
//     // console.log(element,index);
//     return element*2;
// });
// console.log(b);


// filter will disply all the satisfied condition values
// let c= a .filter((element) => {
//     return element>5;
// });
// console.log(c);

// find only display the first occured value and then it will stop 
// var count=0;
// let d= a .find((element) => {
//     // console.log(count++);
//     return element>5;
// });
// console.log(d);


// Call Back Function
//  function b(){
//     console.log('b');
//  }

//  function a(arg){
//     console.log('a');
//     arg();
//  }
//  a(b);


//shallow copy example 
// let x=[10,20,30]
// let b=x
// b.push(4);
// x.push(8);
// // Even if we sort the b array a array will also sorted
// b.sort((a,b)=> a-b);
// console.log(x);
// console.log(b);


// deep copy
// let x=[10,20,30]
// let b = x.map((element)=>{
//     return element*2;
// });

// // if we push value in the array x that doesn't affect the array b.. because we used deep copy
// x.push(40)
// console.log(x);
// console.log(b);


// Hoisting Example 
// variale initialization are not hoisted variable declarations are hoisted
// Correct way of hoisting
// x=10;
// console.log(x);
// var x;

// Incorrect way of hoisting
// var x;
// console.log(x);
// x=20;


// let bigInt = 12345739282634929n
// console.log(bigInt)
// console.log(typeof(decimal))
// console.log(typeof(octal))
// console.log(typeof(bigInt))
// let largest = 1.7 * 10**308
// console.log(largest)
// let anotherMax = Number.MAX_VALUE   //is it really maximum number ?
// console.log(anotherMax)
// anotherMax += 1
// console.log(anotherMax)
// console.log(typeof(anotherMax))


// for(var i = 0; i < 10; i++){}
// console.log(i)

// for(let j = 0; j < 10; j++){}
// console.log(j) 
// ReferenceError :j is not defined


// var x=10;
// console.log(x); //10
// {
//     var x=100;
// }
// console.log(x); //100


// let num = 20;

// {
//     let num = 100;
//     console.log(num);
// }

// local variables affecting global variables.


// console.log(num);

// console.log(data); //unefined
// var data = 100;


// console.log(num);//error Cannot access 'num' before initialization
// let num = 10;


// const data = {
//     value : 100
// }

// console.log(data.value);

// data.value = 200; In const we can reasign a value bu we can't able to redeclare it

// console.log(data.value);

// data={} //TypeError: Assignment to constant variable.
