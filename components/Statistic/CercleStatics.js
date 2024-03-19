import { View, Text,Image } from 'react-native'
import React from 'react'
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
  } from "react-native-chart-kit";
 
export default function CercleStatics() {
const allUsage=200 //data needed
const ecoUsage=180//data needed
const percent=ecoUsage/allUsage
const percentage = percent * 100

return (
    <View style={{ alignItems: 'center' }}>
 <View style={{ alignItems: 'center', justifyContent: 'center' }}>
    <ProgressChart data={[percent]} width={200} height={200} strokeWidth={16} radius={70} chartConfig={{ backgroundColor: 'hsl(222, 25%, 10%)', backgroundGradientFrom: 'hsl(222, 25%, 10%)', backgroundGradientTo: 'hsl(222, 25%, 10%)', decimalPlaces: 2, color: (opacity = 1) => `rgba(8, 135, 253, ${opacity})`, style: { borderRadius: 16 }, }} hideLegend={true} />
    <Text style={{ position: 'absolute', color: 'white', fontSize: 50, fontWeight: 'bold' }}>{percentage}%</Text>
</View>
    <Text style={{ color: 'white', fontSize: 22, fontWeight: 'bold', marginTop: 7 }}>eco mode</Text>
    <Image source={require('../../assets/oldpedal.png')} style={{ width: 50, height: 50, marginTop: 12 }} />
    <Image  source={require('../../assets/pedal.png')} style={{ width: 50, height: 50, marginTop: 15 }} />
   
  </View>
)
}