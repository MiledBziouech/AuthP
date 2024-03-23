import { View, Text } from 'react-native'
import React from 'react'
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
  } from "react-native-chart-kit";


export default function BloodPressure() {
    const data = {
        labels: ['Mon', 'Tue', 'Wed', 'Tru', 'Fri', 'Sun'],
        datasets: [
          {
            data: [(92, 71), (103, 80), (111, 61), (105, 68), (114, 64), (105, 74)], // Random blood pressure values
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