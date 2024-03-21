import { View, Text,StyleSheet ,TouchableOpacity} from 'react-native'
import React from 'react'

export default function SwitchStatusHealth() {
  return (
    <View style={styles.mainContainer}>
        
        
        <TouchableOpacity>
        <View style={{alignItems:"center"}}>
            <Text style={styles.text1}>Bike Status</Text>
            <View style={styles.line}></View>
        </View>
        </TouchableOpacity>
        
        <TouchableOpacity>
        <Text style={styles.text2}>Health</Text>
        </TouchableOpacity>

    </View>
  )
}
const styles = StyleSheet.create({   
    mainContainer: {
     flexDirection: 'row',
     justifyContent: 'space-between',
     width: 250,
     alignItems:"center" 
       
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