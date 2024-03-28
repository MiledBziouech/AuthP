import { View, Text,Image,StyleSheet } from 'react-native'
import React from 'react'
import { useState } from 'react';
import Speedometer, {
    Background,
    Arc,
    Needle,
    Progress,
    Marks,
    Indicator,
  } from 'react-native-cool-speedometer';
export default function SpeedMoter() {
    const [speed, setSpeed] = useState(48)
  return (
    <View>
        <Text style={styles.text}>KM/HR</Text>
        <Text style={styles.text2}>{speed}</Text>

        <Image style={styles.image} source={require('../../assets/Home0/speed.png')}  />
      <Speedometer
  value={speed}
  max={80}
  angle={180}
  
  accentColor   = "hsl(212, 94%, 50%)"
  width={250}
>
  <Background angle={10}
  color='transparent'
  
  />
  <Arc
  color = "rgba(0, 255, 218, 1)"
  
  
  />
  <Needle
  offset    = {0}
  baseWidth = {3}
  color='rgba(64, 122, 255, 1)'
  circleRadius = {0}
  baseOffset = {-65}
  />
  <Progress 
  
  
  />
  <Marks
  step={5}
  lineSize  = {5}
  lineColor='hsl(223, 24%, 11%)'
  fontSize={11}
  
  />
 
</Speedometer>
    </View>
  )
}
const styles = StyleSheet.create({
image:  {

    width:170,height:138,position:"absolute",right:40,top:-13

},
text: {
    fontSize:12 ,
    fontWeight:"bold"
    ,color:"white",
    height:128,
    position:"absolute",left:105,top:115
},
text2 : {
    fontSize:40 ,
    fontWeight:"bold"
    ,color:"white",
    height:128,
    position:"absolute",left:105,top:65}
} )     