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
const allUsage=100 //data needed
const ecoUsage=38//data needed
const percent=ecoUsage/allUsage
const percentage = percent * 100

return (
    <View style={{ alignItems: 'center',flex:1 }}>
 <View style={{ alignItems: 'center', justifyContent: 'center' }}>
    <ProgressChart data={[percent]} width={150} height={150} strokeWidth={15} radius={60} chartConfig={{ backgroundColor: 'hsl(222, 25%, 10%)', backgroundGradientFrom: 'hsl(222, 25%, 10%)', backgroundGradientTo: 'hsl(222, 25%, 10%)', decimalPlaces: 2, color: (opacity = 1) => `rgba(8, 135, 253, ${opacity})`, style: { borderRadius: 16 }, }} hideLegend={true} />
    <Text style={{ position: 'absolute', color: 'white', fontSize: 40, fontWeight: 'bold' }}>{percentage}%</Text>
</View>
    <Text style={{ color: 'white', fontSize: 22, fontWeight: 'bold', marginTop: 7 }}>eco mode</Text>
    <Image source={require('../../assets/oldpedal.png')} style={{ width: 50, height: 50, marginTop: 12 }} />
  </View>
)
}