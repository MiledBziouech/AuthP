import { View, Text ,StyleSheet} from 'react-native'
import React from 'react'

export default function ActiveBoosters() {
  return (
    <View  style={styles.mainContainer}>
      <Text style={styles.text2}>ActiveBoosters</Text>
      <View style={styles.activeBoosterContainer}>
            <Text style={styles.text}>
                You have no active boosters.
            </Text>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({  

    activeBoosterContainer:{
        height: 80,
        width: '100%',
        justifyContent: 'center',
        alignItems: "flex-start",
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
        borderRadius: 20,
    
    },
    mainContainer:{
        width: '90%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text:{

            marginLeft: 20,
            fontFamily: 'Poppins-Bold',
            fontSize: 15,
            letterSpacing: -0.3,
            color: '#FFFFFF',



    },
    text2:{
        fontFamily: 'MontserratSubrayada-Bold',
        fontSize: 20,
        color: '#FFFFFF',
        marginBottom: 10,



    }

})