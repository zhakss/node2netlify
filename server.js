const express = require('express');
const ejs = require('ejs');

const app = express();
const port = process.env.PORT || 3000;

app.set('views', 'public');
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index', { message: 'Hello, Express and EJS!' });
});

app.listen(port, () => {
  console.log(`server is runninh`);
});
