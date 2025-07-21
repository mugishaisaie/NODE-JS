const { readFile,writeFile } = require('fs').promises;


// const util = require('util');

// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);


const readOurFiles = async() =>{
    try{

        const first = await readFile('./content/first.txt','utf8');
        const second = await readFile('./content/second.txt','utf-8');
    
       await writeFile('./content/result-async.txt',`Here is the result of two files which contains : ${first}, ${second}`)
        
        console.log(first, second);
        }catch(err){
        console.log(`error is : ${err}`);
    }
    }
    readOurFiles()
    
    // const readFiles = (path)=>{
    //     return new Promise((resolve,reject)=>{
    //         readFile(path,'utf8',(err, data) => {
    //             if(err){
    //                 reject(err);
    //             }else{
    //                 resolve(data);
    //             }
    //         })
    //     })
    // }
// readFiles('./content/first.txt').then((result)=>console.log(result)).catch((err)=>console.log(err))