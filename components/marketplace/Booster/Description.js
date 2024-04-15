import { View, Text ,StyleSheet} from 'react-native'
import React from 'react'
import { BlurView } from "@react-native-community/blur";
export default function Description({description}) {
  return (
    <View style={{width:"90%"}}>
    <Text style={styles.text1}>Description</Text>
    <View style={styles.mainContainer}>
      <Text style={styles.text}>{description}</Text>
    </View>
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
 
    justifyContent: 'center',
    alignItems: 'center',
    width:'100%',
    height:80,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: 20,
    padding: 7.4,
  },
  text: {
    fontFamily  : "Poppins-Medium",
    fontSize    :16,

  },
  text1: {
    fontFamily  : "Poppins-Bold",
    fontSize    : 26,
    color       : 'white',
    marginBottom: 10,
  },
});