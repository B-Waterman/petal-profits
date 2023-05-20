import { ResponsiveSankey } from '@nivo/sankey'
import GetSankeyData from './helpers/getSankeyData';

export default function Sankey() {

    const data = GetSankeyData()
    console.log(GetSankeyData())
    
      return(
            <ResponsiveSankey 
            data={data}
                margin={{ top: 20, right: 250, bottom: 20, left: 180 }}
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
    )

}