var fs = require("fs");
var unified = require("unified");
var markdown = require("remark-parse");
var html = require("remark-html");

const rows = 2;

async function main() {
  for (let index = 1; index <= rows; index++) {
    if (index === 1) {
      await printRow(index, "template.html");
    }
    await printRow(index, "dist/index.html");
  }
}

async function printRow(rowNumber, templateFilePath) {
  let row;
  try {
    row = await unified()
      .use(markdown)
      .use(html)
      .processSync(fs.readFileSync(`row${rowNumber}.md`));
  } catch (err) {
    console.log("could not print row ", rowNumber);
    throw err;
  }

  const templateFile = fs.readFileSync(templateFilePath);
  const indexFile = templateFile
    .toString()
    .replace(`##row${rowNumber}##`, row.contents);
  fs.writeFileSync("dist/index.html", indexFile);
}

main();
