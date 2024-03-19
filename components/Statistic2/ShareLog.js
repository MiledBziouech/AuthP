import { View, Text, Touchable, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

export default function ShareLog() {
  return (
    <View>
     <TouchableOpacity style={Styles.container}>
      <Text style={Styles.text}>Share Log</Text>
     </TouchableOpacity>
    </View>
  )
}
const Styles= StyleSheet.create({   

    container: {
       
        backgroundColor: 'hsl(222, 100%, 63%)',
        width: 216,
        height: 52,
        alignItems  : 'center',
        justifyContent: 'center',
        borderRadius: 20,
      },
      text: {
        fontSize: 20,
        fontWeight: '500',
        color: 'white',
      },



})