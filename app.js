const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send(`Persued BSc. Electrical & telecommunications Engineering registered with Engineers Registration Board under Serial No. B12826.`);
});

app.listen(3000, () => {
  console.log('App running on port 3000');
});

