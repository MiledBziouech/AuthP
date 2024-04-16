import { View, Text,StyleSheet,TouchableOpacity} from 'react-native'
import React from 'react'

export default function BlueButton({handleClick,title}) {
  return (
    <TouchableOpacity style={styles.mainContainer} onPress={handleClick}> 

      <Text style={styles.text}>{title}</Text>

    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({ 

        mainContainer: { 
            
          width:180,
          height: 40,
     
       
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(64, 122, 255, 1)',
          },
        
        text:{
             fontFamily: 'Poppins-Meduim',
             color: 'white',
             fontSize: 16,


        }


 })