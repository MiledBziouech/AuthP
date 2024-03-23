import { View, Text,StyleSheet,TouchableOpacity } from 'react-native'
import React from 'react'

export default function SwitchHealthStatus() {
  return (
    <View style={styles.mainContainer}>
         <TouchableOpacity>
        <Text style={styles.text2}>Bike Status</Text>
        </TouchableOpacity>
        
        <TouchableOpacity>
        <View style={{alignItems:"center"}}>
        <Text style={styles.text1}>Health</Text>
        
            <View style={styles.line}></View>
            
        </View>
        </TouchableOpacity>

        
    </View>
  )
}
const styles = StyleSheet.create({   
    mainContainer: {
     flexDirection: 'row',
     justifyContent: 'space-around',
     width: "100%",
     alignItems:"center"    ,
     marginBottom:20, 
       
    },

    text1: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 7
    },
    text2: {
        color: 'hsl(220, 4%, 57%)',
        fontSize: 20,
        fontWeight: 'bold',
    },
line: {
backgroundColor: 'hsl(222, 100%, 44%)',
width:50,
height: 3,
borderRadius: 5,
marginTop: 5

 },


})