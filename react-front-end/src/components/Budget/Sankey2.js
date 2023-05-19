import { ResponsiveSankey } from '@nivo/sankey'

export default function Sankey2() {
  // const data = {
  //   "nodes": [
  //     {
  //       "id": "John",
  //       "nodeColor": "hsl(179, 70%, 50%)"
  //     },
  //     {
  //       "id": "Raoul",
  //       "nodeColor": "hsl(147, 70%, 50%)"
  //     },
  //     {
  //       "id": "Jane",
  //       "nodeColor": "hsl(235, 70%, 50%)"
  //     },
  //     {
  //       "id": "Marcel",
  //       "nodeColor": "hsl(352, 70%, 50%)"
  //     },
  //     {
  //       "id": "Ibrahim",
  //       "nodeColor": "hsl(166, 70%, 50%)"
  //     },
  //     {
  //       "id": "Junko",
  //       "nodeColor": "hsl(70, 70%, 50%)"
  //     }
  //   ],
  //   "links": [
  //     {
  //       "source": "Junko",
  //       "target": "Ibrahim",
  //       "value": 41
  //     },
  //     {
  //       "source": "Junko",
  //       "target": "John",
  //       "value": 97
  //     },
  //     {
  //       "source": "Junko",
  //       "target": "Jane",
  //       "value": 127
  //     },
  //     {
  //       "source": "Junko",
  //       "target": "Raoul",
  //       "value": 174
  //     },
  //     {
  //       "source": "John",
  //       "target": "Marcel",
  //       "value": 187
  //     },
  //     {
  //       "source": "John",
  //       "target": "Ibrahim",
  //       "value": 8
  //     },
  //     {
  //       "source": "John",
  //       "target": "Raoul",
  //       "value": 68
  //     },
  //     {
  //       "source": "Marcel",
  //       "target": "Raoul",
  //       "value": 120
  //     },
  //     {
  //       "source": "Ibrahim",
  //       "target": "Marcel",
  //       "value": 103
  //     },
  //     {
  //       "source": "Ibrahim",
  //       "target": "Jane",
  //       "value": 96
  //     },
  //     {
  //       "source": "Jane",
  //       "target": "Raoul",
  //       "value": 17
  //     }
  //   ]
  // }

  const data=  {
    nodes: [
      {id: 'Income', nodeColor: "hsl(179, 70%, 50%)"},
      {id: 'Income2', nodeColor: "hsl(179, 70%, 50%)"},
      {id: 'Income3', nodeColor: "hsl(179, 70%, 50%)"},
      {id: 'Budget', nodeColor: "hsl(179, 70%, 50%)"},
      {id: 'ENTERTAINMENT', nodeColor: "hsl(179, 70%, 50%)"},
      {id: 'FOOD_AND_DRINK', nodeColor: "hsl(179, 70%, 50%)"},
      {id: 'GOVERNMENT_AND_NON_PROFIT', nodeColor: "hsl(179, 70%, 50%)"},
      {id: 'HOME_IMPROVEMENT', nodeColor: "hsl(179, 70%, 50%)"},
      {id: 'Plant Goals', nodeColor: "hsl(179, 70%, 50%)"},
      {id: 'Emergency Fund', nodeColor: "hsl(179, 70%, 50%)"},
      {id: 'Trip', nodeColor: "hsl(179, 70%, 50%)"},
      {id: 'New Car', nodeColor: "hsl(179, 70%, 50%)"}
    ],
    links: [
      {source: 'Income', target: 'Budget', value: 120},
      // {source: 'Income', target: 'Plant Goals', value: 50},
      {source: 'Budget', target: 'ENTERTAINMENT', value: 20},
      {source: 'Budget', target:'FOOD_AND_DRINK', value: 20},
      {source: 'Budget', target: 'GOVERNMENT_AND_NON_PROFIT', value: 20},
      {source: 'Budget', target: 'HOME_IMPROVEMENT', value: 20},
      {source: 'Budget', target: 'Plant Goals', value:40},
      {source: 'Plant Goals', target: "Emergency Fund", value: 20},
      {source: 'Plant Goals', target: 'Trip', value: 20}

      // {source: 'ENTERTAINMENT', target:'Budget', value: 20},
      // {source: 'FOOD_AND_DRINK', target:'Budget', value: 20},
      // {source: 'GOVERNMENT_AND_NON_PROFIT', target:'Budget' , value: 20},
      // {source: 'HOME_IMPROVEMENT', target:'Budget', value: 20},
      // {source: 'Plant Goals', target: 'Budget', value: 50},
      // {source: "Emergency Fund", target: 'Plant Goals', value: 20},
      // {source: 'Trip', target: 'Plant Goals', value: 20},
      // {source: 'New Car', target: 'Plant Goals', value: 20},
      // {source: 'Budget', target: 'Income3', value: 50},
      // {source: 'Budget', target: 'Income', value: 40},
      // {source: 'Budget', target: 'Income2', value: 10},
  ]

  
};
  return(
  // <div style={{ height: 750 }}>
    <ResponsiveSankey 
    data={data}
        margin={{ top: 40, right: 200, bottom: 40, left: 150 }}
        valueFormat=" <-$1,.0f"
        sort='descending'
        colors={{ scheme: 'category10' }}
        nodeOpacity={0.75}
        nodeHoverOthersOpacity={0.5}
        nodeThickness={5}
        nodeSpacing={50}
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
        linkContract={3}
        enableLinkGradient={true}
        enableLabels={false}
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
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'column',
                translateX: 60,
                itemWidth: 100,
                itemHeight: 20,
                itemDirection: 'right-to-left',
                itemsSpacing: 2,
                itemTextColor: '#999',
                symbolSize: 14,
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemTextColor: '#000'
                        }
                    }
                ]
            }
        ]}
/>
  // </div>
  )
}