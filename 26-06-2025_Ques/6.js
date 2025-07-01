let str1 = "listen";
let str2 = "silent";

let str3 = "hello";
let str4 = "world";

let isAnagram1 = str1.toLowerCase().split("").sort().join("") === str2.toLowerCase().split("").sort().join("");

let isAnagram2 = str3.toLowerCase().split("").sort().join("") === str4.toLowerCase().split("").sort().join("");


console.log(isAnagram1);
console.log(isAnagram2);