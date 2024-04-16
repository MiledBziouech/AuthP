import { View, Text, Button,ImageBackground, SafeAreaView,StatusBar,  ScrollView,Image} from 'react-native'
import React from 'react'
import CommonBoxStats from '../../components/marketplace/Booster/CommonBoxStats';
import BlueButton from '../../components/marketplace/Booster/BlueButton';
import DarkButton from '../../components/marketplace/Booster/DarkButton';
import ItemSwitcher from '../../components/marketplace/Booster/ItemSwitcher';
import TopPage from '../../components/Home1/TopPage';
import Description from '../../components/marketplace/Booster/Description';
export default function CommonBox() {
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
 
  
    
    <ImageBackground style={{justifyContent:'space-between',backgroundColor :"black",flex:1,width:'100%',alignItems:'center'}} source={require('../../assets/backGround.png')} >
      
    <StatusBar hidden={true}  />
    <TopPage />
    <ItemSwitcher/>

    <Image source={require('../../assets/markeplace/box.png')} style={{width:260,height:240}}/>
    <Description description={"This Box contains NFTs exclusively. Open to claim your NFT."}/>
    <View style={{flexDirection:'row',width:'100%',justifyContent:"space-around",alignItems:"center",marginVertical:12}}>
        <CommonBoxStats fill={60} text="Common NFT"/>
        <CommonBoxStats fill={30} text="Rare NFT"/>
        <CommonBoxStats fill={10} text="Epic NFT"/>
    </View>
       
    <View style={{flexDirection:'row',width:"100%" ,justifyContent:"space-around" ,marginBottom:20}}>
        <BlueButton handleClick={handleClickActivate} title="Open" /> 
        <View style={{gap:10}}>
            <DarkButton handleClick={handleClickSell} title="Sell" /> 
            <DarkButton handleClick={handleClickAuction} title="Auction" /> 
        </View>
    </View>
    
    </ImageBackground>
  
    </SafeAreaView >
   
  )
}
