// load .env data into process.env
require('dotenv').config();

const Express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const App = Express();
const BodyParser = require('body-parser');
const PORT = 8080

//Plaid configuration
let ACCESS_TOKEN = null;

const { Configuration, PlaidApi, PlaidEnvironments} = require('plaid');
const configuration = new Configuration({
  basePath: PlaidEnvironments.sandbox,
  baseOptions: {
    headers: {
      'PLAID-CLIENT-ID': process.env.CLIENT_ID,
      'PLAID-SECRET': process.env.SECRET,
    },
  },
});
const client = new PlaidApi(configuration);



// Express Configuration
App.use(BodyParser.urlencoded({ extended: false }));
App.use(BodyParser.json());
App.use(Express.static('public'));
App.use(morgan('dev'));
App.use(cors());


//import routers
// const transactionsRoutes = require('./routes/transactions');
// const plantgoalsRoutes = require('./routes/plantgoals');
// const accountsRoutes = require('./routes/account');
// const gardenRoutes = require('./routes/garden');
const apiRoutes = require('./routes/api')

//use routers
// App.use('/transactions', transactionsRoutes);
// App.use('/plantgoals', plantgoalsRoutes);
// App.use('/account', accountsRoutes);
// App.use('/garden', gardenRoutes);
App.use('./api', apiRoutes)


// homepage route (example below - change when working on homepage)
App.get('/', (req, res) => res.json({
  message: "Seems to work!",
}));


//Use if needing to create test access token 
// App.get('/login', async (req, res) => {
//   const institutionID = "ins_3"
//   const initialProducts = ['transactions']

//   const publicTokenRequest = {
//     institution_id: institutionID,
//     initial_products: initialProducts,
//   };
//   try {
//     const publicTokenResponse = await client.sandboxPublicTokenCreate(
//       publicTokenRequest,
//     );
//     const publicToken = publicTokenResponse.data.public_token;
//     // The generated public_token can now be exchanged
//     // for an access_token
//     const exchangeRequest = {
//       public_token: publicToken,
//     };
//     const exchangeTokenResponse = await client.itemPublicTokenExchange(
//       exchangeRequest,
//     );
//     ACCESS_TOKEN = exchangeTokenResponse.data.access_token;
//     res.json({message: "access token created and received!"})
//     console.log(ACCESS_TOKEN)
//   } catch (error) {
//     console.log(error)
//   }
  
// })

App.get('/get-plaid-transactions', (req, res) => {
  Promise.resolve()
    .then(async function () {
      //pull transactions from last 30 days
      const configs = {
        access_token: process.env.ACCESS_TOKEN, //using this for consistent data
        start_date: '2023-01-01',
        end_date: '2023-05-14',
        options: { include_personal_finance_category: true }
      }
      const transactionsResponse = await client.transactionsGet(configs)
      res.json(transactionsResponse.data)
    })
    .catch(error => console.log('AHH', error))
})



App.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Express seems to be listening on port ${PORT} so that's pretty good 👍`);
});
