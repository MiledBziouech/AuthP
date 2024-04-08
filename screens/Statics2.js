import { View, Text, Button,ImageBackground, SafeAreaView,StatusBar,  ScrollView} from 'react-native'
import React from 'react'
import TopBar from '../components/Statistic2/TopBar'
import ShareLog from '../components/Statistic2/ShareLog'
import HeartRateChart from '../components/Statistic2/HeartRateChart'
import BloodPressure from '../components/Statistic2/BloodPressure'
import BloodOxygene from '../components/Statistic2/BloodOxygene'
import HeartRateBar from '../components/Statistic2/HeartRateBar'
import BloodPressureBar from '../components/Statistic2/BloodPressureBar'
import OxBar from '../components/Statistic2/OxBar'
import TopPage from '../components/Statistic/TopPage'
import ButtomBar from '../components/Home1/ButtomBar'


export default function Statics2() {
  const data = ['Component 1', 'Component 2', 'Component 3']; // Example data
  return (
    <SafeAreaView style={{flex:1,width:'100%',}}> 
 

    
    <ImageBackground style={{justifyContent:"space-between",backgroundColor :"black",flex:1,width:'100%',alignItems:'center',gap:14}} source={require('../assets/backGround.png')} >
   
    <StatusBar hidden={true}  />
    <TopPage />

    <TopBar />
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
    <ButtomBar />
    
   
    </ImageBackground>
  
    </SafeAreaView >
  )
}