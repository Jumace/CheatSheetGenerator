const fs = require("fs");
const {exec} = require("child_process");
const unified = require("unified");
const markdown = require("remark-parse");
const html = require("remark-html");
const highlight = require("rehype-highlight");
const rehype = require("rehype");

async function printRowToFile(markdownFilePath, inputFilePath, outputFilePath, options) {
  const htmlRow = await markdown2Html(markdownFilePath, options);
  
  const rowNumber = getRowNumberFromPath(markdownFilePath);
  const inputFile = fs.readFileSync(inputFilePath);
  const outputFile = inputFile
    .toString()
    .replace(`##row${rowNumber}##`, htmlRow);
  
  fs.writeFileSync(outputFilePath, outputFile);
}

async function markdown2Html(markDownFilePath, options) {
  let output;
  try {
    output = await unified()
      .use(markdown)
      .use(html)
      .processSync(fs.readFileSync(markDownFilePath));
    output = await rehype()
      .data("settings", { fragment: true })
      .use(highlight, options)
      .processSync(output);
  } catch (err) {
    console.log("could not print file ", markDownFilePath);
    throw err;
  }

  return output.contents;
}

function getRowNumberFromPath(filePath) {
  return filePath.match(/(\d+).md$/)[1];
}

function buildCheatSheet(path) {
  exec(`node ${path}`, (error, stdout, stderr) => {
    if (stdout) {
        console.log("stdout: " + stdout);
    }
    if (stderr) {
        console.log("stderr: " + stderr);
    }
    if (error !== null) {
      console.log("exec error: " + error);
    }
  });
}

module.exports = {printRowToFile: printRowToFile, getRowNumberFromPath: getRowNumberFromPath, buildCheatSheet: buildCheatSheet};