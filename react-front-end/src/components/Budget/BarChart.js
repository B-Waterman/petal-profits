import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";
import { useContext } from "react";
// import { categoriesContext } from "./providers/CategoriesProvider";
import './BarChart.scss'
import { transactionsContext } from "../../TransactionsProvider";

export default function BarChart(props) {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  // const { categories } = useContext(categoriesContext);
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
      }
    },
    tooltip: {
      callbacks: {
        label: (context) => `$${context.formattedValue}`, // Add the dollar sign to the tooltip label
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
        backgroundColor: "rgb(106, 184, 102)"
      },
      {
        label: "Spent",
        data: [expensesTotal],
        backgroundColor: "rgba(205, 32, 32, 0.966)"
      }
    ]
  };

  return (
    <div id="chart">
      <Bar 
        options={options}
        data={data}
      />
    </div>
  )
}