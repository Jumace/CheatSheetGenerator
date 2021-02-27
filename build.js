const fs = require("fs");
const path = require('path');
const {buildCheatSheet} = require("./src/utils.js")
const folderPath = 'src/cheat-sheets';


const fileNames = fs.readdirSync(folderPath);

fileNames.forEach(async fileName => {
  console.log(`building ${fileName}`);
  const buildPath = `${path.join(__dirname, folderPath, fileName)}/index.js`
  buildCheatSheet(buildPath)
});