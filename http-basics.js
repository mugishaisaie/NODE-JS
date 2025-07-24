const app = require('http');

const {readFileSync} = require('fs');
const server = app.createServer((request,response)=>{
    // console.log(request.url)
    const HomePage = readFileSync('./navbar-app/index.html');
    const HomeStyle = readFileSync('./navbar-app/styles.css');
    const HomeLogo = readFileSync('./navbar-app/logo.svg');
    const HomeLogic = readFileSync('./navbar-app/browser-app.js');

    const url = request.url;
    if(url === '/'){
        response.writeHead(200,{'content-type':'text/html'})
        response.write(HomePage);
        response.end();

    }else if(url === '/about'){
        response.writeHead(200,{'content-type':'text/html'})
        response.write('<h1>About Page</h1>');
        response.end();
    
    }else if (url === '/styles.css'){
        response.writeHead(200,{'content-type':'text/css'})
        response.write(HomeStyle);
        response.end();
    }else if (url === '/logo.svg'){
        response.writeHead(200,{'content-type':'image/svg+xml'})
        response.write(HomeLogo);
        response.end();
    }else if (url === '/browser-app.js'){
        response.writeHead(200,{'content-type':'text/javascript'})
        response.write(HomeLogic);
        response.end();
    }else{
        response.writeHead(200,{'content-type':'text/html'})
        response.write('<h1>Page Not Found</h1>');
        response.end();
    }

})

server.listen(3000)