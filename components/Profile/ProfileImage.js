import { View, Text ,Image, StyleSheet,ImageBackground,TouchableOpacity} from 'react-native'
import React from 'react'

export default function ProfileImage() {
  return (
    <View style={{justifyContent  :"center",alignItems:"center",marginBottom:-120}}>
        
        <ImageBackground source={require('../../assets/Profile/ProfileCercle.png')} style={styles.imageContainer}>
            <Image source={require('../../assets/Profile/Ellipse16.png')} style={styles.image1}/>
        <TouchableOpacity>
            <Image source={require('../../assets/Profile/Pen.png')} style={styles.image2}/> 
        </TouchableOpacity> 
        <View style={{justifyContent  :"center",alignItems:"center" ,marginLeft:30,marginTop:120 }}>
            <Text style={styles.text1}>Mr. Wheelz</Text>
            <Text style={styles.text2}>Profit Maker</Text>
        </View>

        </ImageBackground>
     
    </View>
  )
}
const styles=StyleSheet.create({   

    image1:{
      
        borderRadius: 70,
        position: 'absolute',
      
        borderWidth: 4,
        borderColor: 'hsl(222, 66%, 48%)',
        width: 112,
        height: 112,
        top: 58,
        left: 117,
       
    },
    image2:{
        width: 35, 
        height: 35,
        position: 'absolute',
        top: 50,
        left: 44,
    },
    text1: {
        color: 'white',
        fontSize: 24,
        fontWeight: '900',
        fontFamily: 'Montserrat',

      
    },
    text2: {
        color: 'hsl(225, 5%, 46%)',
        fontSize: 16,
        fontWeight: '600',
        fontFamily: 'Montserrat',
    },
    imageContainer: {
        width: 320,
        height: 320,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 200,
    
 

      
    },


 })