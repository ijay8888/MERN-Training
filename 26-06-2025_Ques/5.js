const Duplicates = new Set([1, 2, 2, 3, 4, 4, 5]);
console.log(Duplicates);


// function removeDuplicates(arr){
//     let unique = []

//     for (let i = 0; i < unique.length; i++) {
//         let exists = false
//         for (let j = 0; j < unique.length; j++) {
//             if (arr[i] === unique[j]) {
//                 exists = true;
//                 break
//             }
            
//         }
//         if (!exists) {
//                 unique.push(arr[i])
//             }
        
//     }
//     return unique
    
// }

//     console.log(removeDuplicates([1,1,1,1,2,3,5,5,5,6,7,8]));
