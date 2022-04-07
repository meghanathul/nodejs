const http = require("http");  //es5
//creatig server
http.createServer(function(request, response){
// response.write('Hello World')

//with html element
// response.write('<h1>Hello World</h1>');

//creating a object
let user={name:'a',age:45};
response.write(JSON.stringify(user))


//closing server
    response.end();
}).listen(3000)  //to tell application on which portnumber it running

//socket-continous connection (server)


//A SINGLE API:APPLICATION PROGRAMABLE INTERFACE
//ROUTE  /--DEFAULT

//EXPRESS FRAMEWORK
// allow you to combine the child routes or all the routes to the default route
// /api
// /bollywood
// /api/bollywood