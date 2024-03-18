import { View, Text,Image } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'

export default function Bpm() {
  return (
    <View style={styles.mainContainer}>
      <Text style={{marginLeft:38,fontSize:16  ,marginBottom:3}}>BPM</Text>
      <View style={{flexDirection:"row" ,justifyContent:"space-around",alignItems:"center" }}> 
        <Image source={require('../../assets/heartbeat.png')} style={{width: 40, height: 40}} />
        <Text style={{fontSize:45, fontWeight:"800"}}>110<Text style={{fontSize:12 ,fontWeight:"400",color:"hsl(216, 5%, 57%)" }}>     BPM</Text></Text> 
        <Text style={{color:' hsl(222, 100%, 63%)'}} >Hight</Text> 
      </View>
    </View>
  
  )
}
const styles = StyleSheet.create({   

mainContainer: { 
    width: 361,
    height: 100,
    backgroundColor: "hsl(222, 23%, 14%)",
    borderRadius: 20,
    justifyContent: "center",

           },

  })