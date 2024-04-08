import { View, Text ,TouchableOpacity,StyleSheet} from 'react-native'
import React from 'react'

import AntDesign    from 'react-native-vector-icons/AntDesign';;
import Ionicons from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';
export default function Wallet() {
  return (
    <TouchableOpacity style={styles.mainContainer} >
            <Ionicons name="wallet-outline" size={25} color="hsl(222, 66%, 48%)" />
            <View>
            <Text style={styles.text}>Wallet</Text>
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
text: {color:"white",
fontSize:13,
fontFamily:"Inter-Meduim", 
textAlign:"left",
marginLeft:-120,
textAlign:"left"
}
 })