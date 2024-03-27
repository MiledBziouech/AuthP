import { View, Text,ActivityIndicator, StyleSheet  } from 'react-native'
import React from 'react'
import { useState, useRef } from 'react'
import ColorPicker from 'react-native-wheel-color-picker'
export default function WheelColorPicker() {
    const picker = useRef(null);
    const [currentColor, setCurrentColor] = useState(null);
    const [swatchesOnly, setSwatchesOnly] = useState(false);
    const [swatchesLast, setSwatchesLast] = useState(false);
    const [swatchesEnabled, setSwatchesEnabled] = useState(true);
    const [disc, setDisc] = useState(false);
  
    const onColorChange = (color) => {
      // handle color change
    };
  
    const onColorChangeComplete = (color) => {
      // handle color change complete
    };
  
  return (
    
    <View style={styles.mainContainer}>
    <Text style={{color:"white",fontSize:20,fontWeight:"bold",marginBottom:5}}>Ambient light color</Text>
    <View style={styles.wheelContainer}>
      <ColorPicker
      color={currentColor}
      onColorChange={(color) => onColorChange(color)}
      onColorChangeComplete={color => onColorChangeComplete(color)}
      thumbSize={20}
      sliderSize={15}
        noSnap={false}
      row={false}
      useNativeDriver={true}
      
      
      
  
    
      />
      </View>
      
    </View>

  )
}
const styles = StyleSheet.create({
    mainContainer: {
        height:340,width:230,
        backgroundColor: 'hsl(222, 23%, 14%)',
        justifyContent  : 'center',
        alignItems: 'center',
        padding: 20,
        elevation: 7,
        borderRadius: 10,
    },
    wheelContainer: {
        height:300,width:200,
        flex: 1,
   
    },


})