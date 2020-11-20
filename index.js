//https://javascript.info/regular-expressions

//1
//checking if a regex is present in a string (literal/case sensitive match)

let str = 'FreeCodeCamp is awesome! which is true';
let regex = /awesome/;

let result = regex.test(str);
console.log(result); //true

//2
//regex for multiple strings together (literal/case sensitive match)

str = 'FreeCodeCamp is awesome! which is true';
regex = /iss|or|and/;
console.log(regex.test(str)); //false

//3
//regex case insensitive match using 'i' flag

str = 'FreeCodeCamp is awesome! which is true';
regex = /IS/i;
console.log(regex.test(str)); //true

//4
//match() function to extract the matches into a list
//'g' flag is used to get all the occurrences
//multiple flags can be used by apppending after one another

str = 'FreeCodeCamp is awesome! which is true';
regex = /IS/gi;
console.log(str.match(regex));

//5
//wildcard matching. Single dot (.) is used to match one character

str = 'FreeCodeCamp is awesome! which is true';
regex = /.wesome/; //'.' is matching 'a' here
console.log(regex.test(str)); //true

//6
//set of elements match a single position

str = 'FreeCodeCamp is awesome! which is true';
regex = /[bcd]wesome/; //nothing is matching 'a' here
console.log(regex.test(str)); //false

//7
//range of elements denoted by '-' to match a single position

let numStr = 'new string 12345';
regex = /awe[r-t]ome/; //s from [r-t] is matching 's' here
regex2 = /[0-9]/g;
console.log(regex.test(str)); //true
console.log(numStr.match(regex2)); //true

//8
//characters that do not need to be matched to can be done using '^' character

numStr = 'abc123456';
regex = /[^abc]/gi; //matching only the numbers
console.log(numStr.match(regex));

//9
//regex to match characters/patters which is present one/more than one time using '+' sign
//regex to match characters/patters which is present zero/more than one time using '*' sign.
numStr = 'abc123ab45abc';
regex = /abc+/gi; //getting two instances of abc in numStr
regex2 = /abc*/gi; //getting three instances of abc, ab, abc in numStr since 'c' is to be present >= 0 times
console.log(numStr.match(regex));
console.log(numStr.match(regex2));

//10
//regex to match smallest substring that matches the pattern, also called lazy matching.
//lazy matching defies the greedy appproach that regex takes, i.e matching the largest substring to the pattern

str = '<h1>Winter is coming</h1>';
regex = /<..?>/; //matches first <h1>
console.log(str.match(regex));

//11
//regex to find if a pattern is the prefix of a string. '^' character is used here
//'^' inside brackets [] negates the characters. outside the brackets [], it is used to check the prefix

str = 'ABC DEF GHI';
regex = /^ABC/;
regex2 = /^GHI/;
console.log(regex.test(str), regex2.test(str)); // true false, as ABC is a prefix where GHI is not

//12
//regex to find if a pattern is the suffix of a string. '$' character is used here
//'$' is used to check the sufffix by appending to the pattern

str = 'ABC DEF GHI';
regex = /ABC$/;
regex2 = /GHI$/;
console.log(regex.test(str), regex2.test(str)); // false true, as GHI is a suffix where ABC is not

//13
//regex for matching a single alphanumeric char [a-zA-Z0-9_] and matching all except alphanumeric chars is [^a-zA-Z0-9_]
//shorthand for it is \w and \W

str = 'The five boxing wizards jump quickly.';
regex = /\w/g; //matching all alphanumeric chars
regex2 = /\W/g; //matching all chars except alphanumeric
console.log(str.match(regex));
console.log(str.match(regex2));

//14
//regex shorthand to match digits: \d
//regex shorthand to match all char except digits: \D
numStr = 'abc123ab45abc';
regex = /\d/g; //match all digits
regex2 = /\D/g; //match all char except digits
console.log(numStr.match(regex));
console.log(numStr.match(regex2));

//15
//Regex Practice
//check the validity of a username
//1. ends with >= 0 numbers, numbers can not start the username and be present in the middle of the string. only at the end
//2. can only use alphanumberic
//3. usernames can have upper and lower case letters
//4. username has to be >= 2 length. if length is 2 then only letters

//letter cannot appear after number is encountered, which means only prefix (solved by '^')

let strs = ['A1', 'A14', 'JACK', 'c57bT3', 'J'];
regex = /^[a-zA-Z]\d\d+$|^[a-zA-Z][a-zA-Z]+\d*$/;
strs.forEach((str) => console.log(regex.test(str)));

//16
//regex to match whitespace, newline: '\s'
//regex to match non-whitespace: '\S'

str = 'asfa asdfa werw asa\nnew     line';
regex = /\s/g; //get all occurrence of newline, spaces
regex2 = /\S/g; //get all occurrence of non whitespace chars
console.log(str, str.match(regex), str.match(regex2));

//17
//regex to match a pattern for a certain number of occurrence using '{}' bracket
//{lower_limit, upper_limit}
//{lower_limit, } //no upper limit
//{exact_count} //exact number of times the pattern should match in the string

str = 'ohhh yes';
regex = /oh{3,6}\syes/g; //check if 'h' matches between 3 to 6 times in the string, true
regex2 = /oh{2,}\syes/g; //check if 'h' matches at least 2 times, true
regex3 = /oh{2}\syes/g; //check if 'h' matches exactly 2 times, false
console.log(regex.test(str), regex2.test(str), regex3.test(str));

//18
//regex to match optional previous character '?'

str = 'ABXCDE';
regex = /ABX?CDE/g; //get all occurrence of newline, spaces
console.log(regex.test(str));

//19
//lookahead and lookbehind in regex
//used to match a pattern only if follwed or preceded by another pattern

//20
//password matching
//greater than 5 chars
//do not begin with numbers
//have two consecutive digits

strs = ['bana12', '2abc123', 'astr1on11aut', 'astra']; //[true, false, true, false]
regex = /^\D(?=\w{5})(?=\w*\d{2})/;
console.log('password exercise');
strs.forEach((str) => console.log(regex.test(str)));

//21
//regex for matching groupes of characters using '()'

str = 'abc xyz';
let str2 = 'def xyz';
regex = /(abc|def)\sxyz/;
console.log('grouping');
console.log(regex.test(str));
console.log(regex.test(str2));
