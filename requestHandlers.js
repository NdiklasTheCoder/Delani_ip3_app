
// // function for handling the business logic for index.html
// function index (){
//     console.log("Request handler for index was called.")
//     // Function that will delay for 10 seconds before returning the text.
//    function sleep(milliseconds){
//     var startTime = new Date().getTime()
//     while (new Date().getTime() < startTime + milliseconds){}
// };
// sleep(10000);
//     return "Welcome to Delani Studio"
//  }
 
//  // function for handling the business logic for  portfolio.html
//  function portfolio(){
//     console.log("Request for handler for portfolio was called.")
//     return "These are some of our portfolio projects"
//  }
 
//  exports.index = index;
//  exports.portfolio = portfolio;


 //  taking care of blocking operation

//  let exec = require("child_process").exec;

// // function for handling the business logic for index.html
// function index (){
//    console.log("Request handler for index was called.")
//    // Function that will delay for 10 seconds before returning the text.
//    var content = "empty";

//    exec("ls -lah", function(error, stdout, stderr){
//        content = stdout;
//    })
  
//    return content
// }

// // function for handling the business logic for  portfolio.html
// function portfolio(){
//    console.log("Request for handler for portfolio was called.")
//    return "These are some of our portfolio projects"
// }


// exports.index = index;
// exports.portfolio = portfolio;


// request handler <- router <- server

let exec = require("child_process").exec;

// function for handling the business logic for index.html
function index (response){
   console.log("Request handler for index was called.")
  
   exec("ls -lah", function(error, stdout, stderr){
      
       response.writeHead(200, {"Content-type": "text/plain"});
       response.write(stdout);
       response.end(); 
   })

}

// function for handling the business logic for  portfolio.html
function portfolio(response){
   console.log("Request for handler for portfolio was called.")
   response.writeHead(200, {"Content-type": "text/plain"});
   response.write("These are some of our portfolio projects");
   response.end();
  
}


exports.index = index;
exports.portfolio = portfolio;