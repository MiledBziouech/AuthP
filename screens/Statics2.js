import { View, Text } from 'react-native'
import React from 'react'
import TopBar from '../components/Statistic2/TopBar'
import ShareLog from '../components/Statistic2/ShareLog'
import HeartRateChart from '../components/Statistic2/HeartRateChart'
import BloodPressure from '../components/Statistic2/BloodPressure'
import BloodOxygene from '../components/Statistic2/BloodOxygene'
export default function Statics2() {
  return (
    <View style={{justifyContent:"center",alignItems:'center',flex:1,width:"100%"}}>
     <BloodPressure />
     <BloodOxygene />
    </View>
  )
}