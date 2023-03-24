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

function updateHtmlPage(files) {
  const listFilePath = "index.html";
  const listContent = files
    .map((file) => {
      const relativePath = path.relative(directoryPath, file);
      return `<li><a href="${relativePath}">${relativePath}</a></li>`;
    })
    .join("\n");

  if (!fs.existsSync(listFilePath)) {
    console.error(`File "${listFilePath}" does not exist.`);
    process.exit(1);
  }

  const htmlContent = fs.readFileSync(listFilePath, "utf-8");
  const openingTag = '<ul id="list">';
  const closingTag = "</ul>";

  const startIndex = htmlContent.indexOf(openingTag);
  const endIndex = htmlContent.indexOf(closingTag);

  if (startIndex === -1 || endIndex === -1) {
    console.error(`Element with id "list" not found.`);
    process.exit(1);
  }

  const updatedHtmlContent =
    htmlContent.slice(0, startIndex + openingTag.length) +
    listContent +
    htmlContent.slice(endIndex);

  fs.writeFileSync(listFilePath, updatedHtmlContent, "utf-8");
}

const htmlFiles = getHtmlFiles(directoryPath);
updateHtmlPage(htmlFiles);