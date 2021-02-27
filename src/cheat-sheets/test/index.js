const fs = require("fs");
const path = require('path');
const {printRowToFile, getRowNumberFromPath} = require("../../utils");

const name = "test";
const options = {
  ignoreMissing: true,
  languages: {
    javascript: require("highlight.js/lib/languages/javascript"),
    typescript: require("highlight.js/lib/languages/typescript"),
    css: require("highlight.js/lib/languages/css")
  }
};

async function main() {
  const outputFilePath = path.join(__dirname, `../../../papers/${name}.html`);
  const templateFilePath = path.join(__dirname, 'template.html');
  
  const fileNames = fs.readdirSync(__dirname);

  fileNames.forEach(async fileName => {
    if (fileName.includes('row')) {
      const rowNumber = getRowNumberFromPath(fileName);
      const rowFilePath = path.join(__dirname, fileName);
      if (rowNumber == 1) {
        await printRowToFile(rowFilePath, templateFilePath, outputFilePath, options);
        return;
      }
      await printRowToFile(rowFilePath, outputFilePath, outputFilePath, options);
      
    }
  });
}

main();
