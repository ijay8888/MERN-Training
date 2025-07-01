function postalCode(num){
    return /^\d{5}$/.test(num)
}

console.log(postalCode("12334"));
