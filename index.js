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

