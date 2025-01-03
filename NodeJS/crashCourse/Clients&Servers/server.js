const http = require('http')

const fs = require('fs')

//can be declared under a variable, but isn't required.
const server = http.createServer((req, res) => { //request and response args
    console.log(req.url, req.method) //massive obj as a whole

    res.setHeader('Content-Type', 'text/html') //indicate content type.. image, html, plain text and much more.

    let path = './views/' 

    switch(req.url){
        case '/':
            path += 'index.html'
            res.statusCode = 200 //valid response
            break
        case '/about':
            path += 'about.html'
            res.statusCode = 200
            break
        
        default:
            path += '404.html'
            res.statusCode = 404 //not found
    }

    //send html file which is already decided in switch case
    fs.readFile(path, (err, data) => {
        if(err){
            console.error(err)
        }
        else{
            res.write(data)  
     
        }
        res.end() //ends response CAN PASS DATA THROUGH THIS AS WELL

    })

}) 

server.listen(3000, 'localhost', () => { //port number and host name
    console.log('listening for requests on port 3000')
})
//localhost is 127.0.0.1 address, listening for local requests and 3000 is a local port for dev.

//MAKE A REQUEST IN THE BROWSER VIA: "localhost:3000" in address bar.
