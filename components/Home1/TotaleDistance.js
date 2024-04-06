import { View, Text, StyleSheet ,TouchableOpacity} from 'react-native'
import React from 'react'
import MaterialCommunityIcons   from 'react-native-vector-icons/MaterialCommunityIcons'
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome5'
export default function TotaleDistance() {
  return (
    <View style={styles.mainContainer}>
     <Text style={{fontWeight:"300",fontSize:15,color:"white", fontFamily: 'Montserrat',  fontWeight: 'normal'}}>Total Distance </Text>
     <Text style={{fontWeight:"300",fontSize:18,color:"white",fontFamily: 'Montserrat',  fontWeight: 'normal'}}><MaterialCommunityIcons name="map-marker-distance" size={25} color="white" />  20,000 km </Text> 
    <TouchableOpacity>
    <Text style={{fontWeight:"300",fontSize:12,color:"hsl(222, 100%, 63%)"}}>History  <FontAwesome6 name="chevron-right" size={9} color="hsl(222, 100%, 63%)" /> </Text>
    </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({      
    mainContainer : {  
        backgroundColor : 'hsl(222, 23%, 14%)',
        width : 185,
        height : 144,
        borderRadius : 20,
        justifyContent : 'space-around',
        paddingHorizontal : 20,
        paddingVertical : 5,
        alignItems:"flex-start",
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 7, // For Android
     },



        })