import { View, Text ,StyleSheet} from 'react-native'
import React from 'react'

export default function Battery() {
    const battery = 10
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.text}>Battery</Text>
      <View style={{flexDirection:'row'}}>

        <View style={[styles.branch,{backgroundColor:battery > 0 ? "rgba(1, 255, 255, 1)" : "rgba(41, 190, 182, 0.5)"}]}></View>
        <View style={[styles.branch,{backgroundColor:battery > 25 ? "rgba(1, 255, 255, 1)" : "rgba(41, 190, 182, 0.5)"}]}></View>
        <View style={[styles.branch,{backgroundColor:battery > 50 ? "rgba(1, 255, 255, 1)" : "rgba(41, 190, 182, 0.5)"}]}></View>
        <View style={[styles.branch,{backgroundColor:battery > 75 ? "rgba(1, 255, 255, 1)" : "rgba(41, 190, 182, 0.5)"}]}></View>
      </View>
      <Text style={styles.text}>{battery}   %</Text>
      
    </View>
  )
}
const styles = StyleSheet.create({
mainContainer: {

  alignItems:"center",
  justifyContent:"space-between" ,
  flexDirection:'row',
  width:'93%',

},
branch: {
  width: 40,
  height: 9,
  backgroundColor: 'rgba(41, 190, 182, 0.5)',
  margin: 3,

},
text: {
  color: 'white',
  fontSize: 20,
  fontWeight: 'bold',}


})