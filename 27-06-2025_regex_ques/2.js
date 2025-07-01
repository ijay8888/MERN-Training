function isOnlyDigits(str) {
  return /^\d+$/.test(str);
}
console.log(isOnlyDigits("123"));
