
import { View, Text,Image } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'

export default function BloodPressure() {
  return (
    <View style={styles.mainContainer}>
      <Text style={{marginLeft:20,fontSize:16  ,marginBottom:3}}>Blood pressue</Text>
      <View style={{flexDirection:"row" ,justifyContent:"space-evenly",alignItems:"center" }}> 
        <Image source={require('../../assets/bloodprssue.png')} style={{width: 40, height: 40}} />
        <Text style={{fontSize:45, fontWeight:"800"}}>14 0<Text style={{fontSize:12 ,fontWeight:"400",color:"hsl(216, 5%, 57%)" }}>     /90</Text></Text> 
        <Text style={{color:' hsl(222, 100%, 63%)'}} >Normal</Text> 
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
























