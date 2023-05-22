const Express = require('express');
const router = Express.Router();
//
// Stretch - if we have time to live connect with Plaid's API
//


// //Plaid configuration
// let ACCESS_TOKEN = null;
// const { Configuration, PlaidApi, PlaidEnvironments} = require('plaid');
// const configuration = new Configuration({
//   basePath: PlaidEnvironments.sandbox,
//   baseOptions: {
//     headers: {
//       'PLAID-CLIENT-ID': process.env.CLIENT_ID,
//       'PLAID-SECRET': process.env.SECRET,
//     },
//   },
// });
// const client = new PlaidApi(configuration);


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


// router.get('/transactions', (req, res) => {
//   Promise.resolve()
//     .then(async function () {
//       //pull transactions from last 30 days
//       const configs = {
//         access_token: process.env.ACCESS_TOKEN, //using this for consistent data
//         start_date: '2023-01-01',
//         end_date: '2023-05-14',
//         options: { include_personal_finance_category: true }
//       }
//       const transactionsResponse = await client.transactionsGet(configs)
//       res.json(transactionsResponse.data)
//     })
//     .catch(error => console.log(error))
// })
