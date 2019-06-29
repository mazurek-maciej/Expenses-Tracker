const express = require('express');

const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const keys = require('./config/keys');

const PORT = process.env.PORT || 5000;
const usersRouter = require('./routes/api/users');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose
  .connect(keys.mongoURI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));
app.use('/users', usersRouter);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(`${__dirname  }/public/`));

  app.get(/.*/, (req, res) => res.sendFile(`${__dirname  }/public/index.html`));
}
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
