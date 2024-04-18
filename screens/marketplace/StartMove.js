import { View, Text, Button,ImageBackground, SafeAreaView,StatusBar,  ScrollView,StyleSheet} from 'react-native'
import React from 'react'
import BikeUsage from '../../components/marketplace/nft/BikeUsage'
import ActiveBoosters from '../../components/marketplace/nft/ActiveBoosters'
import Start from '../../components/marketplace/nft/Start' 
import TopPage from '../../components/Home1/TopPage' 
import EquippedItems from '../../components/marketplace/nft/EquippedItems'
import ButtomBar from '../../components/Home1/ButtomBar'
export default function StartMove() {
  return (
    <SafeAreaView style={{flex:1,width:'100%',}}> 
 
  
    
    <ImageBackground style={{justifyContent:"space-between",backgroundColor :"black",flex:1,width:'100%',alignItems:'center'}} source={require('../../assets/backGround.png')} >
      
            <StatusBar hidden={true}  />  
            <ScrollView 
    style={styles.ScrollView} 
    contentContainerStyle={{ justifyContent :'center',alignItems:'center',gap:20}}
    showsVerticalScrollIndicator={false}
    
    
    > 
            <TopPage/>
            <Text style={styles.text}>BLUE WOLF - LR01</Text>
            <BikeUsage/>
            <Text style={styles.text2}>Equipped Items</Text> 
            <EquippedItems/>
            <ActiveBoosters/>
          

    </ScrollView>
    <Start/>
    <ButtomBar/>
        
    </ImageBackground>
  
    </SafeAreaView >
   
  )
}
const styles = StyleSheet.create({ 
text:{
            fontFamily: 'Poppins-Bold',
            fontSize: 20,
            letterSpacing: -0.3,    
            color: '#FFFFFF',


},
text2:{
    fontFamily:'MontserratSubrayada-Bold',
     fontSize:20,
 color :"white",
   },
   ScrollView:{

  width:'100%',
  marginBottom  : 20,
 

   
    
  },
   

 })

