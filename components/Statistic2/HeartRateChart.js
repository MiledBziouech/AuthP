import { View, Text } from 'react-native'
import React from 'react'

import { LineChart } from 'react-native-chart-kit'  

export default function HeartRateChart() {
    const data = {
        labels: ['Mon', 'Tue', 'Wed', 'Tru', 'Fri', 'Sun'],
        datasets: [
          {
            data: [90, 8, 7, 9, 70, 0], // Random heart rate values
            
          },
        ],
      };
      
      const chartConfig = {
       
        backgroundGradientFromOpacity: 0,
        backgroundGradientToOpacity: 0,
       
        color: (opacity = 1) => "hsl(205, 100%, 53%)",
      
        barPercentage: 0.5,
      };
      
      
  return (
    <View style={{justifyContent:"center",alignItems:'center',flex:1,width:"100%"}}>

      <LineChart
    data={data}
    width={390}
    height={271}
    chartConfig={chartConfig}
    bezier
    withDots={false}
    withShadow={false}
    withInnerLines={false}
    withOuterLines={false}
    withHorizontalLabels = {false}
  
  />
    </View>
  )
}