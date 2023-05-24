import React, { useContext, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
// import { categoriesContext } from "./Budget/providers/CategoriesProvider"; ////tell Broooke about this line
import { formatTitle } from '../Budget/helpers/formatTitle'
import {Chart, ArcElement, Tooltip, Legend} from 'chart.js'
import { transactionsContext } from '../../hooks/TransactionsProvider';///tell Broooke about this line
Chart.register(ArcElement, Tooltip, Legend);

export default function DonutChart() {

  const [infoButton, setInfoButton] = useState(false)

  // const { categories } = useContext(categoriesContext); ///tell Broooke about this line

  const { categories } = useContext(transactionsContext) ///tell Broooke about this line

  const catLabels = [] //hold name of categories
  const catData = [] //hold total amount in each category

  categories.forEach(obj => {
    if (obj.name !== "INCOME") {
      const title = formatTitle(obj.name)
      const value = obj.sum
      catLabels.push(title)
      catData.push(value)
    }
  });


  const data = {
    labels: catLabels,
    datasets: [
        {
          label: 'Expenses',
          data: catData,
          backgroundColor: [
            'rgba(5, 100, 138, 0.8)',
            'rgba(0, 135, 161, 0.8)',
            'rgba(0, 170, 165, 0.8)',
            'rgba(62, 201, 150, 0.8)',
            'rgba(156, 229, 127, 0.8)',
            'rgba(249, 248, 113, 0.8)'
          ],
          borderColor: [
            'rgba(250, 163, 129, 0.5)',
            'rgba(250, 163, 129, 0.5)',
            'rgba(250, 163, 129, 0.5)',
            'rgba(250, 163, 129, 0.5)',
            'rgba(250, 163, 129, 0.5)',
            'rgba(250, 163, 129, 0.5)'
          ],
          borderWidth: 2,
        },
      ],

    };

    const textCenter = {
      id: 'textCenter',
      beforeDatasetsDraw(chart, args, pluginOptions) {
        const { ctx, data } = chart;
        ctx.save();
        ctx.font = 'bolder 20px sans-serif';
        ctx.fillStyle ='#05648A';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('Expenses', chart.getDatasetMeta(0).data[0].x, chart.getDatasetMeta(0).data[0].y);
      }
    };

  const options = {
    plugins: {
      tooltip: {
        callbacks: {
          label: function(context) {
            let label = context.dataset.label || '';

            if (label) {
                label += ': ';
            }
            if (context.parsed.y !== null) {
                label += new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(context.raw);
            }
            return label;
          },
        },
      },
      textCenter: textCenter
    },
  };

  return (
    <div className='chart'>
      <div className='donutchart'>
        <Doughnut data={data} options={options} plugins ={[textCenter]} />
      </div>
      <div className='info'>
          <button className='info-button'
            onMouseEnter={() => {setInfoButton(true)}}
            onMouseLeave={() => {setInfoButton(false)}}>i</button>
              {infoButton && (
            <p>This pie chart offers a comprehensive breakdown of your monthly expenses. Hover over a wedge to see the monthly transaction total for each corresponding category. By practicing the habit of monitoring your expenses, you can gain valuable insights into your spending habits and develop a clearer understanding of how your money is being allocated.</p>
              )}
        </div>
    </div>
  )

};

