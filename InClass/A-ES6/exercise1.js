// Turn this function into an arrow function
function arrow() {
  return "es6 is awesome!";
}

let x = () => "es6 is awesome!"

console.log(x());



//Use the es6 syntax for default parameter
function defaultParameter(name = "akash") {
  
  return name;
}

console.log(defaultParameter());

// Use the spread operator to combine arr1 and arr2
function combineArrays(arr1, arr2) {
  return [...arr1,...arr2]
}
console.log(combineArrays([1,2,3], [4,5,6]));

//use destructuring to return the object's cyf property
let obj = {
  name: "harry",
  cyf: 24
}

function destructuring(obj) {
  const {cyf} = obj
  return cyf
}
console.log(destructuring(obj));

// use template literal to return a string with the sum of a and b
function templateString(a, b) {
  let d
  return `The sum is equal to ${ d = (a+b).toString()} `
  //return typeof `${(a+b).toString()}`
  
}

console.log(templateString(1,2));
