// for - loops through a block of code a number of times
// for/in - loops through the properties of an object
// for/of - loops through the values of an iterable object
// while - loops through a block of code while a specified condition is true
// do/while - also loops through a block of code while a specified condition is true

const array = [1,3,5,7,9,4];
// forEach example

// array.forEach((element)=> console.log(element));
// element with index position
// array.forEach((element,index) => console.log(element,index));


// forin loop example syntax is given below
// for (const key in object) {
//     if (Object.hasOwnProperty.call(object, key)) {
//         const element = object[key];
        
//     }
// }
let obj = {
    name:"balaji",
    age :19,
    dept:"CCE"
};
for(let x in obj){
    console.log(x+" "+obj[x]);
}
for(let x in array){
    console.log(x+" "+array[x]);
}



// forof loop example syntax and it doesn't work for object only for array
// for (const iterator of object) {
// }
for(let i of array){
    console.log(i);
}