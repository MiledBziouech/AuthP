import { View, Text,Image,StyleSheet } from 'react-native'
import React from 'react'
import { useState } from 'react'

export default function Trip2() {
  const [count, setCount] = useState(266)
  const  [ecoCount, setEcoCount] = useState(188)
  return (
    <View style={{marginVertical:14}}>
      <Image  source={require("../../assets/tripImage2.png")} style={{width:360, height: 250}}  />
      <Text style={styles.text1}>{count}</Text>    
      <Text style={styles.text2}>{ecoCount}</Text>    
    </View>
  )
}
const styles = StyleSheet.create({
text1:{
  color:"white",
  fontSize:32,
  fontWeight:"bold",
  position:"absolute",
fontFamily:"Montserrat",
right:75,
top:55,
  // left:68,
},
text2:{
  color:"white",
  fontSize:32,
  fontWeight:"bold",
  position:"absolute",
  fontFamily:"Montserrat",
  right:77,
    bottom:25,
},



})