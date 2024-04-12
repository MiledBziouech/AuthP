import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

export default function SmallMap() {
  return (
    <View style={styles.maincontainer}>
     
    </View>
  )
}


const styles = StyleSheet.create({  
maincontainer: {
    height: 279,
    width: "90%",
    backgroundColor: "rgba(28, 33, 45, 1)",
  borderTopRightRadius: 20,
    borderTopLeftRadius: 20,


    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 7,
    
},
})