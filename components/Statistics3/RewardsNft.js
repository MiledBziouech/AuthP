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
      marginTop: 7,
      marginBottom: 30
       
    },

    text1: {
        color: 'white',
        fontSize: 15,
        marginTop: 7,
        fontFamily: 'Poppins-Medium'
    },

line: {
backgroundColor: 'hsl(189, 100%, 50%)',
width: 160,
height: 3,
borderRadius: 4,
marginTop: 5

 },
 line2: {
     backgroundColor: 'hsl(221, 25%, 15%)',

    width: 160,
    height: 3,
    borderRadius: 4 ,
    marginTop: 5
    
     },


})