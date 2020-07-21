

// Default synchronous https server request


// let http = require('http');

// http.createServer(function(request, response){
//  response.writeHead(200, {"Content-type": "text/plain"});
//  response.write("Hello World");
//  response.end();
// }).listen(8000);


// Asynchronous feedback response

// let http = require('http');

// let start = function() {

// function onRequest (request, response){
//     console.log("Request received!");
//     response.writeHead(200, {"Content-type": "text/plain"});
//     response.write("Hello World");
//     response.end();
// }
//     http.createServer(onRequest).listen(8000);

//     console.log("Server has started.")

// }
//     let testMethod = () => {
//         console.log("Wednesday content walkthrough");
//     }

//     exports.testMethod = testMethod;
//     exports.start = start;



// Creating custom modules

// let http = require('http');
// let url = require('url');

// // A function to wrap our server functionality so that we can export it
// let start = function(route, handle){

//    function onRequest(request, response){
//        // Extracting the pathname from the url requested
//        let pathname = url.parse(request.url).pathname
//        console.log("Request for " + pathname + " has been received.")
      
//        var content = route(handle, pathname);

//        response.writeHead(200, {"Content-type": "text/plain"});
//        response.write(content);
//        response.end();
//    }
  
//    http.createServer(onRequest).listen(8000);
  
//    console.log("Server has started.")
// }

// exports.start = start;



// Bringing server to content instead of taking content to server

// let http = require('http');
// let url = require('url');


// A function to wrap our server functionality so that we can export it, 
// transport the content  from the request handlers to the HTTP,  request handler → router → server

// let start = function(route, handle){

//    function onRequest(request, response){
//        // Extracting the pathname from the url requested
//        let pathname = url.parse(request.url).pathname
//        console.log("Request for " + pathname + " has been received.")
      
//        var content = route(handle, pathname, response);

//        response.writeHead(200, {"Content-type": "text/plain"});
//        response.write(content);
//        response.end();
//    }
  
//    http.createServer(onRequest).listen(8000);
  
//    console.log("Server has started.")
// }

// exports.start = start;


// request handler <- router <- server

// let http = require('http');
// let url = require('url');

// // A function to wrap our server functionality so that we can export it
// let start = function(route, handle){

//    function onRequest(request, response){
//        // Extracting the pathname from the url requested
//        let pathname = url.parse(request.url).pathname
//        console.log("Request for " + pathname + " has been received.")
      
//        // Inject the response object into the route function
//        route(handle, pathname, response);

//    }
  
//    http.createServer(onRequest).listen(8000);
  
//    console.log("Server has started.")
// }

// exports.start = start;


// we export the Logger class to be used by the other modules in the server.js for logs

let http = require('http');
let url = require('url');
let Logger = require('./logger');
let logger = new Logger('Server');

// A function to wrap our server functionality so that we can export it
let start = function(route, handle){

   function onRequest(request, response){
       // Extracting the pathname from the url requested
       let pathname = url.parse(request.url).pathname
      
       console.log("Request for " + pathname + " has been received.")
       logger.info("Request for " + pathname + " has been received with the request method " + request.method)
      
       // Inject the response object into the route function
       route(handle, pathname, response);

   }
  
   let PORT = process.env.PORT || 8000;

   http.createServer(onRequest).listen(PORT);
   logger.info(`Server has started on Port: ${PORT}`)
   console.log(`Server has started on Port: ${PORT}`);
}

exports.start = start;