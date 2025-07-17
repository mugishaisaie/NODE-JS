


// async File system module


const {readFile,writeFile } = require('fs');

readFile('./content/first.txt','utf8',(err,result)=>
{
    if(err){
        console.log(err)
        return;
    }

    const first =result;

    readFile('./content/second.txt','utf8',(err,result)=>
    {
        if(err){
            console.log(err)
            return
        }
       const second =result;

       writeFile('./content/written2.txt',`Here is a written data  which is ${first} and ${second} `,(err,data)=>{
        if(err){
            console.log(err)
        }
        console.log(data)
       })
    })
})
