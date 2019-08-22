const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 3000;

const urlEncodedParser = bodyParser.urlencoded({ extended: false });

app.get("/", (req, res) => res.send("Hello World!"));
app.get("/get-awesome-things", (req, res) =>
  res.send({
    hello: "All the things you can do around PQ!"
  })
);
app.post("/interaction", urlEncodedParser, (req, res) => {
  console.log(req);
  res.send();
});
app.post("/command", urlEncodedParser, (req, res) => {
  console.log(req.body);
  res.send({
    blocks: [
      {
        type: "actions",
        elements: [
          {
            type: "button",
            text: {
              type: "plain_text",
              text: "Button",
              emoji: true
            },
            value: "click_me_123"
          }
        ]
      }
    ]
  });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
