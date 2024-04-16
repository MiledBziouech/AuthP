import { View, Text,StyleSheet,TouchableOpacity} from 'react-native'
import React from 'react'

export default function DarkButton({handleClick,title}) {
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
        borderWidth: 1,
        borderColor: 'rgba(64, 122, 255, 1)',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
          },
        
        text:{
             fontFamily: 'Poppins-Meduim',
             color: 'rgba(64, 122, 255, 1)',
             fontSize: 16,


        }


 })