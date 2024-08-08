// MILD
// Create an array called truths and store 3 true facts about yourself
let truths = ["Boy","sixteen","burgers"]



// console log the 1st element (element is not same as index!)
console.log(truths [1])


// change the value of the last element
truths[2]= "Pizza"


// console log the last element to check that it's changed
console.log(truths[2])


// MEDIUM
// Create a second array calles lies and store 3 fake facts about yourself
let lies = ["Girl","taco","Phone"]


// delete a value from the lies array
lies.pop()


// console log the second list to confirm the value is gone
console.log(lies)


// add a new lie to the lies array
lies.push("cat")
console.log(lies)
// SPICY
// pick the truths or lies array and console log the 1st element
console.log(lies[0])

// prompt the user to guess if it was true or false
let guess = prompt("Is this a truth or a lie, yes or no")

// stretch: how could you check they are right or wrong?

// Make a if statement and if they guess correctly output a message telling them that

if (guess === "yes"){
  console.log("Congrats you got it right!")
}
else {
  console.log("Wrong!")
}
   