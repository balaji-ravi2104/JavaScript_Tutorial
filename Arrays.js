let array1 = [1,2,3,4,5,6,7,8,9,10];
let array2 = [11,21,31,41,51,61];
let array3 = [2,4,5,1,6,7,9,2,9,0];
const fruits = ['apple', 'banana', 'cherry', 'date', 'fig'];
// console.log(array1[0]);
// console.log(array1[11]); undefined


// 1. Concat --> array.concat(arr1,arr2,....,arrn)  
// const result = array1.concat(array2);
// const result = array1.concat(99,98,97);
// console.log(result); 

// 2.every --> array.every(callback(currentvalue,index,arr),thisArg)   
// const result = array2.every(function(num,index,array2){
//     // console.log(index);
//     return num>5;
// });
// console.log(result);

// const allStrings = fruits.every(function(item) {
//   return typeof item === 'string';
// });
// console.log(allStrings);

// 3.filter --> array.filter(callback(currentvalue,index,arr),thisArg)  
// const evenArray = array1.filter(function(num){
//     return num%2==0;
// });
// console.log(evenArray);

// const fruitsStartingWithA = fruits.filter(function(fruit) {
//     return fruit.charAt(0) === 'a';
// });
// console.log(fruitsStartingWithA);


// 4. foreach --> array.forEach(callback(currentvalue,index,arr),thisArg)  

// array1.forEach(function(num,index,array1){
//     console.log(`index ${index} - value ${num}`);
// });

// var sum=0;
// array2.forEach((num,index,array2)=>{
//     sum+=num;
//     console.log(`From index 0 to ${index} sum is ${sum}`);
// });


// 5. indexOf --> array.indexOf(element,index)  
// If index not found return -1
// index - It represent the index position from where search starts. It is optional.
// const result = array3.indexOf(2);
// const result = array3.indexOf(2,1);
// const result = array2.indexOf(1);
// console.log(result);

// 6. lastIndexOf --> array.lastIndexOf(element,index)  
// const result = array3.lastIndexOf(2);
// console.log(result);

// 7. jojn --> array.join(separator)  
//  it return a new string

// const result = array1.join('-');
// console.log(typeof(result)); --> string
// console.log(result);

// 8. map --> array.map(callback(currentvalue,index,arr),thisArg)   
// const result = array1.map((num,index)=>{
//     return num ** 2;
// });
// console.log(result);

// const upperArray = fruits.map((fruit)=>{
//     return fruit.toUpperCase();
// })
// console.log(upperArray);

// 9. push --> array.push(element1,element2....elementn)
// Add element at end of the array  
// let len = array1.push(31,23);
// console.log(len);

// 10.pop --> array.pop()  
// remove element at end of the array 
// array1.pop();
// console.log(array1);

// 11. reduce & reduceRight--> arr.reduce(callback(accumulator, currentValue, currentIndex, array), initialValue)    

// const sum = array1.reduce(function(accumulator,currentValue,currentIndex,array1){
//     return accumulator+currentValue;
// },0);
// console.log(sum);

// const max = array2.reduce(function(accumulator, currentValue) {
//     return Math.max(accumulator, currentValue);
// }, array2[0]);
  
// console.log(max);

// 12. reverse --> array.reverse()
// const reverseArray = array1.reverse();
// console.log(reverseArray);

// 13. shift --> array. shift()  removes the first element
// const element = array3.shift();
// console.log(element);

// 14. slice --> array.slice(start,end)  
// return values between start-index to end-index(excluded)
// const arr = array2.slice(2,5);
// const arr = array3.slice(-5,-1);
// console.log(arr);

// 15. some --> array.some(callback_funct(element, index, array), thisArg); 
// return boolean value 
// const result = array1.some((num,index,array1)=>{
//     return num>5;
// });
// console.log(result);

// 16. splice --> array.splice(start,delete,element1,element2,?,elementn)  
// The JavaScript array splice() method is used to add/remove the elements to/from the existing array. 
// It returns the removed elements from an array. The splice() method also modifies the original array.

// array1.splice(2,0,'balaji'); // add balaji at index 2
// const result = array1.splice(2,3,'nirmal'); // remove 3 elements from array1 & add nirmal 
// const result = array1.splice(3); // remove all elements from index 3
// console.log(result);

// 17. fill --> arr.fill(value[, start[, end]])  
// num = new Array(100);
// num.fill("Balaji");
// console.log(num);
//  const result = array1.fill('balaji',3);
// const result = array1.fill('balaji',3,6);
//  console.log(result);

// 18. return true or false based on the values in the array
// console.log(delete array1[3]);
// console.log(array1);


// 19. sort --> array.sort(compareFunction)  
// const result = array3.sort();
// const result = array3.sort((a,b)=>b-a);
// const result = array2.sort().reverse();
// console.log(result);

// 20. toString --> array.toString()  

// const result = fruits.toString();
// console.log(result);

// 21. unshift --> array. unshift(element1,element2,....,elementn)  
// add elemets at beginning and return the length
const result = array1.unshift(19);
console.log(result);