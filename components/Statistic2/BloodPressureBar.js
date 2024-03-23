import { View, Text ,Image,StyleSheet} from 'react-native'
import React from 'react'

export default function BloodPressureBar() {
  return (
    <View stye>
    <Text style={styles.text}>Blood Pressue</Text>
   
    <Image source={require('../../assets/bloodIcon.png')} style={{width:57,height:57 ,marginBottom:10, marginLeft:19,}} />
     <Image source={require('../../assets/bar.png')} style={{width:340,height:20}} />
    </View>
  )
}
const styles = StyleSheet.create({

text:{
  color:"white",
  fontSize:20,
  fontWeight:"bold",
  marginTop:20,
  position:"absolute",
    top:30,
    left:89,
   
},



})