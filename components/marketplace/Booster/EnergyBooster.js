import { View, Text,StyleSheet,Image } from 'react-native'
import React from 'react'

export default function EnergyBooster() {
  return (
    <View style={styles.mainContainer}>
        <Text style={styles.text}>Energy Booster</Text>
        <Image source={require('../../../assets/markeplace/50.png')} style={{width:100,height:100}}/>
    </View>
  )
}
const styles = StyleSheet.create({  

    mainContainer: { 
            width:'100%',
            flexDirection:'row',
            justifyContent:'space-around',
            alignItems:"center",

        },
    
          text: {
           fontFamily:"Poppins-Bold",
              fontSize: 20,
              color: 'white',
          },


})