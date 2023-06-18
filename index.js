const http = require('http');
const port = 8000

const server = http.createServer((req,res)=>{
    console.log(req.url);
    switch(req.url){
        case '/about':res.end("about")
        break;
        case "/login":res.end("login")
        break;
        default:
            res.end("404 page not found")
    }
    res.write("Welcome\n")
    return res.end("Hello World");
})
//port number is unique address on ram
server.listen(port,(err)=>{
    if(err){
        console.log(err)
        return
    }
    console.log(`listening on port http://localhost:${port}`);
})

//127.0.0.1:8000 is a loop back  IP