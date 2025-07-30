const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const method = req.method;
  const data = fs.readFileSync("./ok.json", "utf8");
  if (method === "GET") {
    console.log("GET method is working");
    res.writeHead(200, { "content-type": "application/json" });
    res.end(data);
  } else if (method === "POST") {
    console.log("POST method is working");
    let body = "";
    req.on("data", (chunk) => {
      body = body + chunk;
    });
    req.on("end", () => {
      const newUser = JSON.parse(body);
      const jUsers = fs.readFileSync("./ok.json", "utf8");
      const users = JSON.parse(jUsers);
      users.push(newUser);
      fs.writeFileSync("./ok.json", JSON.stringify(users));
      res.end("DUUSLAA");
    });
  } else if (method === "PUT") {
    const url = req.url;
    const check = url.split("=");
    const namme = check[1];
    console.log(namme);
    let body = "";
    req.on("data", (chunk) => {
      body = body + chunk;
    });
    req.on("end", () => {
      const checkUser = fs.readFileSync("./ok.json", "utf8");
      const uss = JSON.parse(checkUser);
      const info = JSON.parse(body);

      for (let i = 0; i < uss.length; i++) {
        if (uss[i].name === namme) {
          uss[i] = { name: namme, age: info.age, school: info.school };
          fs.writeFileSync("./ok.json", JSON.stringify(uss), "utf8");
        }
      }
      res.end("duus");
    });
  }
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server is : http://localhost:${port}`);
});
