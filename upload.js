let http = require("http");
let formidable = require("formidable");
let fs = require("fs");

http
  .createServer(function (req, res) {
    //Create an instance of the form object
    let form = new formidable.IncomingForm();
    //Process the file upload in Node
    form.parse(req, function (error, fields, file) {
      let filepath = file.fileupload.filepath;
      console.log(filepath);
      // let successPath = "./uploads/accepted/";
      // successPath += file.fileupload.originalFilename;
      // //Copy the uploaded file to a custom folder
      // fs.rename(filepath, successPath, function () {
      //   //Send a NodeJS file upload confirmation message
      //   res.write("File Uploaded Successfully..");
      //   res.end();
      // });
    });
  })
  .listen(8080);
