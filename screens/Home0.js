import { View, Text, Button,ImageBackground, SafeAreaView,StatusBar,  ScrollView} from 'react-native'
import React from 'react'
import BikeHealth from '../components/Home0/BikeHealth'
import Battery from '../components/Home0/Battery'
import SpeedMoter from '../components/Home0/SpeedMoter'
export default function Home0() {
  return (
    <SafeAreaView style={{flex:1,width:'100%',}}> 
 
  
    
    <ImageBackground style={{justifyContent:"center",backgroundColor :"black",flex:1,width:'100%',alignItems:'center'}} source={require('../assets/backGround.png')} >
      
    <StatusBar hidden={true}  />
    <SpeedMoter/>

    
    </ImageBackground>
  
    </SafeAreaView >
   
  )
}