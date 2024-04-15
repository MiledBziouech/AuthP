import { View, Text,StyleSheet ,Image,TouchableOpacity} from 'react-native'
import React from 'react'

export default function Success() {
    const min = 30; 
    const RT =  380;

  return (
    <View style={styles.mainContainer}>
        <Image source={require('../../assets/PauseStopSuccess/Success.png')} style={{width: 80, height: 80}} />
     
        <View style={styles.textContainer}>
                <Text style={styles.text1}>Success</Text>
                <Text style={styles.allText}><Text style={styles.text2}>Congratulations </Text>, you have</Text>
                <Text style={styles.allText}>completed your time  <Text style={styles.text2}>{min}</Text> mins !</Text>
                <Text style={styles.allText}>you gained: <Text style={styles.text2}>{RT}</Text> RT</Text>
        </View>

        <TouchableOpacity style={styles.button}>
                <Text style={styles.text3}>Claim</Text>
        </TouchableOpacity>

    </View>
  )
}
const styles = StyleSheet.create({

mainContainer: {    

    width: '80%',
    height: 354,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: 20,
       
    alignItems: 'center',
    justifyContent: 'space-evenly',
       },
textContainer: {       
alignItems: 'center',
justifyContent: 'center',

     },
button: {    
    width: 120,
    height: 40,
    backgroundColor: 'rgba(64, 122, 255, 1)',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    },




    allText: {
        color: 'white',
        fontSize: 12,
        fontFamily : 'Poppins-Regular',
    },
    text1: {    
        color: 'white',
        fontSize: 16,
        fontFamily : 'Poppins-Medium',
        marginBottom: 10,
    },
    text2: {    
        fontFamily : 'Poppins-Bold',
    },  
    text3: {    
        color: 'white',
        fontSize: 16,
        fontFamily : 'Poppins-Medium',
        
    },

});