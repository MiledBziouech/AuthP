import { View, Text, StyleSheet,TouchableOpacity } from 'react-native'
import { Animated } from 'react-native';
import React from 'react'

export default function TopBarV2({ state, descriptors, navigation, position }) {
    return (
    <View style={{width:'100%',alignItems:'center',justifyContent:'center',backgroundColor:'rgba(19, 23, 32, 1)'}}>
      <View style={styles.mainContainer}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;
  
          const isFocused = state.index === index;
  
          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });
  
            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name, route.params);
            }
          };
  

          
          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };
  


          const inputRange = state.routes.map((_, i) => i);
         
         
          const opacity = position.interpolate({
            inputRange,
            outputRange: inputRange.map(i => (i === index ? 1 : 0)),
          });
  

          return (
            <TouchableOpacity
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
             
            >
              <Animated.Text style={[styles.text1,{color: isFocused ? 'white' : 'hsl(220, 4%, 57%)',}]}>
                {label}
              </Animated.Text>

            </TouchableOpacity>
          );
        })}
      </View>
      </View>
    );
  }
const styles = StyleSheet.create({   
    
    mainContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around',
       
        backgroundColor: '#f0f0f0',
        width: "90%",
        height: 59,
        backgroundColor: 'hsl(222, 23%, 14%)',
  
       borderRadius: 15,
       borderWidth: 2,
       borderColor: 'rgba(49, 52, 60, 1)',
        
   
     
       
    },

    text1: {
       
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: 7
    },
 
line: {
backgroundColor: 'hsl(222, 100%, 44%)',
width:50,
height: 3,
borderRadius: 5,

 },


})