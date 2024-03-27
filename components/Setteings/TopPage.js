import { View, Text,StyleSheet ,Image, ImageBackground} from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
export default function TopPage() {
  return (
    <View style= {styles.mainContainer}>


        <View style= {styles.backContainer}>
            <Ionicons name="chevron-back-outline" size={15} color="hsl(222, 100%, 63%)" />
        </View>
        

        <View style={styles.imageContainer} >
            <Image source={require("../../assets/face.jpg")} style={styles.image} />    
        </View>

        <View style={styles.textConatiner} >

            <Text style={styles.text1}>Profit Wolf</Text>
            <Text style={styles.text2}>wheelz 07</Text>
            
        </View>


         <View style={styles.bellContainer}>

            <MaterialCommunityIcons name="bell" size={40 } color="white"  />
            <View style={styles.text3Conatiner}>
                <Text style={styles.text3}>
                    5
                </Text>
            </View>

        </View> 


       

            <ImageBackground source={require("../../assets/parametrebackground.png")}  style={styles.settingsBackImage} >

            <Ionicons name="settings" size={24}   style={styles.settingsIcon}/>

            </ImageBackground>

         








    </View>

  )
}
const styles = StyleSheet.create({
    mainContainer: {   
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        margin: 10,
         backgroundColor: "hsl(222, 25%, 10%)",
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
        elevation: 6, // For Android
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
        fontWeight:"600",
        fontSize: 13,
    },
    text2:{
        fontWeight: "bold",
        color: "white",
        fontSize: 20,
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
        color: "rgba(2, 72, 231, 1)",
        alignSelf: "center",
       bottom: 1,
 
   
    },

})
