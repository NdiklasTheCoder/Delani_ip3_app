
// function route(handle, pathname){
//     console.log("About to route a request for " + pathname);
//     // Check if the request url is a function. since we mapped the our expected request urls to a function in request handlers
//     if (typeof handle[pathname]==='function'){
//          return handle[pathname]()
//     }else{
//         console.log("No request handler found for " + pathname);
//         return "404 Not found"
//     }
//  }
 
//  exports.route = route;


// we pass the response object on to the request handlers. instead of expecting a return value from our request handlers

 function route(handle, pathname, response){
    console.log("About to route a request for " + pathname);
    // Check if the request url is a function. since we mapped the our expected request urls to a function in request handlers
    if (typeof handle[pathname]==='function'){
         handle[pathname](response)
    }else{
        console.log("No request handler found for " + pathname);
        response.writeHead(404, {"Content-Type": "text/plain"});
        response.write("404 Not found");
        response.end();
    }
 }
 
 exports.route = route;