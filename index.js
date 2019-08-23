const express = require('express');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');

const { blocksConfig } = require('./blocks-config');
const suggestions = require('./suggestions');

const handleCommand = (req, res) => {
  res.send({
    blocks: blocksConfig,
  });
};

const sendOptions = async (categoryName, responseUrl) => {
  try {
    const body = JSON.stringify({
      blocks: {
        ...blocksConfig,
        ...suggestions[categoryName],
      },
    });

    const response = await fetch(responseUrl, {
      method: 'POST',
      body,
    });

    if (response.ok) {
      console.log('Notification sent!');
      console.log(body);
    } else {
      const msg = `${response.status} - ${response.statusText}`;
      throw new Error(msg);
    }
  } catch (err) {
    console.error(err);
  }
};

const handleInteraction = async (req, res) => {
  const { payload } = req.body;
  const {
    actions: [{ value: categoryName }],
    response_url: responseUrl,
  } = JSON.parse(payload);

  const allowedOptions = ['eat', 'drink', 'drink_coffee', 'do_things'];
  if (allowedOptions.includes(categoryName)) {
    await sendOptions(categoryName, responseUrl);
  } else {
    res.status(400).send({
      message: 'Bad option!',
    });
  }
};

// Server initialisation.
const app = express();
const port = process.env.PORT || 3000;
const urlEncodedParser = bodyParser.urlencoded({ extended: false });

app.get('/', (req, res) => res.send('Hello World!'));
app.get('/get-awesome-things', (req, res) =>
  res.send({
    hello: 'All the things you can do around PQ!',
  })
);
app.post('/command', urlEncodedParser, handleCommand);
app.post('/interaction', urlEncodedParser, handleInteraction);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
