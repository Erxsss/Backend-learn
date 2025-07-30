const fs = require("fs");

// fs.readFileSync("text.txt", "utf8", (err, data) => {
//   console.log("file contents:", data);
// });

// const res = fs.readFileSync("text.txt", "utf8")
// console.log("file contents:",res);
// const ok = fs.writeFileSync("text2.txt", "ok");
// const hi = fs.appendFileSync("text2.txt", "\nchie");
// const d = fs.copyFileSync("text.txt", "hi bro.txt");
// fs.unlinkSync("hi bro.txt");
// fs.renameSync("text.txt","text12.txt");

const http = require("http");
const server = http.createServer((req, res) => {
  res.writeHead(200, { "content-type": "text/plain" });
  res.end("Hi world");
});
const port = 3000;
server.listen(port, () => {
    console.log(`Server is : http://localhost:${port}`)
});
