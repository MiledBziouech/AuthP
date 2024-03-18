import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import MaterialCommunityIcons   from 'react-native-vector-icons/MaterialCommunityIcons'
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome5'
export default function TotaleDistance() {
  return (
    <View style={styles.mainContainer}>
     <Text style={{fontWeight:"300",fontSize:18,color:"white"}}>Total Distance </Text>
     <Text style={{fontWeight:"300",fontSize:20,color:"white"}}><MaterialCommunityIcons name="map-marker-distance" size={30} color="white" />  20,000 km </Text> 
    <Text style={{fontWeight:"300",fontSize:16,color:"hsl(222, 100%, 63%)"}}>History  <FontAwesome6 name="chevron-right" size={13} color="hsl(222, 100%, 63%)" /> </Text>
    </View>
  )
}
const styles = StyleSheet.create({      
    mainContainer : {  
        backgroundColor : 'hsl(222, 23%, 14%)',
        width : 185,
        height : 144,
        borderRadius : 20,
        justifyContent : 'space-around',
        paddingHorizontal : 20,
        paddingVertical : 5,
        alignItems:"flex-start"
     },



        })