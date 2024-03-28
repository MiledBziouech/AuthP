import { View, Text ,ImageBackground,Image, TouchableOpacity,StyleSheet} from 'react-native'
import React from 'react'

export default function BikeHealth() {
  return (
    <View  style={styles.mainContainer}>
        <TouchableOpacity style={{width: 50, height: 50,alignContent:"center",justifyContent:"center"}}   >
        <Image style={{width: 300, height: 300,}} source={require('../../assets/Home0/heart.png')} />
        
     
        </ TouchableOpacity>
        <TouchableOpacity style={{width: 50, height: 50,alignContent:"center",justifyContent:"center"}}   >
        <Image style={{width: 300, height: 300,}} source={require('../../assets/Home0/bike.png')} />
     
        </ TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
    mainContainer: {
      flex: 1,
      alignItems:"center",
      justifyContent:"space-between" ,
      flexDirection:'row',
      width:'50%',
      height:'120',
    },


 } )