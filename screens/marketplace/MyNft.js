import { View, Text, Button,ImageBackground, SafeAreaView,StatusBar,  ScrollView,Image} from 'react-native'
import React from 'react'
import TopPage from '../../components/Home1/TopPage'
import InfoCard from '../../components/marketplace/nft/InfoCard'
import Item from '../../components/marketplace/nft/Item'
export default function MyNft() {

  return (
    <SafeAreaView style={{flex:1,width:'100%',}}> 
 
  
    
    <ImageBackground style={{justifyContent:"center",backgroundColor :"black",flex:1,width:'100%',alignItems:'center'}} source={require('../../assets/backGround.png')} >
      
    <StatusBar hidden={true}  />
       

      <Item />
      
    </ImageBackground>
  
    </SafeAreaView >
   
  )
}
