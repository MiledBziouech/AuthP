import { View, Text, Button,ImageBackground, SafeAreaView,StatusBar,  ScrollView,Image,StyleSheet} from 'react-native'
import React from 'react'
import BikeFavourite from '../../components/marketplace/nft/BikeFavourite'
import TopPage from '../../components/Home1/TopPage'
import NftTopBar from '../../components/marketplace/nft/NftTopBar'
import Nft from '../../components/Statistics3/Nft'
import NftSwitcher from '../../components/marketplace/nft/NftSwitcher'
import InfoCard from '../../components/marketplace/nft/InfoCard'
import EquippedItems from '../../components/marketplace/nft/EquippedItems'
import DarkButton from '../../components/marketplace/Booster/DarkButton'
import BlueButton from '../../components/marketplace/Booster/BlueButton'


export default function Favourite() {

  return (
    <SafeAreaView style={{flex:1,width:'100%',}}> 
 
  
    
    <ImageBackground style={{justifyContent:"space-between",backgroundColor :"black",flex:1,width:'100%',alignItems:'center'}} source={require('../../assets/backGround.png')} >
      
    <StatusBar hidden={true}  />
    <ScrollView 
    style={styles.ScrollView} 
    contentContainerStyle={{ justifyContent :'center',alignItems:'center',gap:20}}
    showsVerticalScrollIndicator={false}
    
    
    > 
    <TopPage />
    <NftTopBar />
    <NftSwitcher />
    <BikeFavourite />
    <InfoCard />
    <Text style={styles.text}>Equipped Items</Text> 
    <EquippedItems />
    </ScrollView>
    <View style={styles.buttonContainer}>
      <BlueButton title="Sell" />
      <DarkButton title="Auction" />
    </View>
    
    </ImageBackground>
  
    </SafeAreaView >
    
   
  )
}
const styles = StyleSheet.create({
  text:{
   fontFamily:'MontserratSubrayada-Bold',
    fontSize:20,
color :"white",
  },
  buttonContainer:{
    flexDirection : 'row',
    justifyContent : 'space-around',
    width : '90%',
    alignItems : 'center',
    marginBottom : 20,


  },
    ScrollView:{

    width:'100%',
      marginBottom  : 20,
   
  
     
      
    }


})