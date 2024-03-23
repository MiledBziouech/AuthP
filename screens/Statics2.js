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
import TopPage from '../components/Home1/TopPage'


export default function Statics2() {
  return (
    <SafeAreaView style={{flex:1,width:'100%',}}> 
 
 <ScrollView style={{width:"100%"}}  showsVerticalScrollIndicator={false}>
    
    <ImageBackground style={{justifyContent:"space-between",backgroundColor :"black",flex:1,width:'100%',alignItems:'center',gap:14}} source={require('../assets/backGround.png')} >
   
    <StatusBar hidden={true}  />
    <TopPage />
    <TopBar />
    <HeartRateBar />
    <HeartRateChart />
    <BloodPressureBar />
    <BloodPressure />
    <OxBar />
    <BloodOxygene />
    <ShareLog />
   
    </ImageBackground>
    </ScrollView>
    </SafeAreaView >
  )
}