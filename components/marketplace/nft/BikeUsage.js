import { View, Text,StyleSheet,Image} from 'react-native'
import React from 'react'
import { useState } from 'react';
import RarityLevelRatio from './RarityLevelRatio';
export default function BikeUsage() {
    const min = 25;
    const sec = 30;
    const [usage, setUsage] = useState(60);

    const filledHeight = usage * 0.01 * 400; // Adjust as needed
  return (
    
    <View style={[styles.batteryOutline, { height: 400 }]}>
     
    <View
        style={[
            styles.batteryFill,
            { height: filledHeight, backgroundColor: 'rgba(64, 122, 255, 0.3)' ,},
        ]}
        
    />
    <View style={styles.textContainer}>
    <Text style={styles.text2}>{usage}%</Text>  
    <Text style={styles.text1}>{min} min {sec} sec remaining</Text>
    </View>
     <Image source={require('../../../assets/markeplace/bike.png')} style={styles.image}/>
        <RarityLevelRatio />

        
</View>
  )
}


const styles = StyleSheet.create({

    batteryOutline: {
        width: 380,
         borderRadius: 25,
     
        overflow: 'hidden',
        justifyContent:"space-around",
        alignItems:"center"
    },
    batteryFill: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
    },
    image:{
        width:350,
        height:226,
        
        },
      
        text1:{
            fontFamily: "Poppins-Bold",
            fontSize: 15,
            color: 'white',

        },
        text2:{
                fontSize    : 26,
                color       : 'rgba(78, 73, 242, 1)',
                fontFamily: "Poppins-Bold",
                marginRight:5,
                

        }, 
        textContainer :{
            alignItems:"center",
            justifyContent:"center",
            flexDirection:"row",


        },
    





});
