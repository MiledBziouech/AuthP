import { View, Text, Button, StyleSheet } from 'react-native'
import React from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useState } from 'react';
export default function Kmcercle() {
const [distance, setDistance] = useState(360);
  return (
    <View style={styles.mainConatiner}>
       <View style={styles.secondConatiner}>
                <View   style={styles.textContainer}>
                    <MaterialIcons name="flash-on" size={25} color="hsl(222, 96%, 41%)"  />
                    <Text style={styles.text1}>{distance}</Text>
                    <Text style={styles.text2}>Km</Text>
                </View>
         
       </View>
    </View>
  )
}
const styles = StyleSheet.create({          
mainConatiner: {    
width:255,
height:255,
borderWidth:1,
borderColor:'hsl(222, 98%, 41%)',
borderRadius:255/2,
justifyContent:'center',    
alignItems:'center',


    },
secondConatiner: {    
width:220,  
height:220,
borderWidth:19,
borderColor:'hsl(224, 93%, 59%)',
borderRadius:220/2,
justifyContent:'center',
alignItems:'center',


},
textContainer: {   

    justifyContent:'center',
    alignItems:'center',
    
 }   ,
text1: {
    fontSize: 60,
    fontWeight: 'bold',
    color: 'hsl(222, 97%, 49%)',
    marginTop:-12,
    fontFamily:'Montserrat',
    
  },
  text2: {
    fontSize: 30,
    fontWeight: '500',
    color: 'hsl(220, 7%, 57%)',
    marginTop:-12,
    fontFamily:'Montserrat',
  },





})