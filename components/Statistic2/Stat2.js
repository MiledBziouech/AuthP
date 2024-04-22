import { View, Text, Button,ImageBackground, SafeAreaView,StatusBar,  ScrollView} from 'react-native'
import React from 'react'
import TopBar from './TopBar'
import ShareLog from './ShareLog'
import HeartRateChart from './HeartRateChart'
import BloodPressure from './BloodPressure'
import BloodOxygene from './BloodOxygene'
import HeartRateBar from './HeartRateBar'
import BloodPressureBar from './BloodPressureBar'
import OxBar from './OxBar'




export default function Stat2() {
  const data = ['Component 1', 'Component 2', 'Component 3']; // Example data
  return (
    <View style={{flex:1,width:'100%',alignItems:"center",justifyContent:"center"}}> 
 

    
 
   


    <ScrollView style={{width:"100%" }}  showsVerticalScrollIndicator={false} contentContainerStyle={{  }}>


      <View style={{marginVertical:45 ,alignItems:"center"}}>
          <HeartRateBar />
          <HeartRateChart />
      </View>
      <View style={{marginVertical:45,alignItems:"center"}}>
          <BloodPressureBar />
          <BloodPressure />
      </View>
      <View style={{marginVertical:45,alignItems:"center"}}>
          <OxBar />
          <BloodOxygene />
      </View>
    
    </ScrollView>
    <ShareLog />

    
   
    
  
    </View >
  )
}