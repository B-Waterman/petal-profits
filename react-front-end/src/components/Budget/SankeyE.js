import React, { useRef } from "react";
import { Chart } from 'react-google-charts'

export default function SankeyE() {
  const data = [
    ["From", "To", "Total"],
    ["Lighthouse Labs", "Income", 3300],
    ["Side Hustle", "Income", 1100],
    ['Income', 'Budget', 49.45],
    ['Income', 'Budget', 683.38],
    ['Income', 'Budget', 250.00],
    ['Income', 'Budget', 525.65],
    ['Income', 'Budget', 300.00],
    ['Income', 'Budget', 72.22],
    ['Income', 'Budget', 1268.70],
    ['Income', 'Budget', 189.46],
    ['Income', 'Budget', 954.86],
    ['Budget', 'PlantGoals', 954.86],
    ['Budget', 'ENTERTAINMENT', 49.45],
    ['Budget', 'FOOD_AND_DRINK', 683.38],
    ['Budget', 'GOVERNMENT_AND_NON_PROFIT', 250.00],
    ['Budget', 'HOME_IMPROVEMENT', 525.65],
    ['Budget', 'MEDICAL', 300.00],
    ['Budget', 'PERSONAL_CARE', 72.22],
    ['Budget', 'RENT_AND_UTILITIES', 1268.70],
    ['Budget', 'TRANSPORTATION', 189.46],
    ['Budget', 'TRAVEL', 954.86],
    ['Budget', 'Available for PlantGoals', 2000]
  ]

  const colors = ['#a6cee3', '#b2df8a', '#fb9a99', '#fdbf6f', '#cab2d6', '#ffff99', '#1f78b4', '#33a02c'];

  const options = {
    sankey: {
      node: {
        colors: colors,
        nodePadding: 20,
      },
      link: {
        colorMode: 'gradient',
        colors: colors
        },
      iterations: 450,
      interactivity: true, // Allows you to select nodes.
      labelPadding: 7,     // Horizontal distance between the label and the node.
      nodePadding: 15,     // Vertical distance between nodes.
      width: 2,            // Thickness of the node.
      colors: [
      '#a6cee3',         // Custom color palette for sankey nodes.
      '#1f78b4',         // Nodes will cycle through this palette
      '#b2df8a',         // giving each node its own color.
      '#33a02c'
      ]
    }
  };
  
  

  return (
    <div className="chart">
      <Chart
          chartType="Sankey"
          width="70"
          height="600px"
          data={data}
          options={options}
        />
    </div>
  )

}