const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 3000;

const fetch = require('node-fetch');

const blocks = require('./blocks-config.json')
const { eat } = require('./suggestions')

const urlEncodedParser = bodyParser.urlencoded({ extended: false });

app.get("/", (req, res) => res.send("Hello World!"));
app.get("/get-awesome-things", (req, res) =>
  res.send({
    hello: "All the things you can do around PQ!"
  })
);
app.post("/interaction", urlEncodedParser, (req, res, next) => {

  const { payload } = req.body

  const parsedPayload = JSON.parse(payload);
  console.log(parsedPayload);

  const { actions: [{ value }], response_url } = parsedPayload;

  switch(value) {
    case 'eat': {
      fetch(response_url, {
        method: 'POST',
        body: JSON.stringify({
          blocks: eat
        })
      })
      .then(response => {
        const msg = `${response.status} - ${response.statusText}`
        console.log(msg)
      })
      .catch(err => {
        console.error(err);
      })
      .finally(() => {
        next()
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
