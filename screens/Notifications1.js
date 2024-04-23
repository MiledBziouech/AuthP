import { View, Text,SafeAreaView,ImageBackground,StatusBar, FlatList,StyleSheet} from 'react-native'
import React from 'react'
import UnreadNotifications from '../components/Nodtifications/UnreadNotifications'
import ReadedNotifications from '../components/Nodtifications/ReadedNotification'

import TopPage from '../components/Home1/TopPage'

import ButtomBar from '../components/Home1/ButtomBar'
import { useIsFocused } from '@react-navigation/native'
import { useEffect,useState } from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Unread from '../components/Nodtifications/Unread'
import All from '../components/Nodtifications/All'
export default function Notifications1() {
  
  const Tab = createMaterialTopTabNavigator();  
  const color='white'

   
    const isScreenFocused = useIsFocused();
    const [isFocused, setIsFocused] = useState(isScreenFocused);
  
    useEffect(() => {
        setIsFocused(isScreenFocused);
    }, [isScreenFocused]);
  
  

  return (

    <SafeAreaView style={{flex:1,width:'100%',justifyContent:"center",alignItems:"center" }}> 
    
    <ImageBackground source={require('../assets/backGround.png')} style={{backgroundColor:"hsl(220, 28%, 10%)",flex:1,width:"100%" ,alignItems:"center",justifyContent:"center"}}>
    <StatusBar hidden={true}  />
    <TopPage notifIsfocused={isFocused} color={color}/>


    <Tab.Navigator  
              sceneContainerStyle={{backgroundColor:"transparent" ,alignItems:"center",justifyContent:"center"}}
              style={{     
                    backgroundColor:"transparent",
                         width:"100%",
                        height:250,

              
                  justifyContent:"center",
              
                 
                 }} 


                 screenOptions={{
                    
                    tabBarStyle: { backgroundColor: 'transparent)',width:'70%',marginTop:10, },
                  
                  }}
             
                  


                  tabBarOptions={{
                   
                    style: {
                      backgroundColor: 'transparent',
                    },
                   
                    
                  }}


           >


<Tab.Screen name="Bike" component={All}


options={{
    tabBarLabel: ({ focused, color }) => (
      <Text style={{
        color: 'white',
     
        fontFamily  :"Poppins-Medium",
        fontSize: 15,
    }}>All</Text>


    ),
      





}}

    
    />

<Tab.Screen name="Bike1" component={Unread} 

options={{
    tabBarLabel: ({ focused, color }) => (
      <Text style={{
        color: 'white',
        fontFamily  :"Poppins-Medium",
        fontSize: 15,
    }}>Unread only</Text>
    ),
    




}}
 />

</Tab.Navigator>


























    <ButtomBar />
      
        
    </ImageBackground>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
    container: {
     
      flexDirection:'row',
      justifyContent:"center",
      alignItems:"center",
      height:260 ,
      width:390,
   
      marginBottom:20,
   

    },
    separator: {
      height: 10,
    },
  });