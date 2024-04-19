import { View, Text,StyleSheet,TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
export default function SwitchHealthStatus() {
    const navigation = useNavigation();
  return (
    <View style={styles.mainContainer}>
         <TouchableOpacity onPress={()=>{navigation.navigate('Home1')}}>
        <Text style={styles.text2}>Bike Status</Text>
        </TouchableOpacity>
        
        <TouchableOpacity  onPress={()=>{navigation.navigate('Home2')}}>
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
        fontSize: 16,
        fontWeight: '400',
        marginTop: 7,
        fontFamily: 'Montserrat',
    },
    text2: {
        color: 'hsl(220, 4%, 57%)',
        fontSize: 16,
        fontWeight: '400',
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