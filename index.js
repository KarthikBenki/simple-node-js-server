const http = require('http');
const fs = require('fs')
const port = 8000

const server = http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/html'})

    if(req.url==="/about")
   fs.readFile("index.html",(err,data)=>{
    if(err){
        res.end("Sorry 404 page not found")
        return
    }

    res.end(data)
   })

   else if(req.url==="/login"){
    fs.readFile("login.html",(err,data)=>{
        if(err){
            res.end("Sorry 404 page not found")
            return
        }
    
        res.end(data)
       })
   }

   else{
    res.writeHead(404)
    res.end("Sorry 404 page not found")
   }
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