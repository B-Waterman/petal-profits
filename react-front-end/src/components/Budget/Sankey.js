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
    // ['Budget', 'PlantGoals', 2000],
    ['PlantGoals', 'Girls Trip', 600],
    ['PlantGoals', 'Emergency Fund', 400],
    ['PlantGoals', 'Pay off Student Loan', 400],
  ]

  // const nodes = [{name: 'Income'}, {name: 'Budget'}, {name: 'ENTERTAINMENT'}, {name: 'FOOD_AND_DRINK'}, {name: 'GOVERNMENT_AND_NON_PROFIT'}, {name: 'HOME_IMPROVEMENT'},{name: 'PlantsGoals'}, {name: 'Emergency Fund'}, {name: 'Trip'}];
  // const links = [
  //   {source: 0, target: 1, value: 50},
  //   {source: 0, target: 6, value: 50},
  //   {source: 1, target: 2, value: 20},
  //   {source: 1, target: 3, value: 20},
  //   {source: 1, target: 4, value: 20},
  //   {source: 1, target: 5, value: 20},
  //   {source: 6, target: 7, value: 20},
  //   {source: 6, target: 8, value: 20, opacity: 100}
  // ]
  

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
  


  // return (

  //   <Sankey
  //     nodes={nodes}
  //     links={links}
  //     width={600}
  //     height={600}
  //     nodeWidth={5}
      
  //   />
  // )

}