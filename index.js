const http = require('http');
const port = 8000

const server = http.createServer((req,res)=>{
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