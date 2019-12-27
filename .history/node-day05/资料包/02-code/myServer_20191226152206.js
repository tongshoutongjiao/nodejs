const http=require('http');
let server=http.createServer();
server.on('request',(req,res)=>{
    res.end('hello good afternoon')
})

server.listen(4000)