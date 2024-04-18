import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function RarityLevelRatio({style}) {
    const rarity = 'Common';
    const level = 6;
    const ratio = 1.3;

  return (
    <View style={[styles.infoContainer,style]}>

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
  )
}

const styles = StyleSheet.create({



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

 })