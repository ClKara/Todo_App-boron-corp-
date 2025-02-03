const express = require('express');
const app = express();
const PORT = 3001; // Choose a port that's not in use

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});