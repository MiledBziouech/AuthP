import { View, Text,StyleSheet ,TouchableOpacity,} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
export default function SwitchStatusHealth() {
    const navigation = useNavigation();
  return (
    <View style={styles.mainContainer}>
        
        
        <TouchableOpacity onPress={()=>{navigation.navigate('Home1')}}>
        <View style={{alignItems:"center"}}>
            <Text style={styles.text1}>Bike Status</Text>
            <View style={styles.line}></View>
        </View>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={()=>{navigation.navigate('Home2')}}>
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