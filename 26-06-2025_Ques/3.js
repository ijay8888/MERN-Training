function LongestWord(sentence){
    const words = sentence.split(" ")
    let longest = ""

    for (let index = 0; index < words.length; index++) {
        if(words[index].length > longest.length){
            longest = words[index]
        }
    }
    return longest
}
console.log(LongestWord("The quick brown fox jumped over the lazy dog"));
