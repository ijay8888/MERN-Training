// console.log("hello");

let shoppingList = ["fruits", "groceries"]

// console.log(shoppingList[0]);

// shoppingList.push(); adds an elements at last of an array
// shoppingList.pop(); removes elements from last
// shoppingList.shift(); removes element from first
// shoppingList.unshift(); adds element at first of array
// shoppingList.splice(0); removes elemets from a particular index

let person1 ={
    name:"jay",
    age:"21",
    isEmployee: true
}

person1.name = "ijay"

// console.log(person1.name);

// for loop is used when the number of iterations are known

// while loop is used when the no of iterations are unknown

for (let index = 0; index < 5; index++) {
    // console.log(index);   
}

obj1 ={
    name:"jaga",
    age: 22,
    course: "mern"

}

for (const key in obj1) {
    // console.log(key, obj1[key]);
    
}

// result = marksList.join() //to print elements in a single line


// for (const element of marksList) {
//     // console.log(element); 
//     // console.log(result);

      
// }

i = 1
while(i <= 20){
    if(i % 2 == 0){
        console.log(i + " is even");
    }
    i++
}




