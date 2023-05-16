// load .env data into process.env
require('dotenv').config();

const Express = require('express');
const morgan = require('morgan');
const App = Express();
const BodyParser = require('body-parser');
const PORT = process.env.DB_PORT || 8080

// Express Configuration
App.use(BodyParser.urlencoded({ extended: false }));
App.use(BodyParser.json());
App.use(Express.static('public'));
App.use(morgan('dev'));


//import routers
const transactionsRoutes = require('./routes/transactions');
const plantgoalsRoutes = require('./routes/plantgoals');
const settingsRoutes = require('./routes/settings');
const gardenRoutes = require('./routes/garden');

//use routers
App.use('/transactions', transactionsRoutes);
App.use('/plantgoals', plantgoalsRoutes);
App.use('/settings', settingsRoutes);
App.use('/garden', gardenRoutes);


// homepage route (example below - change when working on homepage)
App.get('/', (req, res) => res.json({
  message: "Seems to work!",
}));

App.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Express seems to be listening on port ${PORT} so that's pretty good 👍`);
});
