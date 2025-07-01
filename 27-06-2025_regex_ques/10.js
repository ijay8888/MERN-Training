function dateFormat(num){
    return /^([0](0-9)|[12][0-9]|[3][0-1])-([0][1-9]|[1][0-2])-(\d{4})$/.test(num)
}

console.log(dateFormat("31-09-2328"));
