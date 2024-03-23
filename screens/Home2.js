import { View, Text ,ImageBackground,SafeAreaView,StatusBar} from 'react-native'
import React from 'react'
import Health from '../components/Home2/Health'
import Bpm from '../components/Home2/Bpm'
import BloodPressure from '../components/Home2/BloodPressure'
import Ox from '../components/Home2/Ox'
import SwitchHealthStatus from '../components/Home2/SwitchHealthStatus'
import TopPage from '../components/Home1/TopPage'
export default function Home2() {
  return (
    <SafeAreaView style={{flex:1,width:'100%',}}> 
    <ImageBackground source={require('../assets/backGround.png')} style={{backgroundColor:"hsl(220, 28%, 10%)",flex:1,width:"100%" ,alignItems:"center",justifyContent:"space-between"}}>
<StatusBar hidden={true}  />

      <TopPage/>
      <Health/>
      <Text style={{color:"hsl(222, 100%, 63%)",fontSize:20,fontWeight:"bold",marginVertical:15}}>Health</Text>
      <View style={{width:"100%" ,marginBottom:20,alignItems:"center",justifyContent:"space-between",gap:10}}>
      <SwitchHealthStatus/>
      <Bpm/>
      <BloodPressure/>
      <Ox/>
      </View>
     


    
    </ImageBackground>
    </SafeAreaView>
  )
}