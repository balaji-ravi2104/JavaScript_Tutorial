let array1 = [1,2,3,4,5,6,7,8,9,10];
let array2 = [11,21,31,41,51,61];
let array3 = [2,4,5,1,6,7,9,2,9,0];
const fruits = ['apple', 'banana', 'cherry', 'date', 'fig'];
// console.log(array1[0]);
// console.log(array1[11]); undefined

/*
Concat --> array.concat(arr1,arr2,....,arrn)  
const result = array1.concat(array2);
const result = array1.concat(99,98,97);
console.log(result); 
*/

/*
every --> array.every(callback(currentvalue,index,arr),thisArg)   
const result = array2.every((num,index,array2)=>{
    // console.log(index);
    return num>5;
});
console.log(result);

const allStrings = fruits.every((item) =>{
  return typeof item === 'string';
});
console.log(allStrings);
*/


/*
//filter --> array.filter(callback(currentvalue,index,arr),thisArg)  

const evenArray = array1.filter((num) =>{
    return num%2==0;
});
console.log(evenArray);

const fruitsStartingWithA = fruits.filter(function(fruit) {
    return fruit.charAt(0) === 'a';
});
console.log(fruitsStartingWithA);

let arr3 = [10,20,30,40,50]

let ans = arr3.filter((element,index)=>{
    return element>=30
}).map((element,index)=>{
    return element*10;
})

console.log(ans); //[300,400,500]
*/


/*
// foreach --> array.forEach(callback(currentvalue,index,arr),thisArg)  
array1.forEach(function(num,index,array1){
    console.log(`index ${index} - value ${num}`);
});
var sum=0;
array2.forEach((num,index,array2)=>{
    sum+=num;
    console.log(`From index 0 to ${index} sum is ${sum}`);
});

//  "for of" in array -- if we use for of it will display the array elements
for (let x of array1){
    console.log(x);
}

// "for in" - if we use  for in it will return index only, by using these index we can able to access the values
for(let x in array1){
    // console.log("index " + x);
    console.log(x+" "+array1[x]);
}
*/


/*
// indexOf --> array.indexOf(element,index)  
// If index not found return -1
// index -> It represent the index position from where search starts. It is optional.
const result = array3.indexOf(2);
const result = array3.indexOf(2,1);
const result = array2.indexOf(1);
console.log(result);
*/


/*
// lastIndexOf --> array.lastIndexOf(element,index)  
const result = array3.lastIndexOf(2);
console.log(result);
*/


/*
// jojn --> array.join(separator)  --> it return a new string
const result = array1.join('-');
console.log(typeof(result)); --> string
console.log(result);
*/

/*
map --> array.map(callback(element,index,arr),thisArg)  --> This function is used to manipulate each and every element in array and it returns an array 

const result = array1.map((num,index,)=>{
    return num ** 2;
});
console.log(result);

const upperArray = fruits.map((fruit)=>{
    return fruit.toUpperCase();
})
console.log(upperArray);

const result = array1.map((element,index)=>{
    return '$'+element;
})
console.log(result);

let arr1 = [1,2,3]

let arr2 = ['one','two','three']

let result = arr1.map((element,index) =>{
    return [element,arr2[index]]
})
console.log(result);
*/


/*
// push --> array.push(element1,element2....elementn) -> Add element at end of the array
// unshift --> array. unshift(element1,element2,....,elementn)  ->  add elemets at beginning and return the length
// pop --> array.pop()   -> remove element at end of the array 
// shift --> array. shift()  removes the first element of the array

let len = array1.push(31,23);
console.log(len);

const result = array1.unshift(19);
console.log(result);

array1.pop();
console.log(array1);

const element = array1.shift();
console.log(element);
*/


/*
// reduce & reduceRight--> arr.reduce(callback(accumulator, currentValue, currentIndex, array), initialValue)    

const sum = array1.reduce((accumulator,currentValue,currentIndex,array1) =>{
    return accumulator+currentValue;
},0);
console.log(sum);

const max = array2.reduce((accumulator, currentValue) =>{
    return Math.max(accumulator, currentValue);
}, array2[0]);
  
console.log(max);


// reduceRight
let arr = [1,2,3,4,'5']
let arr1 = ['1',2,3,4,5]

const ans = arr.reduceRight((accumulator,currentValue)=>{
    return accumulator+currentValue
})

const ans1 = arr1.reduceRight((accumulator,currentValue)=>{
    return accumulator+currentValue
})

console.log(ans); // 54321
console.log(ans1); // 141
*/

/*
//reverse --> array.reverse() -> it will reverse an array
const reverseArray = array1.reverse();
console.log(reverseArray);
*/

/*
// slice --> array.slice(start,end) -->  return values between start-index to end-index(excluded)
const arr = array2.slice(2,5);
const arr = array3.slice(-5,-1);
console.log(arr);
*/

/*
// some --> array.some(callback_funct(element, index, array), thisArg); --> if any one element in the array satisfies the condition then it will return true, otherwise false.
const result = array1.some((num,index,array1)=>{
    return num>5;
});
console.log(result);
*/

/*
// every --> array.every(callback_funct(element, index, array), thisArg); --> if all elements in the array satisfy the condition then it will return true, otherwise false.
const result = array1.every((element,index)=>{
    return element<100;
})
console.log(result);
*/

/*
//  find --> array.find((ele.index)=>{}); --> this function is used to find an element in array , 
// if element found it will return the same element ,if an element is not found it will return undefined.
console.log(array1.find((element,index)=>{
    return element == '2' // 2 because we are using ==
}));

console.log(array1.find((element,index)=>{
    return element === '2' // undefined
}));

console.log(array1.find((element,index)=>{
    return element == 2 // 2
}));
*/

/*
//  includes --> array.includes(()=>{}) -->it is boolean function used to check element is present in array or not
console.log(array1.includes(2)); // true
console.log(array1.includes('2')); // false
console.log(array1.includes(20)); // false
*/

/*
// 16. splice --> array.splice(start,delete,element1,element2,?,elementn)  
// The JavaScript array splice() method is used to add/remove the elements to/from the existing array. 
// It returns the removed elements from an array. The splice() method also modifies the original array.
// We can use negative index as well using -1

const array = [1,2,3,4,5];
array.splice(1,2)
console.log(array);
array.splice(2,0,'balaji'); // add balaji at index 2 --> [ 1, 2, 'balaji', 3, 4, 5 ]
console.log(array);
const result = array.splice(2,3,'nirmal'); // start from index 2 remove 3 elements from array1 & add nirmal 
console.log(array); // original array
console.log(result);// deleted elements array
const result = array.splice(3); // remove all elements from index 3
console.log(result);
*/


// 17. fill --> arr.fill(value[, start[, end]])  
// num = new Array(100);
// num.fill("Balaji");
// console.log(num);
//  const result = array1.fill('balaji',3);
// const result = array1.fill('balaji',3,6);
//  console.log(result);

// 18. delete - return true or false based on the values in the array
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


