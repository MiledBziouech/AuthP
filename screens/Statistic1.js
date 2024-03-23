import { View, Text ,ImageBackground,SafeAreaView,StatusBar} from 'react-native'
import React from 'react'
import TopBar from '../components/Statistic/TopBar'
import CercleStatics from '../components/Statistic/CercleStatics'
import CercleStatic2 from '../components/Statistic/CercleStatic2'
import TopPage from '../components/Home1/TopPage'
import Trip from '../components/Statistic/Trip'

export default function Statistic1() {
  return (
    <SafeAreaView style={{flex:1,width:'100%',}}> 
 
  
    
    <ImageBackground style={{justifyContent:"space-between",backgroundColor :"black",flex:1,width:'100%',alignItems:'center'}} source={require('../assets/backGround.png')} >
        <TopPage />
        <TopBar />
      
        <Trip />
        <View style={{flexDirection:"row",justifyContent:"space-between",marginBottom:20}}>
        <CercleStatics />
        <CercleStatic2 />
        </View>



    <StatusBar hidden={true}  />

     
   
    </ImageBackground>
  
    </SafeAreaView >
  )
}