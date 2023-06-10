str = "Balaji Baby";
console.log(str.search(/Balaji/,"Hi"));
console.log(str.search(/baby/i));
// [abc]	Find any of the characters between the brackets
// [0-9]	Find any of the digits between the brackets
// (x|y)	Find any of the alternatives separated with |
// n+	Matches any string that contains at least one n
// n*	Matches any string that contains zero or more occurrences of n
// n?	Matches any string that contains zero or one occurrences of n