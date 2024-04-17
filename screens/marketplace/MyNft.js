import { View, Text, Button,ImageBackground, SafeAreaView,StatusBar,  ScrollView,Image,StyleSheet} from 'react-native'
import React from 'react'
import TopPage from '../../components/Home1/TopPage'
import InfoCard from '../../components/marketplace/nft/InfoCard'
import EquippedItems from '../../components/marketplace/nft/EquippedItems'
import BikeNft from '../../components/marketplace/nft/BikeNft'
import NftSwitcher from '../../components/marketplace/nft/NftSwitcher'
import Nft from '../../components/Statistics3/Nft'
import DarkButton from '../../components/marketplace/Booster/DarkButton'
import BlueButton from '../../components/marketplace/Booster/BlueButton'
export default function MyNft() {

  return (
    <SafeAreaView style={{flex:1,width:'100%',}}> 
 
  
    
    <ImageBackground style={{justifyContent:"space-around",backgroundColor :"black",flex:1,width:'100%',alignItems:'center'}} source={require('../../assets/backGround.png')} >
      
    <StatusBar hidden={true}  />
    <TopPage/>
    <NftSwitcher/>
    <ScrollView 
    style={styles.ScrollView} 
    contentContainerStyle={{ justifyContent :'center',alignItems:'center',gap:20}}
    showsVerticalScrollIndicator={false}
    
    
    > 
    <BikeNft/>
    <InfoCard/>
    <Text style={styles.text}>Equipped Items</Text> 
    <EquippedItems/>  
    </ScrollView>

      <View style={styles.ButtonContainer}>
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
  
  
  ScrollView:{

    width:'100%',
    height:'100%',
    


   
    
  },
  ButtonContainer:{ 
    width:'90%',
    flexDirection:'row',
    justifyContent:'space-between',
    marginTop:10, 
    marginBottom:20,
    }


})