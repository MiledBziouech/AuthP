import { View, Text,StyleSheet ,Image, ImageBackground,TouchableOpacity} from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
export default function TopPage() {
    const navigation = useNavigation()
    const [name, setName] = useState("wheelz 07");
    const handleOnPress = () => {   
        if (navigation.canGoBack()) {
            navigation.goBack();
          } 
    }
  return (
    <View style= {styles.mainContainer}>


        <TouchableOpacity style= {styles.backContainer}  onPress={handleOnPress}>
            <Ionicons name="chevron-back-outline" size={15} color="hsl(222, 100%, 63%)" />
        </TouchableOpacity>
        

        <TouchableOpacity style={styles.imageContainer} >
            <Image source={require("../../assets/face.jpg")} style={styles.image} />    
        </TouchableOpacity>

        <View >

            <Text style={styles.text1}>Profit Wolf</Text>
            <Text style={styles.text2}>{name}</Text>
            
        </View>


         <TouchableOpacity style={styles.bellContainer}>

            <MaterialCommunityIcons name="bell" size={40 } color="white"  />
            <View style={styles.text3Conatiner}>
                <Text style={styles.text3}>
                    5
                </Text>
            </View>

        </TouchableOpacity> 


       
            <TouchableOpacity>

            <ImageBackground source={require("../../assets/parametrebackground.png")}  style={styles.settingsBackImage} >

            <Ionicons name="settings" size={24}   style={styles.settingsIcon}/>

            </ImageBackground>

            </TouchableOpacity>
         








    </View>

  )
}
const styles = StyleSheet.create({
    mainContainer: {   
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        margin: 10,
         backgroundColor: "transparent",
        width: "100%",
        paddingHorizontal: 15,
 
    
     },
    backContainer: {
        backgroundColor: "hsl(222, 36%, 14%)",
        borderRadius: 32/2, // Adjust the radius to make it a circle
        alignItems: "center",
        justifyContent: "center",
        padding: 8,
        width: 32,
        height: 32,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.4,
        shadowRadius: 6,
        elevation: 7, // For Android
    },
    image:{
        width: 67,
        height: 67,
        borderRadius: 128 / 2,
        borderColor: "black",
        borderWidth: 2,


    },
    imageContainer: {
       
        borderRadius: 95 / 2,
        borderColor: "hsl(222, 97%, 42%)",
        borderWidth: 3,
        padding: 3,
        
        
    },
 
    text1:{
       
        color: "hsl(218, 3%, 46%)",
        fontWeight:"500",
        fontSize: 13,
        fontFamily: "Montserrat",

    },
    text2:{
        fontWeight: "800",
        color: "white",
        fontSize: 20,
        fontFamily: "Montserrat",
    },

    bellContainer:{
        alignItems: "center",
        justifyContent: "center",
        width: 41,
        height: 41,
    },
    text3Conatiner:{
        position: "absolute",
        top: 0.4,
        right: 1,
        backgroundColor: "hsl(222, 98%, 46%)",
        width: 25,
        height: 25,
        borderRadius: 25 / 2,
        justifyContent: "center",
        alignItems: "center",
    },
    text3:{
        color: "white",
        fontSize: 10,
    },

    settingsBackImage:{
        padding: 15,
        width:60.25,
        height: 60.7,
            

        
    },
    settingsIcon:{
        color: "white",
        alignSelf: "center",
       bottom: 1,
 
   
    },

})
