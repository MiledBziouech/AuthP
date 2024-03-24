import { View, Text ,Image, StyleSheet,ImageBackground,TouchableOpacity} from 'react-native'
import React from 'react'

export default function ProfileImage() {
  return (
    <View style={{justifyContent  :"center",alignItems:"center"}}>
        <ImageBackground source={require('../../assets/Profile/ProfileCercle.png')} style={styles.imageContainer}>
            <Image source={require('../../assets/Profile/Ellipse16.png')} style={styles.image1}/>
        <TouchableOpacity>
            <Image source={require('../../assets/Profile/Pen.png')} style={styles.image2}/> 
        </TouchableOpacity> 
        </ImageBackground>
        <View style={{justifyContent  :"center",alignItems:"center" ,marginLeft:30}}>
            <Text style={styles.text1}>Mr. Wheelz</Text>
            <Text style={styles.text2}>Profit Maker</Text>
        </View>

    </View>
  )
}
const styles=StyleSheet.create({   

    image1:{
        width: 140,
        height: 140,
        borderRadius: 70,
        position: 'absolute',
        top: 72.8,
        left: 145,
        borderWidth: 6,
        borderColor: 'hsl(222, 66%, 48%)',
       
       
       
    },
    image2:{
        width: 40, 
        height: 40,
        position: 'absolute',
        bottom: 0,
        left: 55,
    },
    text1: {
        color: 'white',
        fontSize: 35,
        fontWeight: '800',
      
    },
    text2: {
        color: 'hsl(225, 5%, 46%)',
        fontSize: 22,
        fontWeight: '800',
     
    },
    imageContainer: {
        width: 400,
        height: 400,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 200,
        marginBottom: -150

      
    },


 })