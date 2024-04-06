import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
export default function TopBar() {
  return (
    <View style={styles.mainContainer}>

      <View style={{alignItems:"center"}}>


      <Text style={styles.text1}>Bike</Text>
      <View style={styles.line}></View>


       </View>


      <Text style={styles.text2}>Health</Text>
      
    
      <Text style={styles.text2}>Rewards</Text>

    </View>
  )
}
const styles = StyleSheet.create({   
    mainContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        width: "90%",
        height: 59,
        backgroundColor: 'hsl(222, 23%, 14%)',
       justifyContent: 'space-around',
       borderRadius: 15,
       borderWidth: 2,
       borderColor: 'rgba(49, 52, 60, 1)',
        marginTop: 7,  
     
       
    },

    text1: {
        color: 'white',
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: 7
    },
    text2: {
        color: 'hsl(220, 4%, 57%)',
        fontSize: 22,
        fontWeight: 'bold',
    },
line: {
backgroundColor: 'hsl(222, 100%, 44%)',
width:50,
height: 3,
borderRadius: 5,

 },


})