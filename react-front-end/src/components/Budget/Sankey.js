import React from "react";
import { Chart } from 'react-google-charts'

export default function Sankey() {
  const data = [
    ["From", "To", "Total"],
    ["Lighthouse Labs", "Budget", 3000],
    ["Lighthouse Labs", "Budget", 3000],
    ["Etsy", "Budget", 500],
    ['Budget', 'ENTERTAINMENT', 49.45],
    ['Budget', 'FOOD_AND_DRINK', 683.38],
    ['Budget', 'GOVERNMENT_AND_NON_PROFIT', 250.00],
    ['Budget', 'HOME_IMPROVEMENT', 525.65],
    ['Budget', 'MEDICAL', 300.00],
    ['Budget', 'PERSONAL_CARE', 72.22],
    ['Budget', 'RENT_AND_UTILITIES', 1268.70],
    ['Budget', 'TRANSPORTATION', 189.46],
    ['Budget', 'TRAVEL', 954.86],
    ['Budget', 'PlantGoals', 2000],
    ['PlantGoals', 'Girls Trip', 600],
    ['PlantGoals', 'Emergency Fund', 400],
    ['PlantGoals', 'Pay off Student Loan', 400],
  ]

  const colors = ['#a6cee3', '#b2df8a', '#fb9a99', '#fdbf6f', '#cab2d6', '#ffff99', '#1f78b4', '#33a02c'];

  const options = {
    sankey: {
      node: {
        colors: colors,
        nodePadding: 25
      },
      link: {
        colorMode: 'gradient',
        colors: colors
        }
    }
  };
  

  return (
    <div className="chart">
      <Chart
          chartType="Sankey"
          width="700"
          height="600px"
          data={data}
          options={options}
        />
    </div>
  )
}