const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'));
app.get('/get-awesome-things', (req, res) =>
    res.send({
        hello: 'All the things you can do around PQ!',
    }),
);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
