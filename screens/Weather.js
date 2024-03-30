import { View, Text,ActivityIndicator } from 'react-native'
import { Button,ImageBackground, SafeAreaView,StatusBar,  ScrollView} from 'react-native'
import React from 'react'
import { useEffect ,useState} from 'react'
import Geolocation from 'react-native-geolocation-service';
import { Platform, PermissionsAndroid } from 'react-native';
import MainWeather from '../components/Weather/MainWeather';
const openWeatherKey ="2855365d668dbb5d21c1ad7d42f1afee"
const baseUrl ="https://api.openweathermap.org/data/2.5/weather?"
export default function Weather() {
    const [weather, setWeather] = useState()
    const [location, setLocation] = useState()

    async function requestLocationPermission() {
        try {
          if (Platform.OS === 'android') {
            const granted = await PermissionsAndroid.request(
              PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
           
              // You can now proceed to get the user's location.
            } else {
              console.log('Location permission denied.');
            }
          }
        } catch (error) {
          console.error('Error requesting location permission:', error);
        }
      }
      const getLocation = async () => {
        await requestLocationPermission();
        Geolocation.getCurrentPosition(
            (position) => {
              setLocation(position.coords);
            
            },
            (error) => {
              // See error code charts below.
                console.log(error.code, error.message);
            },
            { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
          );
        
        }
    useEffect(() => {      getLocation() }, [])
    const fetchWeather = async () => {

      
        if(!location) 
        {return;}
        
        const lat = location.latitude;
        const lon = location.longitude;

        const response = await fetch(`${baseUrl}lat=${lat}&lon=${lon}&appid=${openWeatherKey}&units=metric`)
        const data = await response.json()
        console.log(data)
      
        setWeather(data)
    
    }
    useEffect(() => {
        if( location )
        fetchWeather()
    }, [location])

    if (!weather) {
        return (
          <ActivityIndicator    size="large" color="#0000ff" /> 
        )
    }
  return (
    <SafeAreaView style={{flex:1,width:'100%',}}> 
 
  
    
    <ImageBackground style={{justifyContent:"center",backgroundColor :"black",flex:1,width:'100%',alignItems:'center'}} source={require('../assets/Wheather.png')} >
      
    <StatusBar hidden={true}  />
    <MainWeather data={{ description: weather.weather[0].description, temperature: weather.main.temp, max: weather.main.temp_max, min: weather.main.temp_min, state: weather.name }} />

    
    </ImageBackground>
  
    </SafeAreaView >
  )
}