import { View, Text,StyleSheet ,TouchableOpacity,} from 'react-native'
import React from 'react'

export default function All() {
  return (
    <View style={styles.mainContainer}>
        
        
        <TouchableOpacity>
        <View style={{alignItems:"center"}}>
            <Text style={styles.text1}>ALL</Text>
            <View style={styles.line}></View>
        </View>
        </TouchableOpacity>
        
        <TouchableOpacity>
        <Text style={styles.text2}>Unread only</Text>
        </TouchableOpacity>

    </View>
  )
}
const styles = StyleSheet.create({   
    mainContainer: {
     flexDirection: 'row',
     justifyContent: 'flex-start',
     width: "100%",
     alignItems:"center", 
     marginVertical : 20,
     gap: 40,
     width:"80%"

       
    },

    text1: {
        color: 'white',
       
     
        marginTop: 3,
        fontFamily  :"Poppins-Medium",
        fontSize: 15,
  
    },
    text2: {
        color: 'white',
     
        fontFamily  :"Poppins-Medium",
        fontSize: 15,
    },
line: {
backgroundColor: 'hsl(222, 100%, 44%)',
width:40,
height: 3,
borderRadius: 5,
marginTop: 1


 },


})