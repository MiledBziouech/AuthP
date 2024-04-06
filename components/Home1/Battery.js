import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Switch, Text } from 'react-native';


const Battery = () => {
    const [batteryLevel, setBatteryLevel] = useState(80);

    const filledHeight = batteryLevel * 0.01 * 160; // Adjust as needed
    const [isEnabled, setIsEnabled] = useState(false);

    const toggleSwitch = () => {
      setIsEnabled((previousState) => !previousState);
    };
    return (
        <View style={styles.container}>
            <Text style={{color:"white",fontSize:15,marginBottom:20, fontFamily: 'Montserrat',fontWeight:"normal",marginTop:-9}}>Battery</Text>
            <View style={[styles.batteryOutline, { height: 160 }]}>
     
                <View
                    style={[
                        styles.batteryFill,
                        { height: filledHeight, backgroundColor: 'hsl(214, 92%, 58%)' ,},
                    ]}
                    
                />
                     <Text style={{color:'black',fontSize:44 ,color:"white",fontFamily: 'Montserrat',fontWeight:"normal"}}>{batteryLevel}</Text>
                     <Text style={{color:'black',fontSize:30,color:"white",marginBottom:-40 ,fontFamily: 'Montserrat',fontWeight:"normal"}}>%</Text>
            </View>
            <View style={{flexDirection:"row",justifyContent:"center",alignItems:"center",marginTop:15}}>
            <Text style={{color:"white",fontSize:12,fontFamily: 'Montserrat',fontWeight:"normal"}}>Pedal assist</Text> 
                                <Switch
                        trackColor={{ false: '#767577', true: 'hsl(217, 98%, 46%)' }}
                        thumbColor="hsl(223, 29%, 23%)"
                        ios_backgroundColor="hsl(223, 29%, 23%)"
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                        marginLeft={20}
                    />

            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        width: 185,
        height: 307,
        backgroundColor: 'hsl(222, 23%, 14%)',
        borderRadius: 25,
        padding: 25,

        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 7, // For Android
    },
    batteryOutline: {
        width: 111,
         borderRadius: 25,
        borderWidth: 1,
        borderColor: 'white',
        overflow: 'hidden',
        justifyContent:"center",
        alignItems:"center"
    },
    batteryFill: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
    },
});

export default Battery;