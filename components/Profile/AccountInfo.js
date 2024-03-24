import { View, Text ,TouchableOpacity,StyleSheet} from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign    from 'react-native-vector-icons/AntDesign';
export default function AccountInfo() {
  return (
    <TouchableOpacity style={styles.mainContainer} >
            
          
            <Text style={{color:"white",fontSize:20,fontWeight:"bold", textAlign:"left"}}><MaterialCommunityIcons name="account-circle-outline" size={30} color="hsl(222, 66%, 48%)" />         Account Info</Text>
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