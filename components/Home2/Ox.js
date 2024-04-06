
import { View, Text,Image } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'

export default function Ox() {
  return (
    <View style={styles.mainContainer}>
      <Text style={{marginLeft:25,fontSize:14  ,marginBottom:3,color:"white",fontFamily: 'Montserrat',fontWeight:"400"}}>Blood Oxygen %</Text>
      <View style={{flexDirection:"row" ,justifyContent:"space-evenly",alignItems:"center" }}> 
        <Image source={require('../../assets/oxygen.png')} style={{width: 40, height: 40}} />
        <Text style={{fontSize:36, fontWeight:"800",color:"white",fontFamily: 'Montserrat',fontWeight:"bold"}}>089<Text style={{color:"hsl(216, 5%, 57%)" ,fontFamily: 'Montserrat',fontWeight:"400",fontSize:10}}>  %</Text></Text> 
        <Text style={{color:' hsl(222, 100%, 63%)',fontFamily: 'Montserrat',fontWeight:"bold",fontSize:12}} >Normal</Text> 
      </View>
    </View>
  
  )
}
const styles = StyleSheet.create({   

mainContainer: { 
  width:'90%',
    height: 100,
    backgroundColor: "hsl(222, 23%, 14%)",
    borderRadius: 20,
    justifyContent: "center",

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 7, // For Android
    

           },

  })
























