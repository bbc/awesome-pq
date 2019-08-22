const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }))

app.get("/", (req, res) => res.send("Hello World!"));
app.get("/get-awesome-things", (req, res) =>
  res.send({
    hello: "All the things you can do around PQ!"
  })
);
app.post("/interaction", (req, res) => {
  console.log(req);
  res.send();
});
app.post("/command", , (req, res) => {
  console.log(req.body);
  res.send();
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
