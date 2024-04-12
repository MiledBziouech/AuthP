import { View, Text,StyleSheet,Image } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
export default function SecondWeather({data}) {
  const rain = data && data.rain ? data.rain['1h'] : 0;
  return (
    <View style={styles.mainContainer}>

      <View style={styles.rain}>
        <Image source={require('../../assets/wather/rain.png')} style={{width:25,height:25}}/>
        <Text style={styles.text}>{rain}%</Text>  
      </View>


      <View style={styles.rain}>
      <Image source={require('../../assets/wather/humidity.png')} style={{width:25,height:25}}/>
        <Text style={styles.text}>{Math.floor(data.main.humidity)}%</Text>  
      </View>



      <View style={styles.rain}>
      <Image source={require('../../assets/wather/wind.png')} style={{width:23,height:23}}/>
        <Text style={styles.text}>{Math.round(data.wind.speed)} km/h</Text>  
      </View>


    </View>
  )
}
const styles = StyleSheet.create({ 
  mainContainer: {
    width: '90%',
    justifyContent: "space-around",
    alignItems: 'center',
    backgroundColor: 'rgba(0, 16, 38, 0.5)',
    flexDirection: 'row',
    height: 50,
    borderRadius: 25,
    marginTop: -30,
  },
  rain: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

  
  },
  text : {  
    color: 'white',
    fontSize: 14,

    color: 'white' ,
    marginLeft:4,
    fontFamily:"Alata-Regular"
  } 
 })  