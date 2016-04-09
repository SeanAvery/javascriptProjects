// // import express module
// var express = require('express');

// var app = express();

// // set express static to public folder
// app.use(express.static('public'));

// var bodyParser = require('body-parser');
// app.use(bodyParser.urlencoded({extended:false}));

// // get index.html view
// app.get('/index.html', function(req, res){
// 	res.sendFile(__dirname + "/index.html");
// });

// app.post('/upload_file', function(req, res) {
// 	console.log(req.files.fileUpload.name);
// });

// // listen at port 3002
// var server = app.listen('3002');

var express = require('express');
var app = express();
var fs = require("fs");

var bodyParser = require('body-parser');
var multer  = require('multer');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
var upload = multer({ dest: '/tmp/'});

app.get('/index.htm', function (req, res) {
   res.sendFile( __dirname + "/" + "index.htm" );
})

app.post('/file_upload', function (req, res) {

   console.log(req.files.file.name);
   console.log(req.files.file.path);
   console.log(req.files.file.type);

   var file = __dirname + "/" + req.files.file.name;
   fs.readFile( req.files.file.path, function (err, data) {
        fs.writeFile(file, data, function (err) {
         if( err ){
              console.log( err );
         }else{
               response = {
                   message:'File uploaded successfully',
                   filename:req.files.file.name
              };
          }
          console.log( response );
          res.end( JSON.stringify( response ) );
       });
   });
})

var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

})