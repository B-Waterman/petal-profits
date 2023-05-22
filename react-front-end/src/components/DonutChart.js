import React, { useContext } from 'react';
import { Doughnut } from 'react-chartjs-2';
// import { categoriesContext } from "./Budget/providers/CategoriesProvider"; ////tell Broooke about this line
import { formatTitle } from './Budget/helpers/formatTitle'
import {Chart, ArcElement, Tooltip, Legend} from 'chart.js'
import { transactionsContext } from '../TransactionsProvider';///tell Broooke about this line
Chart.register(ArcElement, Tooltip, Legend);

export default function DonutChart() {

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
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1,
        },
      ],

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
    },
  };

  // const textCenter = {
  //   id: 'textCenter',
  //   beforeDatasetsDraw(chart, args, pluginOptions) {
  //     const { ctx, data } = chart;
  //     ctx.save();
  //     ctx.font = 'bolder 50px sans-serif';
  //     ctx.fillStyle ='red';
  //     ctx.textAlign = 'center';
  //     ctx.textBaseline = 'middle';
  //     ctx.fillText('Expenses', chart.getDatasetMeta(0).data[0].x, chart.getDatasetMeta(0).data[0].y);
  //   }
  // }



  return (
    <Doughnut data={data} options={options}/> //plugins ={textCenter} />
  )

};

