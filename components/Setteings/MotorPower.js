import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import Feather from 'react-native-vector-icons/Feather'
export default function MotorPower() {
  return (
    <View style={styles.mainContainer}>
      <Text style={{textAlign:"center" ,color:"white",fontSize:20}}>Motor Power</Text>
      <View style={styles.numContainer}>
      <View style={styles.number}>
            <Text style={styles.text}>1</Text>

      </View>
      <View  style={{borderWidth:2,padding:5,borderColor:"rgba(8, 253, 218, 1)",borderRadius:15}}>
      <View style={[styles.number,{marginBottom:5}]}>
            <Text style={styles.text}>2</Text>

      </View  >
      <Feather name="check" size={35} color="rgba(8, 253, 218, 1)" style={{alignSelf:"center"}}/>
      </View>
      <View style={styles.number}>
            <Text style={styles.text}>3</Text>

      </View>
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
    fontSize: 29,
    fontWeight: 'bold',
    textAlign: 'center',
  
  },  
  numContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    alignItems: "baseline",
  
  },
  mainContainer: {
    
  
    backgroundColor: 'hsl(223, 25%, 11%)',
    height: 140,
    width: "50%",
    alignContent: 'center',
    justifyContent:'space-evenly' ,
    elevation: 7  ,
    borderRadius: 10,

  },  

})