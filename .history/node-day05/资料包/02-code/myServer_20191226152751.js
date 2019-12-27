const http=require('http');
// let server=http.createServer();
// server.on('request',(req,res)=>{
//     res.end('hello good afternoon')
// })

// server.listen(4000,()=>{
//     console.log('端口号4000，开启成功')
// })
http.createServer((req,res)=>{
    res.end('hello may i come in !')
}).listen(4000,()=>{
    console.log('端口号监听成功')
})