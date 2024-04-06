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
    <View style={{ alignItems: 'center',flex:1,justifyContent:"center" }}>
 <View style={{ alignItems: 'center', justifyContent: 'center' }}>
    <ProgressChart data={[percent]} width={130} height={130} strokeWidth={10} radius={58} chartConfig={{ backgroundColor: 'rgba(28, 33, 45, 0.8)', backgroundGradientFrom: 'rgba(28, 33, 45, 0.8)', backgroundGradientTo: 'rgba(28, 33, 45, 0.8)', decimalPlaces: 2, color: (opacity = 1) => `rgba(8, 135, 253, ${opacity})`, style: { borderRadius: 16 }, }} hideLegend={true} />
    <Text style={{ position: 'absolute', color: 'white', fontSize: 36, fontWeight: 'bold' ,fontFamily  :"Montserrat" }}>{percentage}%</Text>
</View>
    <Text style={{ color: 'white', fontSize: 22, fontWeight: 'bold', marginTop: 7, fontFamily: 'nicomoji' }}>eco mode</Text>
    <Image source={require('../../assets/oldpedal.png')} style={{ width: 40, height: 40, marginTop: 12 }} />
    
  </View>
)
}