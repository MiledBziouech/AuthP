import { View, Text ,StyleSheet} from 'react-native'
import React from 'react'
import * as Progress from 'react-native-progress';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
export default function Energy({style}) {
    const energyPercentage = 100;
    const energy = energyPercentage/100;
  return (
    <View style={[styles.mainContainer,style]}>
      <Progress.Bar progress={energy} width={178} height={10}  borderRadius={20} borderColor='rgba(217, 217, 217, 1)' color='rgba(64, 122, 255, 1)' borderWidth={1}/>
      <View style={styles.secondContainer}>
            <MaterialCommunityIcons name="lightning-bolt" size={20} color='hsl(39, 100%, 63%)' />
            <Text style={styles.text}>{energyPercentage}%</Text>
           


      </View>
    </View>
  )
}
const styles = StyleSheet.create({ 

text:{
  fontFamily:'Poppins-Bold',
  fontSize:14,
  color:'white',

 

},
mainContainer:{ 
    width:"90%",
    alignItems:"center",
    justifyContent:"center",

},
secondContainer:{       
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"center",
    marginTop:3,
}



 })