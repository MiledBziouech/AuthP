import { View, Text,SafeAreaView,ImageBackground,StatusBar } from 'react-native'
import React from 'react'
import Stop from '../../components/PauseStopSuccess/Stop'
import Success from '../../components/PauseStopSuccess/Success'
import Pause from '../../components/PauseStopSuccess/Pause'
import TopPage from '../../components/Home1/TopPage'
export default function StopScreen() {
  return (
    <SafeAreaView style={{flex:1,width:'100%',}}> 

    <ImageBackground style={{justifyContent:"space-between",backgroundColor :"black",flex:1,width:'100%',alignItems:'center'}} source={require('../../assets/backGround.png')} >
      
    <StatusBar hidden={true}  />


    <TopPage/>

    <View style={{flex:1,width:"100%",alignItems:"center",justifyContent :"center"}}>
        <Success/>
     </View>
 
   
    </ImageBackground>
  
    </SafeAreaView >
   
  )
}