/* Page Downloader: https://web.compass.lighthouselabs.ca/days/w02d3/activities/888

Node.js documentation for beginners https://nodejs.dev/learn/writing-files-with-nodejs
Node.js official documentation https://nodejs.org/api/fs.html#fs_fs_writefile_file_data_options_callback

Implement a node app called fetcher.js.

It should take two command line arguments: 

> node fetcher.js http://www.example.edu/ ./index.html
        • a URL
        • a local file path

1. It should download the resource at the URL to the local path on your machine. 
2. Should identify file size
          How can you get the file size?

          -  Node's documentation, a way to get statistics about a file sitting on your file system. 
          -  OR, think about the fact that 1 character is equal to 1 byte.


3. Upon completion, it should print out a message like 
• 'Downloaded and saved 1235 bytes to ./index.html.'


There are two async operations (will take an unknown amount of time):

• You need to make an http request and wait for the response.
• After the http request is complete, you need to take the data you receive and write it to a file in your local filesystem.



TIP: 
[-] When trying to control the order of asynchronous operations, you can use nested callbacks.
[x] Install and use the request library to make the HTTP request (library is deprecated but ok to use for our purposes.)
[x] Use Node's fs (file system) module to write the file
[???] Use the callback based approach we've been learning so far
[?] Do not use the pipe function
[?] Do not use synchronous functions (see warning above)

*/

const fs = require('fs');
const request = require('request');


const args = process.argv;
const urlAndPath = args.slice(2); 
const url = urlAndPath[0]
const path = urlAndPath[1]

request(url, (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
 
  fs.writeFile(path, body, err => {
    if (err) {
      return console.error(err);
    }
    //file written successfully
    const fileSize = body.length
    console.log(`Downloaded and saved ${fileSize} bytes to ${path}`)
  })
});


// // async
// fs.readFile(path,{encoding: 'utf-8'}, (err, data) => {
//   if(err) {
//     return console.log(err);
//   }
//   const fileSize = data.length
//   console.log(fileSize)

// })


