import { View, Text, Button,ImageBackground, SafeAreaView,StatusBar,  ScrollView,Image,StyleSheet} from 'react-native'
import React from 'react'
import TopPage from '../../components/Home1/TopPage'

import ItemInfo from '../../components/marketplace/Booster/ItemInfo'
import ItemSwitcher from '../../components/marketplace/Booster/ItemSwitcher'
import Description from '../../components/marketplace/Booster/Description'
import BlueButton from '../../components/marketplace/Booster/BlueButton'
import DarkButton from '../../components/marketplace/Booster/DarkButton'
export default function MyNft() {

  return (
    <SafeAreaView style={{flex:1,width:'100%',}}> 
 

    
    <ImageBackground style={{justifyContent:"space-between",backgroundColor :"black",flex:1,width:'100%',alignItems:'center'}} source={require('../../assets/backGround.png')} >
      
    <StatusBar hidden={true}  />
    <TopPage/>
    <ItemSwitcher/>
    <Image  source={require('../../assets/markeplace/runners.png')} style={{width:350,height:260}}/>
    <ItemInfo/>
    <Description  description="Equip this item to enhance your XP ratio and level your NFT faster." />
   <View style={styles.ButtonContainer}>
    <BlueButton title="Unequip" />
    <View style={styles.dark}>
    <DarkButton title="Sell" /> 
    <DarkButton title="Auction" />
    </View>
    
    
    
    </View>

      
    </ImageBackground>
  
    </SafeAreaView >
   
  )
}

const styles = StyleSheet.create({

  ButtonContainer:{ 
    width:'90%',
    flexDirection:'row',
    justifyContent:'space-between',
    
    marginBottom:10,
    marginTop:10,
    },
    dark:{
        
      
    gap:10,
   
    }


})