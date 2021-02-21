const {exec} = require("child_process");
var fs = require("fs");
const excludedElements = ['dist']

fs.watch(".", (event, filename) => {
  console.log(`[${filename}]: ${event}`);

  if (excludedElements.some((element) => {return filename.includes(element)})) {
      return;
  }
  exec("node index.js", (error, stdout, stderr) => {
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
});
