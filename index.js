const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 3000;

const blocks = require('./blocks.json')

const urlEncodedParser = bodyParser.urlencoded({ extended: false });

app.get("/", (req, res) => res.send("Hello World!"));
app.get("/get-awesome-things", (req, res) =>
  res.send({
    hello: "All the things you can do around PQ!"
  })
);
app.post("/interaction", urlEncodedParser, (req, res) => {
  console.log(req.body);
  res.send();
});
app.post("/command", urlEncodedParser, (req, res) => {
  console.log(req.body);
  res.send({
    blocks
  });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
