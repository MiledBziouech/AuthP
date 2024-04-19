import { View, Text ,ImageBackground,SafeAreaView,StatusBar} from 'react-native'
import React from 'react'
import Switches from '../components/Setteings/Switches'
import ColorPicker from '../components/Setteings/ColorPicker'
import LightInten from '../components/Setteings/LightInten'
import ProductId from '../components/Setteings/ProductId'
import SetFingerprint from '../components/Setteings/SetFingerprint'
import Hcms from '../components/Setteings/Hcms'
import Updates from '../components/Setteings/Updates'
import TopPage from '../components/Home1/TopPage'
import MotorPower from '../components/Setteings/MotorPower'
import { useIsFocused } from '@react-navigation/native'
export default function Settings() {
  let color = "rgba(2, 72, 231, 1)"
  
  return (
    <SafeAreaView style={{flex:1,width:'100%',}}> 
    <ImageBackground source={require('../assets/backGround.png')} style={{backgroundColor:"hsl(220, 28%, 10%)",flex:1,width:"100%" ,alignItems:"center",justifyContent:"center",gap:8}}>

    <StatusBar  hidden={true} backgroundColor="hsl(220, 28%, 10%)" />
    <TopPage  color={ color}/>
    <View style={{flexDirection:'row' ,width:'95%'}}>
      
          <View style={{width:'50%',gap:10,}}>
                <LightInten />
                <MotorPower />
          </View>
    </View>
    <ProductId />
    <SetFingerprint />
    <Hcms />
    <Updates />
    <Switches />
    







    
    </ImageBackground>
    </SafeAreaView>
  )
}