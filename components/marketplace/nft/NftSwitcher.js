import { View, Text ,StyleSheet,TouchableOpacity} from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useState } from 'react';
export default function NftSwitcher() {
    const texts = ['BLUE WOLF - LR01', 'Red WOLF - LR01',"WHITE WOLF - LR01"]; // Add your texts here
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const handleLeftClick = () => {
      setCurrentIndex((currentIndex - 1 + texts.length) % texts.length);
    };
  
    const handleRightClick = () => {
      setCurrentIndex((currentIndex + 1) % texts.length);
    };
  
  return (
    <View style={styles.mainContainer}>
        <TouchableOpacity onPress={handleLeftClick} on>
            <AntDesign name="left" size={20} color="white"  /> 
        </TouchableOpacity>
        <Text style={styles.text}>{texts[currentIndex]}</Text>
        <TouchableOpacity onPress={handleRightClick}>   
            <AntDesign name="right" size={20} color="white" /> 
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({

    mainContainer:{ 
        
    flexDirection:'row',
    justifyContent:'space-between',
    width:'85%',
    alignItems:"center", 
    marginTop:20,

},
text:{
    color:'white',
  fontFamily:"Poppins-Bold",
  fontSize  : 32,

}
})    