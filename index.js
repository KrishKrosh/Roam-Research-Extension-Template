const express = require('express');

const app = express();

app.use(express.static('roam-extension/build'))


app.get('/', (req, res) => {
  res.send('Roam Research Extension Server is alive!')
});

app.listen(3000, () => {
  console.log('server started');
});
