const { useContext } = require("react");
const { categoriesContext } = require("../providers/CategoriesProvider");
const { transactionsContext } = require("../../../TransactionsProvider");
const formatTitle = require("./formatTitle");

const GetSankeyData = () => {

  const { categories } = useContext(categoriesContext);
  const { transactions } = useContext(transactionsContext)

    const nodes = [{id: 'Budget', key: 0}]
    const links = []
    // get expenses
    let expensesTotal = 0;
    const expenses = categories.filter(obj => obj.name !== 'INCOME')
    // loop through each obj and push data to nodes/links
    expenses.forEach(obj => {
        const title = formatTitle(obj.name)
        const value = Number(obj.sum)
        expensesTotal += value;
        nodes.push({id: title})
        links.push({source: 'Budget', target: title, value: value})
    });
    
    //get income transactions
    let incomeTotal = 0;
    const income = transactions.filter(obj => obj.category === 'INCOME')
    // loop through each obj and push data to nodes/links
    income.forEach(obj => {
        const title = formatTitle(obj.transaction_name)
        const value = Number(obj.transaction_amount) * -1
        incomeTotal += value;
        nodes.push({id: title})
        links.push({source: title, target: 'Budget', value: value})
    });

    //push remainder if positive number
    if (incomeTotal - expensesTotal > 0) {
      nodes.push({id: 'Extra Funds Available for Plant Goals!'})
      links.push({source: 'Budget', target: 'Extra Funds Available for Plant Goals!', value: incomeTotal - expensesTotal})
    }

    return {nodes: nodes, links: links}

}

module.exports = GetSankeyData;

//example data
//   const data=  {
//     nodes: [
//       {id: 'Etsy'},
//       {id: 'Budget'},
//       {id: 'ENTERTAINMENT'},
//       {id: 'FOOD_AND_DRINK'},
//       {id: 'GOVERNMENT_AND_NON_PROFIT'},
//       {id: 'HOME_IMPROVEMENT'},
//       {id: 'TRANSPORTATION'},
//       {id: 'RENT_AND_UTILITIES'},
//       {id: 'Available for Plant Goals'},
//       {id: 'Lighthouse Labs'}
//     ],
//     links: [
//       {source: 'Lighthouse Labs', target: 'Budget', value: 100},
//       {source: 'Lighthouse Labs', target: 'Budget', value: 100},
//       {source: 'Etsy', target: 'Budget', value: 70},
//       {source: 'Budget', target: 'ENTERTAINMENT', value: 20},
//       {source: 'Budget', target: 'TRANSPORTATION', value: 20},
//       {source: 'Budget', target:'FOOD_AND_DRINK', value: 68},
//       {source: 'Budget', target: 'GOVERNMENT_AND_NON_PROFIT', value: 20},
//       {source: 'Budget', target: 'HOME_IMPROVEMENT', value: 20},
//       {source: 'Budget', target: 'RENT_AND_UTILITIES', value: 90},
//       {source: 'Budget', target: 'Available for Plant Goals', value:40},
//     ]
// };