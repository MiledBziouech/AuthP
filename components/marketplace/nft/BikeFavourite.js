import { View, Text ,StyleSheet,Image,TouchableOpacity} from 'react-native'
import React from 'react'

import RarityLevelRatio from './RarityLevelRatio'
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useState } from 'react'

export default function BikeFavourite() {
  const [iconName, setIconName] = useState('hearto');
    

    const handleIconClick = () => {
      setIconName(prevIconName => prevIconName === 'hearto' ? 'heart' : 'hearto');
    };

 

  return (
    <View style={styles.mainContainer}>
       
      <View style={styles.SecondContainer}>

              
                <Image source={require('../../../assets/markeplace/bike.png')} style={styles.image}/>
                <RarityLevelRatio style={{marginTop:180}} />
               
      </View>
      <TouchableOpacity  onPress={handleIconClick} style={styles.icon}>
                      <AntDesign name={iconName} size={19} color="white" />
      </TouchableOpacity>
  
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
    },

    icon:{


      position: 'absolute',
      top:60,
      right:12,
    }



})