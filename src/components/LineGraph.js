import React, { Component}  from 'react';
import { render } from 'react-dom'
import { ResponsiveLine } from '@nivo/line'


// make sure parent container have a defined height when using responsive component,
// otherwise height will be 0 and no chart will be rendered.
// website examples showcase many properties, you'll often use just a few of them.



class LineGraph extends Component{
  render(){
    return(
      <ResponsiveLine
          data={ this.props.graphData }
          margin={{
              "top": 50,
              "right": 50,
              "bottom": 100,
              "left": 50
          }}
          minY="auto"
          stacked={true}
          curve="monotoneX"
          axisBottom={{
              "orient": "bottom",
              "tickSize": 0,
              "tickPadding": 20,
              "tickRotation": 0,
          }}
          axisLeft={{
              "orient": "left",
              "tickSize": 0,
              "tickPadding": 20,
              "tickRotation": 0,

          }}
          colors="d310"
          lineWidth={6}
          enableGridX={false}
          dotSize={10}
          dotColor="inherit:darker(0.3)"
          dotBorderWidth={2}
          dotBorderColor="#ffffff"
          enableDotLabel={true}
          dotLabel="y"
          dotLabelYOffset={-12}
          areaOpacity={0.55}
          animate={true}
          motionStiffness={90}
          motionDamping={15}
      />

      
    )
  }
}

export default LineGraph;