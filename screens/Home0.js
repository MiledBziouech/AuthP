import { View, Text, Button,ImageBackground, SafeAreaView,StatusBar,  ScrollView} from 'react-native'
import React from 'react'
import BikeHealth from '../components/Home0/BikeHealth'
import Battery from '../components/Home0/Battery'
import SpeedMoter from '../components/Home0/SpeedMoter'
import SmallWeather from '../components/Home0/SmallWeather'
import SmallMap from '../components/Home0/SmallMap'
import ButtomBar from '../components/Home1/ButtomBar'
import TopPage from '../components/Home1/TopPage'

export default function Home0() {
 
  return (
    <SafeAreaView style={{flex:1,width:'100%',}}> 
 
  
    
    <ImageBackground style={{justifyContent:"space-between",backgroundColor :"black",flex:1,width:'100%',alignItems:'center'}} source={require('../assets/backGround.png')} >
      
    <StatusBar hidden={true}  />
    <TopPage/>
    <SpeedMoter/>
    <Battery/>
    <View style={{width:"90%",flexDirection:'row',justifyContent:"center"}}>
      <SmallWeather/>
      <BikeHealth/>
    </View>
    <SmallMap/>
    <ButtomBar/>
    
    </ImageBackground>
  
    </SafeAreaView >
   
  )
}
