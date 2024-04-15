import { View, Text,StyleSheet ,Image,TouchableOpacity} from 'react-native'
import React from 'react'

export default function Pause() {
    const min = 30; 
    const RT =  380;

  return (
    <View style={styles.mainContainer}>
        <Image source={require('../../assets/PauseStopSuccess/Pause.png')} style={{width: 80, height: 80}} />
     
        <View style={styles.textContainer}>
                <Text style={styles.text1}>Pause</Text>
                <Text style={styles.allText}>you have PAUSED</Text>
                <Text style={styles.allText}>your left time is  <Text style={styles.text2}>{min}</Text> mins !</Text>
                <Text style={styles.allText}>you gained: <Text style={styles.text2}>{RT}</Text> RT so far .</Text>
        </View>
        <View  style={styles.buttonContainer} >
                <TouchableOpacity style={styles.button}>
                        <Text style={styles.text3}>Resume</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button2}>
                        <Text style={styles.text4}>Stop</Text>
                </TouchableOpacity>
         </View>
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

    button2: {    
        width: 100,
        height: 40,
        backgroundColor: 'transparent',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: 'rgba(64, 122, 255, 1)',
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
    text4: {    
        color: 'rgba(64, 122, 255, 1)',
        fontSize: 16,
        fontFamily : 'Poppins-Medium',

        
    },
buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    },

});