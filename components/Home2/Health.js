import { View, Text, Button, StyleSheet,Image } from 'react-native'
import React from 'react'



export default function Health() {
    return (
        <View style={styles.mainConatiner}>
            
             <View style={styles.secondConatiner}>
                
             <Image source={require("../../assets/heart.png")} style={{width:110, height: 100}}  />
                 
             </View>
        </View>
    )
}
const styles = StyleSheet.create({          
mainConatiner: {    
width:255,
height:255,
borderWidth:3,
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




})