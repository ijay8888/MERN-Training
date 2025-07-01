function mobileNum(num){
    return /^[6-9]\d{9}$/.test(num)
}

console.log(mobileNum("7678909387"));
