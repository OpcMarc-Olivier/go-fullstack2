const http = require('http');

const server = http.createServer((req,res)=>{
    res.end('server is running again but with nodemon!!')
});

server.listen(process.env.PORT||3001)

