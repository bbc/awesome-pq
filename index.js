const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 3000;

const blocks = require('./blocks-config.json')
const { eat } = require('./suggestions')

const urlEncodedParser = bodyParser.urlencoded({ extended: false });

app.get("/", (req, res) => res.send("Hello World!"));
app.get("/get-awesome-things", (req, res) =>
  res.send({
    hello: "All the things you can do around PQ!"
  })
);
app.post("/interaction", urlEncodedParser, (req, res) => {

  const { payload } = req.body

  const parsedPayload = JSON.parse(payload);
  console.log(parsedPayload);

  const { actions: [{ value }] } = parsedPayload;

  switch(value) {
    case 'eat': {
      res.send({
        blocks: eat
      })
      break;
    }
    case 'drink': {

    }
    case 'drink-coffee': {

    }
    case 'do-things': {

    }
    default:
      // whoops!
      return
  }

  res.send();
});
app.post("/command", urlEncodedParser, (req, res) => {
  console.log(req.body);
  res.send({
    blocks
  });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
