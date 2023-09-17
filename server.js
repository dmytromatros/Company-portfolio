const express = require('express');

const cors = require('cors');
const app = express();
const port = 8081;

app.use(cors());

app.use(express.json());

require('./router')(app);

app.listen(port, () => {
  console.log(`Server is started using the post ${port}`);
});
