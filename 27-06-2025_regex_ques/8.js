function capital(str){
    return (/\b[A-Z][a-z0-9]+\b/g).test(str)
}
console.log(capital("Jay is a good Boy"));
