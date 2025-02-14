import { View, Text, StyleSheet,Switch, TouchableOpacity } from 'react-native'
import React from 'react'
import MaterialCommunityIcons   from 'react-native-vector-icons/MaterialCommunityIcons'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import AntDesign   from 'react-native-vector-icons/AntDesign'
import { useState } from 'react'
export default function Light() {
  const [isOn, setIsOn] = useState(false);
  return (
    <View style={styles.mainContainer}>
       

            
            <View style={{alignItems:"center"}}>
                <Text style={{marginVertical:16  ,fontSize:16,color:"white",fontFamily: 'Montserrat',fontWeight:"normal"}}>Light</Text>

                <TouchableOpacity onPress={() => setIsOn(!isOn)}>
                  <AntDesign name="caretup" size={13} color="hsl(222, 100%, 63%)"  />
                </TouchableOpacity>

                <Text style={{marginVertical: 10  ,fontSize:15,color:"white",fontFamily: 'Montserrat',fontWeight:"normal"}}>{isOn ? 'On' : 'Off'} </Text>

                <TouchableOpacity onPress={() => setIsOn(!isOn)}>
                  <AntDesign name="caretdown" size={13} color="hsl(222, 100%, 63%)" />
                </TouchableOpacity>

            </View>

            <View style={{justifyContent:"space-around",alignItems:'center'}}>
                <EvilIcons name="spinner" size={59} color="hsl(222, 100%, 63%)"  style={{ height:60,marginTop:8}} /> 
                <View style={{marginBottom:36 }}>
                  
                    <Text style={{color:"hsl(217, 99%, 60%)" ,fontWeight:"300",fontFamily: 'Montserrat',fontWeight:"normal",fontSize:12}}>Optimum</Text>
                </View>
            </View>
        
            


  

         







              
            </View>





    
  )
}
const styles = StyleSheet.create({      
    mainContainer : {  
        backgroundColor : 'hsl(222, 23%, 14%)',
        width : 185, 
        height : 144,
        borderRadius : 20,
        flexDirection : 'row',
       justifyContent : 'space-around',
       shadowColor: '#000',
       shadowOffset: { width: 0, height: 2 },
       shadowOpacity: 0.3,
       shadowRadius: 4,
       elevation: 7, // For Android
       
      
     },



        })