// console.log(`hello ${10+20} Balaji`);
// console.log(10==10);
// console.log(10=='10'); true
// console.log(10===10);
// console.log(10==='10');
// console.log('10'+10); 1010
// console.log(10 + +'10'); 
// let a=[1,10,5,20,6];
// console.log(a.sort((a,b)=> a-b));
// console.log(a);
// foreach doesn't return anything
// a.forEach((element,index) => {
//     console.log(element,index);
// });


//  map will return a value
// let b= a .map((element,index) => {
//     // console.log(element,index);
//     return element*2;
// });
// console.log(b);


// filter will disply all the satisfied condition values
// let c= a .filter((element) => {
//     return element>5
// });
// console.log(c);

// find only display the first occured value and then it will stop 
// let d= a .find((element) => {
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
// console.log(x);
// console.log(b);


// deep copy
let x=[10,20,30]
let b = x.map((element)=>{
    return element*2;
});
// if we push value in the array x that doesn't affect the array b.. because we used deep copy
x.push(40)
console.log(x);
console.log(b);