import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";
import { useContext } from "react";
import { categoriesContext } from "./providers/CategoriesProvider";
import './BarChart.scss'

export default function BarChart(props) {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  const { categories } = useContext(categoriesContext);

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
    }
  };
  
  const labels = [`${props.month} Cash Flow`];
  
  const data = {
    labels,
    datasets: [
      {
        label: "Income",
        data: [incomeTotal],
        backgroundColor: "rgb(106, 184, 102)"
      },
      {
        label: "Expenses",
        data: [expensesTotal],
        backgroundColor: "rgb(214, 39, 40)"
      }
    ]
  };

  return (
    <div id="chart">
      <Bar options={options} data={data} />
    </div>
  )
}