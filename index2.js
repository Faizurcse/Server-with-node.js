const http = require('http')

const fs = require('fs')

const srever = http.createServer((request,response)=>{
    console.log('Request Received')
    fs.readFile('./index.html',(err,data)=>{
        if(err){
            console.log(err)
            response.write('Error 400')
            response.end()
        }
        else{
            response.end(data)
        }
    })
})

srever.listen(3000,'localhost',()=>{
    console.log('listening at port 3000')
})