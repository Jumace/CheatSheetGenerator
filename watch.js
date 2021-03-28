const fs = require("fs");
const {buildCheatSheet} = require("./src/utils")
const excludedElements = []
const sourceFolder = 'src/cheat-sheets';

fs.watch(sourceFolder,{recursive: true}, (event, filename) => {
  console.log(`[${filename}]: ${event}`);
  if (excludedElements.some((element) => {return filename.includes(element)})) {
    return;
  }

  const sheetFolder = filename.match(/.+\//g);
  console.log(`build ${sheetFolder}`);
  const buildPath = `${sourceFolder}/${sheetFolder}index.js`
  buildCheatSheet(buildPath);
});
