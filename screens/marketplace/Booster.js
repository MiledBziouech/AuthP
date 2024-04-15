import { View, Text, Button,ImageBackground, SafeAreaView,StatusBar,  ScrollView,Image} from 'react-native'
import React from 'react'
import ItemSwitcher from '../../components/marketplace/Booster/ItemSwitcher'
import Description from '../../components/marketplace/Booster/Description'

export default function Booster() {
  return (
    <SafeAreaView style={{flex:1,width:'100%',}}> 
 
  
    
    <ImageBackground style={{justifyContent:"center",backgroundColor :"black",flex:1,width:'100%',alignItems:'center'}} source={require('../../assets/backGround.png')} >
      
    <StatusBar hidden={true}  />

      {/* <ItemSwitcher/>
      <Image source={require('../../assets/markeplace/HourGlass.png')} style={{width:260,height:200}}/> */}
      
      <Description description={"Activate this Booster to regain energy in your NFT and continue earning."}/>
    </ImageBackground>
  
    </SafeAreaView >
   
  )
}
