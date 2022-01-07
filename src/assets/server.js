const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const enforce = require('express-sslify');
const compression = require('compression');


if (process.env.NODE_ENV !== 'production') require('dotenv').config();


const app = express();
const port = process.env.PORT || 4011;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Automatically allow cross-origin requests
app.use(cors({ origin: true }));
app.use(compression);


if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));

  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

app.listen(port, error => {
  if (error) throw error;
  console.log('Server running on port ' + port);
});


app.get('/test', (req, res) => {
    console.log(req.body);
    res.sendStatus(200)
})

app.get('/', (req, res) => {
    console.log(req.body);
    res.sendStatus(200)
})
;







