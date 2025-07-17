const app = require('http');

const server = app.createServer((request,response)=>{
    if(request.url === '/'){
        response.end('WELCOME  to our system application')
    }

    else if(request.url === '/about'){
        response.end('<h2>This is about of our web application system</h2>')
    }else{
        response.end('<p>Sorry We can not find what you are looking for</p>')
    }   
})

server.listen(5000)