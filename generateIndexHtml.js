const fs = require("fs");
const path = require("path");

const directoryPath = process.cwd();

function getHtmlFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      fileList = getHtmlFiles(filePath, fileList);
    } else if (path.extname(filePath) === ".html") {
      fileList.push(filePath);
    }
  });

  return fileList;
}

function createHtmlPage(files) {
  const listItems = files
    .map((file) => {
      const relativePath = path.relative(directoryPath, file);
      return `<li><a href="/${relativePath}">${relativePath}</a></li>`;
    })
    .join("\n    ");
  const outputHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>HTML Files List</title>
</head>
<body>
  <ul>
    ${listItems}
  </ul>
</body>
</html>
`;

  fs.writeFileSync("index.html", outputHtml, "utf-8");
}

const htmlFiles = getHtmlFiles(directoryPath);
createHtmlPage(htmlFiles);