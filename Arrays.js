let array1 = [1,2,3,4,5,6,7,8,9,10];
// let array2 = [11,21,31,41,51,61];
// console.log(array1[0]);
// console.log(array1.concat(array2)); --> concat
// console.log(array1[11]); undefined

let array3 = new Array("baby","ravi","balaji","nirmal");
// console.log(array3);
// let len = array1.push(11);
// console.log(len);


// array1.pop();
// console.log(array1);

// return values between start-index to end-index
// console.log(array1.slice(2,6));


// array1.splice(3,4); start index , how many elements to be removed
// console.log(array1);

// array3 = array3.join(' ');
// console.log(array3);


// console.log(array1.indexOf(9));

// fill method
// num = new Array(100);
// num.fill("Balaji");
// console.log(num);

// return true or false based on the values in the array
// console.log(delete array1[3]);
// console.log(array1);



const marks = [32,78,56,30,90,56];
// console.log(marks);

// map method
// const temp = marks.map(function(e){
//     console.log(e);
//     // return e;
// });
// console.log(temp);

// const grade = marks.map((element,index)=>{
//     // if(element>=35){
//     //     return "pass";
//     // }else{
//     //     return "fail";
//     // }
//     return element>=35?"pass":"fail";
// });
// console.log(grade);


// Filter method
//  it will check only the boolean expression
// const pass = marks.filter((element)=>{
//     return element>=35;
// });
// console.log(pass);


// reduce method

const sum = marks.reduce((total,element)=>{
    // console.log(total);
    return total + element;
},0);
console.log(sum); 