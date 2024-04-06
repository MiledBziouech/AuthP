import { View, Text, Button,ImageBackground, SafeAreaView,StatusBar,  ScrollView,StyleSheet} from 'react-native'
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


    <SafeAreaView style={{flex:1,width:'100%',}}> 

    <ImageBackground style={{justifyContent:"space-between",backgroundColor :"black",flex:1,width:'100%',alignItems:'center'}} source={require('../assets/backGround.png')} >
      
    <StatusBar hidden={true}  />


      <TopPage />

      <Kmcercle />  

      <Text style={styles.text}>Total Charge</Text>
      <SwitchStatusHealth />

      <View style={{flexDirection:"row",justifyContent:"space-around",width : "100%" ,marginBottom: 20,}}>
        
      <Battery/>
      <View  style={{gap:17}}>
   
        <Light/>
        <TotaleDistance />
        </View>
    
      </View>
     
   
    </ImageBackground>
  
    </SafeAreaView >
   
  )
}

const styles = StyleSheet.create({  

text  : {
  color:"rgba(64, 122, 255, 1)",
  fontSize:18,
  fontWeight:"500",
  marginTop:20,
  fontFamily  :"Montserrat"

}



})