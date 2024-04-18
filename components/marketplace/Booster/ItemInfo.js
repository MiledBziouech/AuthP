import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import * as Progress from 'react-native-progress';
export default function ItemInfo() {
    const xp=0.2
    const energy=1
    const reward=0.5
  return (
    <View style={styles.mainContainer}>
      <View style={styles.barContainer}>
        <Text style={styles.text} >XP ratio</Text>
        <Text  style={[{ marginVertical:4,},styles.text]}>energy</Text>
        <Text style={styles.text} >reward ratio</Text>
        
      </View>

      <View style={styles.secondContainer}>
        <View >
      <Progress.Bar progress={xp} width={170} height={10}  borderRadius={20} borderColor='rgba(217, 217, 217, 1)' color='rgba(64, 122, 255, 1)' borderWidth={0.5} unfilledColor='rgba(217, 217, 217, 1)' />
      </View>
      <View style={styles.barContainer}>
      <Progress.Bar progress={energy} width={170} height={10}  borderRadius={20} borderColor='rgba(217, 217, 217, 1)' color='rgba(64, 122, 255, 1)' borderWidth={0.5} unfilledColor='rgba(217, 217, 217, 1)' />
      </View >
      <View  >
      <Progress.Bar progress={reward} width={170} height={10}  borderRadius={20} borderColor='rgba(217, 217, 217, 1)' color='rgba(64, 122, 255, 1)' borderWidth={0.5} unfilledColor='rgba(217, 217, 217, 1)'/>
      </View>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({

    mainContainer:{
        height:120  ,
    
        width :'90%',
        backgroundColor:'rgba(255, 255, 255, 0.05)',
        borderRadius:20,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around',

      
    },
    secondContainer:{
    
            justifyContent:'center',
            alignItems:'center',
            


    },

    barContainer:{
    marginVertical:15,
     
    },
    text:{
     fontFamily:'Poppins-Bold',
     fontSize:14,
    color:'white',
    letterSpacing:-0.3,
    }
    




})