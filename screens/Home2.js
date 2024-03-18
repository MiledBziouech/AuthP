import { View, Text } from 'react-native'
import React from 'react'
import Health from '../components/Home2/Health'
import Bpm from '../components/Home2/Bpm'
import BloodPressure from '../components/Home2/BloodPressure'
import Ox from '../components/Home2/Ox'
export default function Home2() {
  return (
    <View  style={{backgroundColor:"hsl(220, 28%, 10%)",flex:1,width:"100%" ,alignItems:"center",justifyContent:"center"}}>
   <Ox/>

    
    </View>
  )
}