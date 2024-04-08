import { View, Text ,TouchableOpacity,StyleSheet} from 'react-native'
import React from 'react'

import AntDesign    from 'react-native-vector-icons/AntDesign';
import Octicons from 'react-native-vector-icons/Octicons';
export default function Hcms() {
  return (
    <TouchableOpacity style={styles.mainContainer} >
            
          
            <Text style={styles.text}>HCMS</Text>
            <AntDesign name="right" size={18} color="white" />
            
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({ 


mainContainer: {
  width:"95%",
  height:48,
    flexDirection: 'row',
    justifyContent:"space-between",
    alignItems: 'center',
    padding: 10,  
    backgroundColor: 'hsl(223, 25%, 11%)',
    borderRadius: 25,
    
    
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 7,
},
text: {
  color: 'white',
  fontSize: 16,
  fontFamily: "Poppins-Medium",
  textAlign: 'center',
 textAlign:"left",
 marginLeft:12
}
 })