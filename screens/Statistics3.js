import { View, Text,ImageBackground ,StatusBar,SafeAreaView} from 'react-native'
import React from 'react'
import TopBar from '../components/Statistics3/TopBar'
import RewardsNft from '../components/Statistics3/RewardsNft'
import TopPage from '../components/Home1/TopPage'
import TopWinnigs from '../components/Statistics3/TopWinnigs'
import HeartRateChart from '../components/Statistic2/HeartRateChart'
export default function Statistics3() {
  return (
    
     
  <SafeAreaView style={{flex:1,width:'100%',}}> 

 
  
    
 <ImageBackground style={{justifyContent:"space-between",backgroundColor :"black",flex:1,width:'100%',alignItems:'center'}} source={require('../assets/backGround.png')} >
   
 <StatusBar hidden={true}  />



 <TopPage />
  <TopBar />
  <RewardsNft />
  <HeartRateChart />
 
  <TopWinnigs />




  
  

 </ImageBackground>

 </SafeAreaView >
      
      

      
      

   
  )
}