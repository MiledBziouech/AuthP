import React, { useState } from "react";
import Slider from "react-native-smooth-slider";
import { AppRegistry, StyleSheet, Text,View } from "react-native";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Entypo from 'react-native-vector-icons/Entypo';
export default function LightInten() {
    const [value, setValue] = useState(0.2);
  return (
    <View style={styles.mainContainer}>
    <Text style={{color:"white",fontSize:20,fontWeight:"bold",marginBottom:5}}>Light Intensity</Text>

    <Entypo name="light-up" size={35} color="rgba(126, 126, 126, 1)" />
    <GestureHandlerRootView style={styles.container}>
      <Slider
        value={value}
        useNativeDriver={true}
        onValueChange={value => setValue(value)}
        minimumTrackTintColor="rgba(25, 121, 231, 1)"
        maximumTrackTintColor="rgba(183, 212, 242, 1)"
        thumbTintColor="rgba(25, 121, 231, 1)"
        trackStyle={{height: 5, borderRadius: 5}}
        thumbStyle={{width: 15, height: 15, borderRadius: 10}}
        
      />
     
    </GestureHandlerRootView>

    </View>
  )
}
const styles = StyleSheet.create({
    container: {
      marginLeft: 5,
      marginRight: 5,
      width : "99%",
    },
    mainContainer: {
        height:160,width:"50%",
        backgroundColor: 'hsl(222, 23%, 14%)',
        justifyContent  : "space-between",
        alignItems: 'center',
        padding: 13,
        elevation: 7,
        borderRadius: 10,

    },
  });
  