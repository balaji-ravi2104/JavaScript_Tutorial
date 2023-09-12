// str1 = "Balaji Ravi";
// str2 = "baby";
// arr=["1","2","3"];
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

// It will print as
// Str=`balaji is 
// my name i am
// from coimbatore`;

// console.log(Str);

// Interpolation syntax --> {...}

// let text = `
//     s1 : ${str1}
//     s2 : ${str2}
// `;
// console.log(text);

/*

// search():- This function returns the index of first match stringreturns -1 for unsuccessful search

let str = "Sound mind in sound body"
console.log(str)
console.log(str.search('sound'))	//14
console.log(str.search('Sound'))	//0
console.log(str.search(/sound/i))   //0
console.log(str.search('refresh'))  //-1

*/


// replace

/*
// Eg01

let str = "School"
let res = str.replace("School","College")
console.log(str);
console.log(res);

//Eg02
let str='red green Red red Green Red'
let res=str.replace(/red/,'yellow')
console.log(str);
console.log(res);

// Eg03
res=str.replace(/red/g,'yellow')
console.log(res);
res=str.replace(/red/ig,'yellow')
console.log(res); 
*/

/*
toLocaleLowerCase() 	
toLocaleUpperCase()

*)these functions are similar to toLowerCase() and toUpperCase() respectively,
*)the difference is that toLocaleLowerCase() and toLocaleUpperCase() functions produce outputs depend on local language of that particular region (i.e. in browser's local language)

let str = "balaji"
console.log(str.toUpperCase()); //BALAJI
console.log(str.toLocaleUpperCase('tr')); //BALAJİ

let str1 = "BALAJI"
console.log(str1.toLowerCase()); //balaji
console.log(str1.toLocaleLowerCase('tr')); // balajı
*/

/*
// charCodeAt()
// charCodeAt():- this function returns the unicode of the character at the specified index in a string.
//http://www.columbia.edu/kermit/ucs2.html

let str = "abcAe"
console.log(str.charCodeAt(3));
*/


/*
// valueOf():-returns the primitive value of String object
let str = new String("ABC")
let res = str.valueOf()
console.log(str); // [String: 'ABC']
console.log(res); // ABC --> primitive


// toString()
// String.toString() -> converts String object to string
// Number.toString() -> method converts a number to a string with base as argument (from 2 to 36)

let res1 = str.toString()
console.log(res1); // ABC --> string


let num = 78
console.log(num.toString());//78
console.log(num.toString(2));//1001110
console.log(num.toString(8));//116
console.log(num.toString(16));//4e

*/