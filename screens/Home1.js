import { View, Text, Button,ImageBackground} from 'react-native'
import React from 'react'
import TopPage from '../components/Home1/TopPage'
import Kmcercle from '../components/Home1/Kmcercle'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Light from '../components/Home1/Light';
import TotaleDistance from '../components/Home1/TotaleDistance'
import Battery from '../components/Home1/Battery'
import SwitchStatusHealth from '../components/Home1/SwitchStatusHealth';
import ButtomBar from '../components/Home1/ButtomBar';
export default function Home1() {
  return (
    <ImageBackground style={{justifyContent:"space-between",backgroundColor :"black",flex:1,width:'100%',alignItems:'center'}} source={require('../assets/backGround.png')} >
      <TopPage />
      <Kmcercle/>  

      <Text style={{color:"hsl(222, 100%, 63%)",fontSize:20,fontWeight:"bold",marginTop:20}}>Total Charge</Text>
      <SwitchStatusHealth/>

      <View style={{flexDirection:"row",justifyContent:"space-around",width : "100%"}}>
      <Battery/>
      <View  style={{gap:17}}>
           
        <Light/>
        <TotaleDistance/>
        </View>
    
      </View>
      <ButtomBar/>
    </ImageBackground>
  )
}