function palindrome (str){
    let reverse = str.split("").reverse().join("")
    return reverse
}
let input = "maddedfff";
// console.log(input);

let result = palindrome(input)
console.log(result);


if(result === input){
    console.log(`${input} is palindrom`);
    
}else{
    console.log("Not palindrome");
    
}