import { View, Text,StyleSheet ,TouchableOpacity} from 'react-native'
import React from 'react'

export default function NftTopBar() {
  return (
    <View style={styles.mainContainer}> 
      <TouchableOpacity><Text style={styles.text}>NFT</Text></TouchableOpacity>
      <TouchableOpacity><Text style={styles.text}>Items</Text></TouchableOpacity>
      <TouchableOpacity><Text style={styles.text}>Box</Text></TouchableOpacity>
      <TouchableOpacity><Text style={styles.text}>Booster</Text></TouchableOpacity>
      
    </View>
  )
}

const styles = StyleSheet.create({

    mainContainer:{
        width  :    '80%',
        flexDirection : 'row',
        justifyContent : 'space-between',
        alignItems : 'center',



    },
    text:{
        fontFamily : 'Montserrat-SemiBold',
        fontSize : 16,



    }







})