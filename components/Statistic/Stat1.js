import { View, Text ,StyleSheet} from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Trip from './Trip';
import Trip2 from './Trip2';
import CercleStatics from './CercleStatics';
import CercleStatic2 from './CercleStatic2';


export default function Stat1() {
    function EmptyTabBar() {
        return null;
    
      }
      const Tab = createMaterialTopTabNavigator();
  return (
    <View style={{width:'100%' ,alignItems:'center',justifyContent:"center"}}>
      
      <View style={{ height: 270 ,width:"100%" ,alignItems:"center",justifyContent:'center' }}>
            <Tab.Navigator tabBar={EmptyTabBar} style={styles.trip} 
    
            sceneContainerStyle={{backgroundColor:"rgba(19, 23, 32, 1)" ,alignItems:"center",justifyContent:"center"}}
            >
              <Tab.Screen name="Trip" component={Trip} />
              <Tab.Screen name="Trip2" component={Trip2} />
            </Tab.Navigator>
        </View>
        <View style={styles.cerceles}>
          
              <CercleStatics />
              <CercleStatic2 />

        </View>

        <Text style={{ color: 'hsl(216, 2%, 54%)', fontSize: 16, alignSelf:"flex-end",marginRight:17,fontWeight:"400"}}>*For the last month</Text>
    </View>
  )
}


const styles = StyleSheet.create({  

    cerceles:{
      flexDirection:"row",
      justifyContent:"space-between",
      marginBottom:20,
      height:250,
      backgroundColor:"rgba(28, 33, 45, 1)",
      width:"95%",
      borderRadius:20,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.3,
      shadowRadius: 4,
      elevation: 7, // For Android
      
    },
    trip:{
      backgroundColor:"black",
      width:"100%",
      height:250,
     
      
    justifyContent:"center",
    marginVertical:0,
    
      
      
  
      
    },
    sc:{
  
      backgroundColor:"red",
      width:"100%",
      height:250,
    }
  
  
  
   })