import { View, Text ,} from 'react-native'
import React from 'react'
import TopBar from '../components/Statistic/TopBar'
import CercleStatics from '../components/Statistic/CercleStatics'
import CercleStatic2 from '../components/Statistic/CercleStatic2'
export default function Statistic1() {
  return (
    <View  style={{backgroundColor:'hsl(222, 25%, 10%)',flex:1,width:'100%'}}>
       <CercleStatic2 />
    </View>
  )
}