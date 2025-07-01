function validPass(str){
    return /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).+$/.test(str)
}

console.log(validPass("Ijay88"));
