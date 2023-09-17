const express = require('express');

const cors = require('cors');
const app = express();
const port = 8081;

app.use(cors());

require('./router')(app);

app.listen(port, () => {
  console.log(`Сервер запущено на порту ${port}`);
});
