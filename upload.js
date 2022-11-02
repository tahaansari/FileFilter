let http = require("http");
let formidable = require("formidable");
let fs = require("fs");
const reader = require("xlsx");

http
  .createServer(function (req, res) {
    //Create an instance of the form object
    let form = new formidable.IncomingForm();

    //Process the file upload in Node
    form.parse(req, function (error, fields, file) {
      let filepath = file.fileupload.filepath;
      let newpath = "./upload-example/";

      newpath += file.fileupload.originalFilename;

      res.write(data, "Success");
      res.end();

      //Copy the uploaded file to a custom folder
      // fs.rename(filepath, newpath, function () {
      //   //Send a NodeJS file upload confirmation message
      // });
    });
  })
  .listen(80);

// const file = reader.readFile("./test.xlsx");
// let data = [];
// const sheets = file.SheetNames;
// for (let i = 0; i < sheets.length; i++) {
//   const temp = reader.utils.sheet_to_json(file.Sheets[file.SheetNames[i]]);
//   temp.forEach((res) => {
//     data.push(res);
//   });
// }
