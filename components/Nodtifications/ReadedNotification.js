import { View, Text ,TouchableOpacity,StyleSheet,Image} from 'react-native'
import React from 'react'
import Octicons from 'react-native-vector-icons/Octicons';

export default function ReadedNotifications({name,discription,time}) {
  return (
    <TouchableOpacity style={styles.mainContainer}>
            <View style={{justifyContent:'flex-start',alignItems:'center',flexDirection:"row"}}>
            
           
            <Image source={require('../../assets/face.jpg')} style={{width:55,height: 55,marginLeft:10 ,borderRadius:27}} />
            <View style={{marginLeft:10,gap:5}}>
            <Text style={{color:"white",fontSize:20,fontWeight:"bold" ,textAlign:"left"}}>{name}</Text>
            <Text style={{color:"white",fontSize:13,fontWeight:"bold" ,textAlign:"left",color:"rgba(125, 120, 120, 1)"}}>{discription}</Text>
            </View>
            </View>
         
            <Text style={{color:"white",fontSize:13,fontWeight:"bold" ,textAlign:"left",color:"rgba(125, 120, 120, 1)"}}>{time}</Text>
          
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

})  