// File sync system Module

const {readFileSync, writeFileSync} = require('fs')

const first = readFileSync('./content/first.txt','utf8')
const second = readFileSync('./content/second.txt','utf8')

console.log(first,second)
const writtenResult = writeFileSync('./content/writtenFile.text',`This is the results of written file combined : ${first} and ${second} `)
