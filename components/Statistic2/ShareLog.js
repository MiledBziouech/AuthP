import { View, Text, Touchable, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

export default function ShareLog() {
  return (
    
     <TouchableOpacity style={Styles.container}>
      <Text style={Styles.text}>Share Log</Text>
     </TouchableOpacity>
  
  )
}
const Styles= StyleSheet.create({   

    container: {
        backgroundColor: 'hsl(222, 100%, 63%)',
        width: 216,
        height: 52,
        alignItems  : 'center',
        justifyContent: 'center',
        borderRadius: 40,
      },
      text: {
        fontSize: 16,
        color: 'white',
        fontFamily:"Poppins-Medium" 
      },



})