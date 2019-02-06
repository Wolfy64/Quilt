require('custom-env').env('production');
require('./models/User');
require('./services/passport');
const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const path = require('path');
const app = express();

mongoose.Promise = global.Promise;
mongoose
  .connect(
    process.env.mongoURI,
    { useNewUrlParser: true }
  )
  .then(() => console.log('Connected to Mango'));

app.use(express.json());
app.use(express.urlencoded());
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [process.env.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);
require('./routes/faceRoute')(app);

if (process.env.NODE_ENV === 'production') {
  // Express will serve up production assets
  // like our main.js file, or main.css file!
  app.use(express.static('client/build'));

  // Express will serve up the index.html file
  // if it doesn't recognize the route
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

app.listen(process.env.port, () =>
  console.log(`Express server listening on localhost: ${process.env.port}`)
);
