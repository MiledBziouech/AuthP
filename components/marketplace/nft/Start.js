import { View, Text,StyleSheet,TouchableOpacity } from 'react-native'
import React from 'react'

export default function Start() {
  return (
    <TouchableOpacity style={styles.mainContainer}>
      <Text style={styles.text}>Start</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({  

        mainContainer:{
            width: 216,
            height: 52,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor : 'rgba(64, 122, 255, 1)',
            borderRadius: 25,
marginBottom  : 10
           },
           text:{
               fontFamily: 'Poppins-Medium',
               fontSize: 16,
               color: '#FFFFFF',
               letterSpacing: -0.3,
            },
         


})