const { useContext } = require("react");
const { categoriesContext } = require("../providers/CategoriesProvider");
const { transactionsContext } = require("../../../TransactionsProvider");
const formatTitle = require("./formatTitle");

const GetSankeyEData = () => {

  const { categories } = useContext(categoriesContext);
  const { transactions } = useContext(transactionsContext)

    const data = [["From", "To", "Total"]]
  
    //get income transactions
    let incomeTotal = 0;
    // loop through each obj and push data to nodes/links
    transactions.forEach(obj => {
        if (obj.category === 'INCOME') {
          const title = formatTitle(obj.transaction_name)
          const value = Number(obj.transaction_amount) * -1
          incomeTotal += value;
          data.push([title, 'Income', value])
        }
    })

    let expensesTotal = 0;
    // loop through each obj and push data to nodes/links
    categories.forEach(obj => {
      if (obj.name !== 'INCOME') {
        const title = formatTitle(obj.name)
        const value = Number(obj.sum)
        expensesTotal += value;
        data.push(['Budget', title, value ])
      }
    });
    data.push(['Income', 'Budget', incomeTotal])
    
 

    //push remainder if positive number
    if (incomeTotal - expensesTotal > 0) {
      data.push(['Budget', 'Extra Funds for Plant Goals!', (incomeTotal - expensesTotal)])
    }

    console.log(data)
    return {data}

}

module.exports = GetSankeyEData;