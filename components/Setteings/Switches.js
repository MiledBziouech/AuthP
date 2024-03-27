import { View, Text,Sty, StyleSheet} from 'react-native'
import React from 'react'
import ToggleSwitch from 'toggle-switch-react-native'
import { useState } from 'react'
export default function Switches() {
    const [isEnabled, setIsEnabled] = useState(true);
    const handleToggle = (isOn) => {
        setIsEnabled(!isOn);
    };
    const toggleSwitchProps = {
       
        onColor: "white",
        offColor: "white",
        thumbOffStyle: {backgroundColor: "rgba(105, 121, 248, 1)"},
        thumbOnStyle: {backgroundColor: "rgba(105, 121, 248, 1)"},
        size: "large",
   
      };
  return (
    <View style={styles.mainContainer}>
    <View style={{justifyContent:"space-between",flexDirection:"row" ,alignItems:"center",width:"98%",padding:20}}> 
     <Text style={{color:"white",fontSize:20,fontWeight:"bold"}}>Auto Connect</Text>
         <ToggleSwitch
  isOn={isEnabled}
  onToggle={isOn => handleToggle(isEnabled) }
{...toggleSwitchProps}
  
/>
 </View>
 <View style={{justifyContent:"space-between",flexDirection:"row" ,alignItems:"center",width:"98%",padding:20}}> 
     <Text style={{color:"white",fontSize:20,fontWeight:"bold"}}>Auto Connect</Text>
         <ToggleSwitch
  isOn={isEnabled}
  onToggle={isOn => handleToggle(isEnabled) }
{...toggleSwitchProps}
  
/>
 </View>
 <View style={{justifyContent:"space-between",flexDirection:"row" ,alignItems:"center",width:"98%",padding:20}}> 
     <Text style={{color:"white",fontSize:20,fontWeight:"bold"}}>View Notifications</Text>
         <ToggleSwitch
  isOn={isEnabled}
  onToggle={isOn => handleToggle(isEnabled) }
{...toggleSwitchProps}
  
/>
 </View>
 <View style={{justifyContent:"space-between",flexDirection:"row" ,alignItems:"center",width:"98%",padding:20}}> 
     <Text style={{color:"white",fontSize:20,fontWeight:"bold"}}>Light Sensor</Text>
         <ToggleSwitch
  isOn={isEnabled}
  onToggle={isOn => handleToggle(isEnabled) }
{...toggleSwitchProps}
  
/>
 </View>
 
    </View>
  )
}
const styles = StyleSheet.create({  

    mainContainer: {   
        gap:-30,
        backgroundColor:"hsl(222, 23%, 14%)",
        borderRadius: 10,
        width: "95%",
        elevation: 7,
     },
  
});
      