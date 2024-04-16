import { View, Text, Button,ImageBackground, SafeAreaView,StatusBar,  ScrollView,Image} from 'react-native'
import React from 'react'
import ItemSwitcher from '../../components/marketplace/Booster/ItemSwitcher'
import Description from '../../components/marketplace/Booster/Description'
import DarkButton from '../../components/marketplace/Booster/DarkButton'
import BlueButton from '../../components/marketplace/Booster/BlueButton'
import EnergyBooster from '../../components/marketplace/Booster/EnergyBooster'
import TopPage from '../../components/Home1/TopPage'
export default function HourGlass() {
  handleClickSell = () => {
    console.log('sell clicked');
  } 
  handleClickAuction = () => {
    console.log('Auction clicked');
  } 
  handleClickActivate = () => {
    console.log('Activate clicked');
  } 
  return (
    <SafeAreaView style={{flex:1,width:'100%',}}> 
 
  
    
    <ImageBackground style={{justifyContent:"space-between",backgroundColor :"black",flex:1,width:'100%',alignItems:'center'}} source={require('../../assets/backGround.png')} >
      
    <StatusBar hidden={true}  />
       <TopPage />
      <ItemSwitcher/>
       <Image source={require('../../assets/markeplace/HourGlass.png')} style={{width:260,height:200}}/> 
      <Description description={"Activate this Booster to regain energy in your NFT and continue earning."}/>
      <EnergyBooster/>
     
      
      <View style={{flexDirection:'row',width:"100%" ,justifyContent:"space-around" ,marginBottom:20}}>
      <BlueButton handleClick={handleClickActivate} title="Activate" /> 
        <View style={{gap	:10}}>

         <DarkButton handleClick={handleClickSell} title="Sell" /> 
         <DarkButton handleClick={handleClickAuction} title="Auction" /> 
        </View>
      </View>
      
      
    </ImageBackground>
  
    </SafeAreaView >
   
  )
}
