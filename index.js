const http = require('http')

const fs = require('fs');


const server = http.createServer((req , res)=>{
    if(req.url == "/home"){
        res.end("Home page")
    }
    else if(req.url == "/getproductdata"){
        fs.readFile('db.json', 'utf8', (err, data) => {
            if(err){
                console.log(err)
            }
            else{
                const kp =JSON.parse(data)
                res.end(JSON.stringify(kp.products))
                
            }
        })
    }
    else if(req.url=="/user"){
        fs.readFile('db.json','utf8',(err,data)=>{
            if(err){
                console.log(err)
            }
            else{
                const kp =JSON.parse(data)
                res.end(JSON.stringify(kp.user))
               
            } 
        })
    }
})

server.listen(5200,()=>{
    console.log('server is running on port 5200')
})