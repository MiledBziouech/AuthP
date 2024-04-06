import { View, Text,StyleSheet ,TouchableOpacity,} from 'react-native'
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
     justifyContent: 'space-around',
     width: "100%",
     alignItems:"center", 
     marginVertical : 20,
     
       
    },

    text1: {
        color: 'white',
        fontSize: 16,
      
        marginTop: 7,
        fontFamily: 'Montserrat',  fontWeight: '500',

    },
    text2: {
        color: 'hsl(220, 4%, 57%)',
        fontSize: 16,
        fontWeight: '500',
        fontFamily: 'Montserrat',
    },
line: {
backgroundColor: 'hsl(222, 100%, 44%)',
width:50,
height: 3,
borderRadius: 5,
marginTop: 5

 },


})