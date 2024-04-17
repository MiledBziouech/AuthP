import { View, Text ,StyleSheet,Image} from 'react-native'
import React from 'react'
import Energy from '../../../components/marketplace/nft/Energy'
export default function BikeNft() {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.SecondContainer}>
        
                <Image source={require('../../../assets/markeplace/bike.png')} style={styles.image}/>
                <Energy style={{marginTop:210}} />
      </View>
    </View>
  )
}
const styles = StyleSheet.create({  

mainContainer:{
  height:310,
  justifyContent:'flex-end',
  alignItems:'center',
  width :'90%',

  
},  
SecondContainer:{  
    width :'100%',
    height:260, 
    backgroundColor:'rgba(255, 255, 255, 0.05)',
    borderRadius:20,
    justifyContent:'flex-start',
    alignItems:'center',

 },
    image:{
    width:350,
    height:226,
    
    resizeMode:'contain',
    position    :'absolute',
    top         : -50,
    }



})