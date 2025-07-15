// common JS every file is a module



const os = require('os');
// info about current user
const user = os.userInfo();
console.log(user)


// methods return uptime in a seconds

console.log(`The system uptime is ${os.uptime()} seconds`);

const currentOs = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}

console.log(currentOs)