// load .env data into process.env
require('dotenv').config();

const Express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const App = Express();
const BodyParser = require('body-parser');
const PORT = 8080 // || process.env.DB_PORT


// Express Configuration
App.use(BodyParser.urlencoded({ extended: false }));
App.use(BodyParser.json());
App.use(Express.static('public'));
App.use(morgan('dev'));
App.use(cors());

//import routers
const apiRoutes = require('./routes/api')

//use routers
App.use('/api', apiRoutes)

// homepage route (example below - change when working on homepage)
App.get('/', (req, res) => res.json({
  message: "Seems to work!",
}));


App.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Express seems to be listening on port ${PORT} so that's pretty good 👍`);
});
