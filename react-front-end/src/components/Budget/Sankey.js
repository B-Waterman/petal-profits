import { ResponsiveSankey } from '@nivo/sankey'
import { useEffect, useContext, useState } from 'react';
import { categoriesContext } from './providers/CategoriesProvider';
import { transactionsContext } from '../../TransactionsProvider';
import { formatTitle } from './helpers/formatTitle';


export default function Sankey() {

const [data, setData] = useState(null);
const { categories } = useContext(categoriesContext);
const { transactions } = useContext(transactionsContext)

    useEffect(() => {
        try {
          // Code that triggers the resize event or may throw the error
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
              nodes.push({id: 'Extra Funds for Plant Goals!'})
              links.push({source: 'Budget', target: 'Extra Funds for Plant Goals!', value: incomeTotal - expensesTotal})
            }

            console.log(nodes)
            setData({nodes: nodes, links: links})


        } catch (error) {
          console.error(error);
        }
      }, []);



      return(
        <div id="test">
            <h1>Test </h1>
            <ResponsiveSankey
            data={data}
                margin={{ top: 20, right: 220, bottom: 20, left: 220 }}
                valueFormat=" <-$1,.0f"
                sort='auto'
                colors={{ scheme: 'category10' }}
                nodeOpacity={0.75}
                nodeHoverOthersOpacity={0.5}
                nodeThickness={8}
                nodeSpacing={40}
                nodeBorderWidth={0}
                nodeBorderColor={{
                    from: 'color',
                    modifiers: [
                        [
                            'darker',
                            0.8
                        ]
                    ]
                }}
                nodeBorderRadius={2}
                linkOpacity={0.35}
                linkHoverOthersOpacity={0.25}
                linkContract={2}
                enableLinkGradient={true}
                enableLabels={true}
                labelPosition="outside"
                labelPadding={27}
                labelTextColor={{
                    from: 'color',
                    modifiers: [
                        [
                            'darker',
                            '1'
                        ]
                    ]
                }}
            />
        </div>
    )

}
