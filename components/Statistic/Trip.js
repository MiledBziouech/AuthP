import { View, Text,Image,StyleSheet } from 'react-native'
import React from 'react'
import { useState } from 'react'

export default function Trip() {
  const [count, setCount] = useState(266)
  const  [ecoCount, setEcoCount] = useState(188)
  return (
    <View>
      <Image  source={require("../../assets/tripImage.png")} style={{width:360, height: 250}}  />
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
  left:68,
top:45

},
text2:{
  color:"white",
  fontSize:32,
  fontWeight:"bold",
  position:"absolute",
  left:68,
  bottom:37

},



})