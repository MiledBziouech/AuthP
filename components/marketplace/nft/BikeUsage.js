import { View, Text,StyleSheet,Image} from 'react-native'
import React from 'react'
import { useState } from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
export default function BikeUsage() {
    const min = 25;
    const sec = 30;
    const [usage, setUsage] = useState(60);
    const rarity = 'Common';
    const level = 6;
    const ratio = 1.3;

    const filledHeight = usage * 0.01 * 400; // Adjust as needed
  return (
    
    <View style={[styles.batteryOutline, { height: 400 }]}>
     
    <View
        style={[
            styles.batteryFill,
            { height: filledHeight, backgroundColor: 'rgba(64, 122, 255, 0.3)' ,},
        ]}
        
    />
    <View style={styles.textContainer}>
    <Text style={styles.text2}>{usage}%</Text>  
    <Text style={styles.text1}>{min} min {sec} sec remaining</Text>
    </View>
     <Image source={require('../../../assets/markeplace/bike.png')} style={styles.image}/>

     <View style={styles.infoContainer}>

       <View style={styles.mainRarityContainer}>
            <Text style={styles.text3} >Rarity</Text>
            <View style={styles.rarityContainer}>
                <MaterialIcons name="diamond" size={20} color="hsl(270, 80%, 50%)" />
                <Text style={styles.text4}>{rarity}</Text>
            </View>
       </View>
       <View style={styles.mainRarityContainer}>
            <Text style={styles.text3} >Level</Text>
            <View style={styles.rarityContainer}>
            <MaterialCommunityIcons name="lightning-bolt" size={20} color='hsl(39, 100%, 63%)' />
                <Text style={styles.text4}>{level}</Text>
            </View>
       </View>

       <View style={styles.mainRarityContainer}>
            <Text style={styles.text3} >Ratio</Text>
            <View style={styles.rarityContainer}>
            <MaterialCommunityIcons name="lightning-bolt" size={20} color='hsl(39, 100%, 63%)' />
                <Text style={styles.text4}>{ratio}</Text>
            </View>
       </View>



     </View>
        
</View>
  )
}


const styles = StyleSheet.create({

    batteryOutline: {
        width: 380,
         borderRadius: 25,
     
        overflow: 'hidden',
        justifyContent:"space-around",
        alignItems:"center"
    },
    batteryFill: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
    },
    image:{
        width:350,
        height:226,
        
        },
      
        text1:{
            fontFamily: "Poppins-Bold",
            fontSize: 15,
            color: 'white',

        },
        text2:{
                fontSize    : 26,
                color       : 'rgba(78, 73, 242, 1)',
                fontFamily: "Poppins-Bold",
                marginRight:5,
                

        }, 
        textContainer :{
            alignItems:"center",
            justifyContent:"center",
            flexDirection:"row",


        },
        rarityContainer:{
            justifyContent:"center",
            alignItems:"center",
            flexDirection:"row",
            height:37,
           
            backgroundColor:"rgba(64, 122, 255, 0.1)", 
            borderRadius:20,  
            paddingHorizontal:15 




        },
        mainRarityContainer:{
                justifyContent:"center",
                alignItems:"center",

        },
        text3:{


            fontFamily: "Poppins-Bold",
            fontSize: 20,
            color: 'white',
            
            letterSpacing:-0.3,


        },
        
        text4:{
            
                fontFamily: "Poppins-Regular",
                fontSize: 17,
                color: 'white',
                letterSpacing:-0.3,
             

            
        },
        infoContainer:{    
            flexDirection:"row",    
            width:"90%",
            justifyContent:"space-around",



         }   






});
