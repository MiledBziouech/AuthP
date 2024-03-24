import { View, Text ,TouchableOpacity,StyleSheet} from 'react-native'
import React from 'react'

import AntDesign    from 'react-native-vector-icons/AntDesign';;
import Ionicons from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';
export default function Wallet() {
  return (
    <TouchableOpacity style={styles.mainContainer} >
            
          
            <Text style={{color:"white",fontSize:20,fontWeight:"bold" ,textAlign:"left"}}><Ionicons name="wallet-outline" size={30} color="hsl(222, 66%, 48%)" />         Wallet</Text>
            <AntDesign name="right" size={20} color="white" />
            
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({ 


mainContainer: {
width:"95%",
  flexDirection: 'row',
  justifyContent:"space-between",
  alignItems: 'center',
  padding: 15,  
  backgroundColor: 'hsl(223, 25%, 11%)',
  borderRadius: 25,
  


  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.5,
  shadowRadius: 2,
  elevation: 7,

 
},
 })