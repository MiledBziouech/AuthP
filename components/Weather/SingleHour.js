import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import Moment from 'moment';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'   

export default function SingleHour({data}) {
    const currentHour = Moment().format('H');
    const WatherTime = Moment(data.dt_txt).format('H');



    const backgroundColor = currentHour === WatherTime
    ? 'rgba(64, 122, 255, 1)' // Daytime color
    : 'rgba(64, 122, 255, 0.2)'; // Nighttime color
    const time =  currentHour === WatherTime
    ? 'Now' // Daytime color
    : Moment(data.dt_txt).format('H a'); 
  
    function renderIcon(iconName) {
        switch (iconName) {
          case 'Clear':
            return  'weather-sunny' ;
          case 'Clouds':
            return  'weather-cloudy' ;
          case 'Atmosphere':
            return 'weather-hail' 
        case 'Snow':    
            return 'weather-snowy-heavy'
        
        case 'Rain':
            return 'weather-pouring'
        case 'Drizzle':
            return 'weather-rainy'

        case 'Thunderstorm':
            return 'weather-lightning'
        
        case 'Mist':
            return 'weather-fog'
        
            
            
          default:
            return "none";
        }
      }



  return (
    <View style={[styles.mainContainer, { backgroundColor }]}>
      <Text style={styles.text}> {time}</Text>
      <MaterialCommunityIcons name={renderIcon(data.weather[0].main)} size={28} color='white' />
      <Text style={styles.text}>{Math.round(data.main.temp)}°</Text>
    </View>
  )
}   
const styles = StyleSheet.create({

    mainContainer: {
   
        justifyContent: "space-between",
        alignItems: 'center',
        width: 65,
        height: 140,
        borderColor: 'rgba(255, 255, 255, 0.2)', 
        borderWidth:1.2,
        borderRadius: 25,
        padding: 10,

       
        
     
     
    },
    text : {
        color: 'white',
        fontSize: 15,
    }


})   