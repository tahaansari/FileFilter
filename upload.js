let http = require("http");
let formidable = require("formidable");
let fs = require("fs");

http
  .createServer(function (req, res) {
    res.write("Server is running.....");
    res.end();

    //Create an instance of the form object
    let form = new formidable.IncomingForm();

    //Process the file upload in Node
    form.parse(req, function (error, fields, file) {
      let filepath = file.fileupload.filepath;
      let newpath = "./uploads/accepted/";
      newpath += file.fileupload.originalFilename;

      //Copy the uploaded file to a custom folder
      fs.rename(filepath, newpath, function () {
        //Send a NodeJS file upload confirmation message
      });
    });
  })
  .listen(8080);
