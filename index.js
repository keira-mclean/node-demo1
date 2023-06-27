let message = "Hello World";
console.log(message);

let lodash = require("lodash");

let name = "keira";
console.log("Name: "+name);

name = lodash.startCase(name);
console.log("Start Case name: "+ name);

name = lodash.upperFirst(name);
console.log("Revised name: "+ name);

name = lodash.upperCase(name);
console.log("Upper Case name: "+ name);

let ss = require("simple-statistics");
let numbers = [62, 60, 53, 9, 11, 14, 15, 16, 17, 65, 88];

let smallest = ss.min(numbers);
let largest = ss.max(numbers);
let sum = ss.sum(numbers);
let average = ss.mean(numbers);

console.log(smallest, largest, sum, average);

