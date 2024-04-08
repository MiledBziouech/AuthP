import { View, Text,Image,StyleSheet , TouchableOpacity} from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign';

import { useState } from 'react';
export default function Nft({name,price}) {
    const [iconName, setIconName] = useState('hearto');

    const handleIconClick = () => {
      setIconName(prevIconName => prevIconName === 'hearto' ? 'heart' : 'hearto');
    };
  return (
    <View style={styles.mainContainer}>
    <TouchableOpacity onPress={handleIconClick} style={styles.icon}>
    <AntDesign name={iconName} size={19} color="white"  />
    </TouchableOpacity>
     <Image source={require('../../assets/bikeNft.png')} style={{width: 97, height: 77}}/> 
   
     <Text style={{color:"white",fontSize:12, fontFamily:"Urbanist-SemiBold",marginTop:5}}>{name}</Text>
     <View style={styles.prt}>
     <Text style={{color:"hsl(239, 79%, 70%)",fontSize:12, fontFamily:"Urbanist-SemiBold"}}>{price}  <Text style={{color:"white",fontSize:12, fontFamily:"Urbanist-SemiBold"  }}>PRT</Text></Text>
     </View>
    </View>
  )
}
const styles = StyleSheet.create({  
    
    mainContainer   : {
        elevation:7,
backgroundColor:"hsl(222, 23%, 14%)",

width:160,
height:140,
alignItems:"center",
justifyContent:"flex-start",
borderRadius:20,
    },
    prt : {
    marginTop:5,
   
    padding:5,
    borderRadius:15,
    elevation:10,
    backgroundColor:"hsl(222, 22%, 22%)",
    borderWidth:1,
   

    },
    icon: {
        position: 'absolute',
        top:12,
        right:12,
      },

      
});