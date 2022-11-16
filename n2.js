const http= require ("http");
const f=require("fs")
const server = http.createServer((req,res) => {
    const url=req.url;
    const method=req.method;
    if (url ==="/"){
        res.write("<html>");
        res.write('<head><title>Enter Message</title><head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Submit</button></form></body>');
        res.write("</html>");
        return res.end();
    }
    if (url==='/message' && method ==='POST'){
        f.writeFileSync("msg.txt","Universe");
        res.statusCode=302;
        res.setHeader('Location','/');
        return res.end();
        
    }
    //process.exit();
    res.setHeader("content_Type","text/html");
    res.write("<html>");
    res.write("<head><title>My DOC</title></head>");
    res.write("<body><h1>My First server page</h1></body>");
    res.write("</head>");
    res.end();
});
server.listen(8000);