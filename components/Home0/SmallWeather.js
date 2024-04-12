import { View, Text,StyleSheet ,TouchableOpacity} from 'react-native'
import React from 'react'

export default function SmallWeather() {
  return (
    <TouchableOpacity style={styles.maincontainer}> 
            <View>
                    <Text  style={styles.text1}>10:00 PM</Text>
                    <Text style={styles.text2}>18 MARCH</Text>
            </View>
            
            <View style={styles.text2}>
                    <Text style={styles.text3} >20 C | cloudy</Text>
                    <Text style={styles.text4} >10-15 MPH</Text>
            </View>
            

    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({  
maincontainer: {

height: 120,
width: "48%",
backgroundColor: "rgba(28, 33, 45, 1)",
borderRadius: 20,
justifyContent  : "space-around",
alignItems : "flex-start",
  paddingLeft: 20,
marginRight: 5,


  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.5,
  shadowRadius: 2,
  elevation: 7,

},  
text1: {     
    fontFamily:"Azonix-Regular",
    fontSize: 22,
    color: "rgba(2, 72, 231, 1)",




   },
text2: {     
    fontFamily:"Raleway-Regular",
    fontSize: 16,
    color: "white",


   },
text3: {     
    fontFamily:"Azonix-Regular",
    fontSize: 20,
    color: "rgba(2, 72, 231, 1)",


   },
text4: {     

    fontFamily:"Arial-Regular",
    fontSize: 14,
    color: "white",

   },



})

