str1 = "Balaji Ravi";
str2 = "baby";
arr=["1","2","3"];
/*
String methods
*/
// we can pass array as concat value
// str1=str1.concat(...arr,"4");
// console.log(str1);
// console.log(str1.length);
// console.log(str1.charAt(9));
// console.log(str1.charCodeAt(8));
// console.log(str1.toLowerCase());
// console.log(str1.toUpperCase());
// console.log(str1.trim());
// console.log(str1.replace("Ravi","ravi"));
// console.log(str1.search("R"));
// console.log(str1.substring(3,7));

/*
    JavaScript Template Literals
*/

// Back-Tics Syntax

Str=`balaji is 
my name i am
from coimbatore`;

console.log(Str);

// Interpolation syntax --> {...}

let text = `
    s1 : ${str1}
    s2 : ${str2}
`;
console.log(text);