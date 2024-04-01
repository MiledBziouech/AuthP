import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import Entypo   from 'react-native-vector-icons/Entypo'
export default function MainWeather({data}) {
  return (
    <View style={styles.mainContainer}>
     <Entypo name="location-pin" size={37} color="white" style={{marginRight:-20}}  />
    <View style={styles.container}>
    <View  style={{ alignContent:"center",alignItems:"center" ,width:"99%",}}>
      <Text style={styles.text1}>{data.name}</Text>
    </View>
      <View style={{ alignContent:"center",alignItems:"center" ,width:"99%",}}>

      <Text style={styles.text2}>{Math.round(data.main.temp)}<Text >°</Text></Text>
      </View>
     
     <View style={{justifyContent:'center',alignItems:'center' ,width:"99%",}}>

     <View style={{justifyContent:'center',alignItems:'center',width:"99%"}}>
      <Text style={styles.text3}>{data.weather[0].description}</Text>
      </View>
     <View style={{flexDirection:'row',justifyContent:'space-evenly',alignItems:'center', marginTop :5 ,width:"72%"  }}>
      <Text style={styles.text4}>H:{Math.round(data.main.temp_max)}°</Text>
      <Text style={styles.text5}>L:{Math.round(data.main.temp_min)}°</Text>
      </View>

      </View>
      </View>   
    </View>
  )
}

const styles = StyleSheet.create({
    mainContainer: {
     
     flexDirection: 'row',
    justifyContent: "center",
      alignItems: 'baseline',

        width: "100%",
        
        
       
        },
    container: {
   
      justifyContent: 'center',
      alignItems: 'center',

     
    },
    text1: {
        
      fontSize: 40,
      fontWeight: '200',
      color: 'white',
      textAlign : 'center',
    },
    text2: {
        fontSize: 90,
        fontWeight: '200',
        color: 'white',
        textAlign : 'center',
      },
      text3: {
        fontSize: 20,
        fontWeight: '400',
        color: 'hsl(233, 5%, 63%)',
        textAlign : 'center',
      },
      text5: {
        fontSize: 16,
        fontWeight: '400',
        color: 'white',
        textAlign : 'center',
      },
      text4: {
        fontSize: 16,
        fontWeight: '400',
        color: 'white',
        textAlign : 'center',
        
      },

    
  });