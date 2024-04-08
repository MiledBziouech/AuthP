import { View, Text,StyleSheet,TouchableOpacity } from 'react-native'
import React from 'react'
import Feather from 'react-native-vector-icons/Feather'
export default function MotorPower() {
  return (
    <View style={styles.mainContainer}>

      <Text style={styles.text2}>Motor Power</Text>

      <View style={styles.numContainer}>
      <TouchableOpacity style={styles.number}>
            <Text style={styles.text}>1</Text>

      </TouchableOpacity>
      < TouchableOpacity  style={{borderWidth:2,padding:5,borderColor:"rgba(8, 253, 218, 1)",borderRadius:15}}>
      <View style={[styles.number,{marginBottom:5}]}>
            <Text style={styles.text}>2</Text>

      </View  >
      <Feather name="check" size={35} color="rgba(8, 253, 218, 1)" style={{alignSelf:"center"}}/>
      </TouchableOpacity>
      <TouchableOpacity style={styles.number}>
            <Text style={styles.text}>3</Text>

      </TouchableOpacity>
      </View>
    </View>
  )
}



const styles = StyleSheet.create({

  number: {
    alignContent: 'center',
    justifyContent: 'center',
    height: 35,
    width: 35,
    backgroundColor: 'rgba(64, 122, 255, 0.5)',
    borderRadius: 5,
  },  
  text : {  
    color: 'white',
    fontSize: 30,
   
    textAlign: 'center',
    fontFamily: "Inter-Bold"
  
  },  
  numContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    alignItems: "baseline",
  
  },
  mainContainer: {
    
  
    backgroundColor: 'hsl(223, 25%, 11%))',
    height: 140,
    width: "100%",
    alignContent: 'center',
    justifyContent:'space-evenly' ,
    elevation: 7  ,
    borderRadius: 10,

  },  
  text2: {
    textAlign:"center" ,
    color:"white",
    fontSize:16,
    fontFamily: "Poppins-Medium",
  },

})