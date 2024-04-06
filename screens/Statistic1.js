import { View, Text ,ImageBackground,SafeAreaView,StatusBar,StyleSheet} from 'react-native'
import React from 'react'
import TopBar from '../components/Statistic/TopBar'
import CercleStatics from '../components/Statistic/CercleStatics'
import CercleStatic2 from '../components/Statistic/CercleStatic2'
import TopPage from '../components/Home1/TopPage'
import Trip from '../components/Statistic/Trip'
import ButtomBar from '../components/Home1/ButtomBar'
import Trip2 from '../components/Statistic/Trip2'
export default function Statistic1() {
  return (
    <SafeAreaView style={{flex:1,width:'100%',}}> 
 
  
    
    <ImageBackground style={{justifyContent:"space-between",backgroundColor :"black",flex:1,width:'100%',alignItems:'center'}} source={require('../assets/backGround.png')} >
        <TopPage />
        <TopBar />
      
        <Trip2 />

        <View style={styles.cerceles}>
        <CercleStatics />
        <CercleStatic2 />
        </View>

        <Text style={{ color: 'hsl(216, 2%, 54%)', fontSize: 16, alignSelf:"flex-end",marginRight:17,fontWeight:"400"}}>*For the last month</Text>
        <ButtomBar />

    <StatusBar hidden={true}  />

     
   
    </ImageBackground>
  
    </SafeAreaView >
  )
}
const styles = StyleSheet.create({  

  cerceles:{
    flexDirection:"row",
    justifyContent:"space-between",
    marginBottom:20,
    height:250,
    backgroundColor:"rgba(28, 33, 45, 1)",
    width:"95%",
    borderRadius:20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 7, // For Android
    
  },



 })