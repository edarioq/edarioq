const express = require('express');
const app = express();
const serveStatic = require('serve-static');
const port = process.env.PORT || 5000;

app.use(serveStatic(__dirname + '/dist'));

app.listen(port, () => {
  console.log(`Server started on ${port}`);
});
