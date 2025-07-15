// Path Module

const path = require('path');
// join method to create a path
const filePath = path.join('/content','sub','test.txt');
console.log(filePath);
// get the base name of the file

const baseName = path.basename(filePath);
console.log(baseName);
// get the absolute path
const absolutePath = path.resolve(__dirname,'content','sub','test.txt');
console.log(absolutePath);