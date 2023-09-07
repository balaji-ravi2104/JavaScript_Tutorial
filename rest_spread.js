/*
rest and spread operator for array
*/
let arr = ["balaji","ravi","baby","nirmal"];
//  spread operator example (... array_name)
let update = ["barani",...arr,"abi"];
// console.log(arr);
// console.log(update);


// rest operator :
// syntax : let[value, ...new_array_name(rest array)] = array_name;
// rest operator should come as a last parameter
let[...temp_array] = update;
console.log(temp_array);

let[first,...new_array]=update;
console.log(first);
console.log(new_array);

 
/*
rest and spread operator for object
*/
// let temp = {
//     name : "Balaji",
//     age  : 19
// }
// console.log(temp);
// temp={
//     // spread method
//     ...temp,
//     rollNo : "20CC003",
//     dept : "cce"
// }
// console.log(temp);


// // rest method
// let{age,rollNo,...rest} = temp;
// console.log(age,rollNo);// 19 20CC003
// console.log(rest);//balaji,cce
