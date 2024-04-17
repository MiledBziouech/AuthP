import { View, Text ,StyleSheet,Image,TouchableOpacity} from 'react-native'
import React from 'react'



export default function Item({name}) {
  return (
    <TouchableOpacity style={styles.MainContainer}>
        <Image source={require('../../../assets/markeplace/item.png') } style={{width:60,height:60}} /> 
      <Text style={styles.text}>{name}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    MainContainer : { 
      width:160,
      height:80,
      borderRadius:20,
      backgroundColor:"rgba(36, 42, 54, 1)",
      borderWidth:2,
      borderColor:"rgba(46, 54, 73, 1)",
      alignItems:"center",
      justifyContent:"center",

    },
    text:{
        fontFamily:'Poppins-Bold',
        fontSize:15,
        letterSpacing:-0.3,
          



    }

})