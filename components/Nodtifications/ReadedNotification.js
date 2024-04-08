import { View, Text ,TouchableOpacity,StyleSheet,Image} from 'react-native'
import React from 'react'
import Octicons from 'react-native-vector-icons/Octicons';

export default function ReadedNotifications({name,discription}) {
  return (
    <TouchableOpacity style={styles.mainContainer}>
            <View style={{justifyContent:'flex-start',alignItems:'center',flexDirection:"row"}}>
            
           
            <Image source={require('../../assets/face.jpg')} style={{width:55,height: 55,marginLeft:10 ,borderRadius:27}} />
            <View style={{marginLeft:10,gap:1}}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.description}>{discription}</Text>
            </View>
            </View>
         
            <Text style={styles.time}>2m</Text>
          
    </TouchableOpacity>
  )
}
const styles=StyleSheet.create({  
    mainContainer: {
        width:"96%",
        flexDirection: 'row',
        justifyContent:"space-between",
        alignItems: 'center',
        padding: 15,  
        backgroundColor: 'transparent',
        borderRadius: 10,
        
  
    },  
    name: {color:"white",fontSize:16 ,textAlign:"left",fontFamily:"Poppins-Medium"},
    description: {fontSize:12 ,textAlign:"left",color:"rgba(125, 120, 120, 1)" ,fontFamily:"Poppins-Regular"},

    time: {fontFamily:"Poppins-Regular" ,fontSize:10,textAlign:"left",color:"rgba(125, 120, 120, 1)"}
  })  