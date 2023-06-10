/*
rest and spread operator for array
*/
let arr = ["balaji","ravi","baby","nirmal"];
//  spread operator example (... array_name)
let update = ["barani",...arr,"abi"];
console.log(arr);
console.log(update);


// rest operator :
// syntax : let[value, ...new_array_name(rest array)] = array_name;
let[...new_array]=update;
// console.log(temp2);
console.log(new_array);

 
/*
rest and spread operator for object
*/
// let temp = {
//     name : "Balaji",
//     age  : 19
// }

// temp={
//     // spread method
//     ...temp,
//     rollNo : "20CC003"
// }
// // console.log(temp);


// // rest method
// let{age,rollNo,...rest} = temp;
// console.log(age,rollNo);
// console.log(rest);
