import { View, Text ,ImageBackground,Image, TouchableOpacity,StyleSheet} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
export default function BikeHealth() {
  const navigation = useNavigation()
  return (
    <View  style={styles.mainContainer}>
        <TouchableOpacity  onPress={()=>{navigation.navigate('Home1')}}  >
          
        <Image style={{width: 50, height: 50}} source={require('../../assets/Home0/back.png')} />
        <Text style={styles.text}>Bike</Text>
     
        </ TouchableOpacity>

        <TouchableOpacity   onPress={()=>{navigation.navigate('Home2')}}>

        <Image style={{width: 50, height: 50}} source={require('../../assets/Home0/back.png')} />
        <Text style={styles.text}>Health</Text>

        </ TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
    mainContainer: {
      
      alignItems:"center",
      justifyContent:"space-between" ,
      flexDirection:'row',
      width:'48%',
      height:120,
      backgroundColor:'rgba(28, 33, 45, 1)',
      marginLeft:5,
      padding:15,
      borderRadius:20,
      
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.5,
      shadowRadius: 2,
      elevation: 7,
    },
    text : {
      marginTop:10,
      color:'white',
      fontSize:14,
     
      textAlign:'center',
      fontFamily:'Montserrat',
      fontWeight:'500',
    } 


 } )