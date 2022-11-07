// Requiring the module
const reader = require("xlsx");

// Reading our test file
const file = reader.readFile("./rawdata/two.xlsx");

let data = [];

const sheets = file.SheetNames;

for (let i = 0; i < sheets.length; i++) {
  const temp = reader.utils.sheet_to_json(file.Sheets[file.SheetNames[i]]);
  temp.forEach((res) => {
    data.push(res);
  });
}

for (const index in data) {
  if (Object.values(data[index]).indexOf("Male") > -1) {
    console.log("It's a Male");
  }
  if (Object.values(data[index]).indexOf("Female") > -1) {
    console.log("It's a Female");
  }
}
