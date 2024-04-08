import { View, Text ,TouchableOpacity,StyleSheet} from 'react-native'
import React from 'react'

import AntDesign    from 'react-native-vector-icons/AntDesign';

import Feather from 'react-native-vector-icons/Feather';
export default function LogOut() {
  return (
    <TouchableOpacity style={styles.mainContainer} >
            
            <Feather name="log-out" size={25} color="red" />    
            <View>  
            <Text style={styles.text}>Sign Out</Text>
            </View>   
            <AntDesign name="right" size={15} color="white" />
            
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({ 


mainContainer: {
  width:"95%",
  height: 49,
  flexDirection: 'row',
  justifyContent:"space-between",
  alignItems: "center",
  
  backgroundColor: 'hsl(223, 25%, 11%)',
  
  borderRadius: 25,
  
  padding: 10,
  
  
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.5,
  shadowRadius: 2,
  elevation: 7,
 
},
text: {color:"red",fontSize:13,fontFamily:"Inter-Meduim", textAlign:"left",marginLeft:-120,textAlign:"left"}
 })