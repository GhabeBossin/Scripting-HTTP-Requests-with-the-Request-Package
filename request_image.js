var request = require('request');
var fs = require('fs');

request.get('https://sytantris.github.io/http-examples')               // Note 1
      .on('error', function (err) {                                    // Note 2
        throw err;
      })
      .on('response', function (response) {
        console.log('Response Status Code: ' + response.statusCode + '\n' + 'Response Message: ' + response.statusMessage + '\n' + 'Content Type: ' + response.headers['content-type']);
        console.log('Downloading image...'); 
      })
      .on('end', function (){
        console.log('Downloaded image!');
      })
      .pipe(fs.createWriteStream('./future.jpg'));     // Note 4


