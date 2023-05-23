import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";
import { useContext } from "react";
import './BarChart.scss'
import { transactionsContext } from "../../hooks/TransactionsProvider";

export default function BarChart(props) {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );


  const { categories } = useContext(transactionsContext)

  let incomeTotal = 0;
  let expensesTotal = 0;
  categories.forEach(obj => {
    if (obj.name === "INCOME") {
      incomeTotal = Number(obj.sum) * -1;
    } else {
      expensesTotal += Number(obj.sum)
    }

  });

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top"

      },
      title: {
        display: false,
      },
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
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: (value) => `$${value.toLocaleString()}`, // Add the dollar sign to each tick value
          precision: 0,
        },
      },
    }
  };


  const labels = [`${props.month} Cash Flow`];

  const data = {
    labels,
    datasets: [
      {
        label: "Earned",
        data: [incomeTotal],
        backgroundColor: "#A8DCB9"
      },
      {
        label: "Spent",
        data: [expensesTotal],
        backgroundColor: "#FAA381"
      }
    ]
  };

  return (
    <div id="bar-chart">
      <Bar
        options={options}
        data={data}
      />
    </div>
  )
}
