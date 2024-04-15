import { View, Text,ImageBackground ,StatusBar,SafeAreaView,ScrollView} from 'react-native'
import React from 'react'
import TopBar from '../components/Statistics3/TopBar'
import RewardsNft from '../components/Statistics3/RewardsNft'
import TopPage from '../components/Statistic/TopPage'
import TopWinnigs from '../components/Statistics3/TopWinnigs'
import Char from '../components/Statistics3/Char'
import ButtomBar from '../components/Home1/ButtomBar'
import BigNft from '../components/Statistics3/BigNft'
import Table from '../components/Statistics3/Table'
export default function Statistics3() {
  return (
    
     
  <SafeAreaView style={{flex:1,width:'100%',}}> 

 

    
 <ImageBackground style={{justifyContent:"space-between",backgroundColor :"black",flex:1,width:'100%',alignItems:'center'}} source={require('../assets/backGround.png')} >
   
 <StatusBar hidden={true}  />

  <TopPage />
  <TopBar />
  <RewardsNft />
  <ScrollView   contentContainerStyle={{
    alignItems: 'center',
    justifyContent: 'center',
    gap : 12,
    
  }} 
  
  style={{marginBottom:20}}>

  <BigNft  name="FALCON - Trade"/>
  <Char  Data={[76, 64, 79, 68, 70, 79]}/>
 
  
 <Table />
 </ScrollView>


{/* 
  <Char  Data={[76, 64, 79, 68, 70, 79]}/>
  
  <View style={{alignSelf:"flex-start",marginVertical:5,paddingLeft:40}}>
    <Text style={{color:"white",fontSize:17,fontFamily: 'Poppins-Medium',}}>Top Winning NFTs</Text>
  </View>

  <TopWinnigs />



 */}

    <ButtomBar />
  




  
  

 </ImageBackground>

 </SafeAreaView >
      
      

      
      

   
  )
}