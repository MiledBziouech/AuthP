import { View, Text,StyleSheet,Image,TouchableOpacity } from 'react-native'
import React from 'react'

export default function ButtomBar() {
  return (
    <View style={styles.mainContainer}>

        <TouchableOpacity>
                <Image source={require('../../assets/bike.png')} style={{width: 40, height: 30}}/>
        </TouchableOpacity>

        <TouchableOpacity>
                <Image source={require('../../assets/nft.png')} style={{width: 30, height: 30}}/>
        </TouchableOpacity>

        <TouchableOpacity>
                <Image source={require('../../assets/middleThor.png')} style={{width: 150, height: 150,marginBottom:40,marginHorizontal:-40 }} />
        </TouchableOpacity>

        <TouchableOpacity>
                <Image source={require('../../assets/stats.png')} style={{width: 40, height: 30}}/>
        </TouchableOpacity>

        <TouchableOpacity>
                <Image source={require('../../assets/contact.png')} style={{width: 30, height: 30}}/>
        </TouchableOpacity>
      
    </View>
  )
} 

const styles = StyleSheet.create({
    mainContainer: {
        width: "100%",
        height: 92,
        backgroundColor: 'hsl(224, 28%, 10%)',
        justifyContent: 'center',
        alignItems: 'center',
        borderTopRightRadius:40,
        borderTopLeftRadius:40,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    }



})