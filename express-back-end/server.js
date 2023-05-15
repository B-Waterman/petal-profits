// load .env data into process.env
require('dotenv').config();

const Express = require('express');
const App = Express();
const BodyParser = require('body-parser');
const PORT = process.env.DB_PORT || 8080

//Plaid configuration
const { Configuration, PlaidApi, Products, PlaidEnvironments} = require('plaid');
const configuration = new Configuration({
  basePath: PlaidEnvironments['sandbox'],
  baseOptions: {
    headers: {
      'PLAID-CLIENT-ID': process.env.CLIENT_ID,
      'PLAID-SECRET': process.env.SECRET,
      // 'Plaid-Version': '2020-09-14',
    },
  },
});
const client = new PlaidApi(configuration);


// Express Configuration
App.use(BodyParser.urlencoded({ extended: false }));
App.use(BodyParser.json());
App.use(Express.static('public'));

const transactionsRoutes = require('./routes/transactions');
const plantgoalsRoutes = require('./routes/plantgoals');
const settingsRoutes = require('./routes/settings');

App.use('/transactions', transactionsRoutes);
App.use('/plantgoals', plantgoalsRoutes);
App.use('/settings', settingsRoutes);


// homepage route (example below - change when working on homepage)
App.get('/', (req, res) => res.json({
  message: "Seems to work!",
}));

//configure test user 
App.get('/sandbox/public_token/create', async (req, res) => {
  const institutionID = "ins_3"
  const initialProducts = ['balance', 'transactions']

  const publicTokenRequest = {
    institution_id: institutionID,
    initial_products: initialProducts,
  };
  try {
    const publicTokenResponse = await client.sandboxPublicTokenCreate(
      publicTokenRequest,
    );
    const publicToken = publicTokenResponse.data.public_token;
    // The generated public_token can now be exchanged
    // for an access_token
    const exchangeRequest = {
      public_token: publicToken,
    };
    const exchangeTokenResponse = await client.itemPublicTokenExchange(
      exchangeRequest,
    );
    const accessToken = exchangeTokenResponse.data.access_token;
    console.log(accessToken)
  } catch (error) {
    // handle error
    console.log(error)
  }
  
})

App.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Express seems to be listening on port ${PORT} so that's pretty good 👍`);
});
