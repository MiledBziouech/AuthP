import { View, Text,Image,StyleSheet , TouchableOpacity} from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign';

import { useState } from 'react';
export default function BigNft({name,price}) {
    const [iconName, setIconName] = useState('hearto');

    const handleIconClick = () => {
      setIconName(prevIconName => prevIconName === 'hearto' ? 'heart' : 'hearto');
    };
  return (
    <View style={styles.mainContainer}>

    <TouchableOpacity onPress={handleIconClick} style={styles.icon}>
    <AntDesign name={iconName} size={19} color="white"  />
    </TouchableOpacity> 
    <Text style={{color:"white",fontSize:20, fontFamily:"Poppins-Bold",alignSelf:"flex-start",marginLeft:30}}>{name}</Text>
     <Image source={require('../../assets/bikeNft.png')} style={{width: 216, height: 140}}/> 
   
    
   
    </View>
  )
}
const styles = StyleSheet.create({  
    
    mainContainer   : {
       
backgroundColor:"rgba(255, 255, 255, 0.05)",

width:"90%",
height:220,
alignItems:"center",
justifyContent:"space-evenly",
borderRadius:20,
    },

    icon: {
        position: 'absolute',
        top:30,
        right:30,
      },

      
});