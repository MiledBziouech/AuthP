import { View, Text,StyleSheet,TouchableOpacity } from 'react-native'
import React from 'react'

export default function RewardsNft() {
  return (
    <View style={styles.mainContainer}>



       
        
        <TouchableOpacity>
        <View style={{alignItems:"center",}}>
        <Text style={styles.text1}>Total rewards</Text>
        <View style={styles.line}></View>
        </View>
        </TouchableOpacity>
        <TouchableOpacity>
        <View style={{alignItems:"center"}}>
         <Text style={styles.text1}>By NFT</Text>
         <View style={styles.line2}></View>
         </View>
        </TouchableOpacity>
        
    </View>
  )
}
const styles = StyleSheet.create({   
    mainContainer: {
     flexDirection: 'row',
     justifyContent: 'center',
     width: 350,
     alignItems:"center"     ,
      marginTop: 30,
      marginBottom: 20
       
    },

    text1: {
        color: 'white',
        fontSize: 22,
        fontWeight: '300',
        marginTop: 7
    },

line: {
backgroundColor: 'hsl(189, 100%, 50%)',
width: 160,
height: 3,
borderRadius: 5,
marginTop: 5

 },
 line2: {
     backgroundColor: 'hsl(221, 25%, 15%)',

    width: 160,
    height: 3,
    borderRadius: 5,
    marginTop: 5
    
     },


})