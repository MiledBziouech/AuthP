import { View, Text ,ImageBackground,SafeAreaView,StatusBar,StyleSheet,} from 'react-native'
import React from 'react'
import TopPage from '../components/Home1/TopPage'
import ButtomBar from '../components/Home1/ButtomBar'
import { useIsFocused } from '@react-navigation/native'
import { useEffect,useState } from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Stat1 from '../components/Statistic/Stat1'
import TopBarV2 from '../components/Statistic/TopBarV2'
import Stat2 from '../components/Statistic2/Stat2'
import Stat3 from '../components/Statistics3/Stat3'
export default function Statistic1() {

  const isScreenFocused = useIsFocused();
  const [isFocused, setIsFocused] = useState(isScreenFocused);


  useEffect(() => {
      setIsFocused(isScreenFocused);
  }, [isScreenFocused]);

  const Tab = createMaterialTopTabNavigator();  
 




  
  return (
    <SafeAreaView style={{flex:1,width:'100%',}}> 
 

 
     
    
    <ImageBackground style={{justifyContent:"space-between",backgroundColor :"black",flex:1,width:'100%',alignItems:'center'}} source={require('../assets/backGround.png')} >
        <TopPage  statIsFocuced={isFocused}/>
      
          <Tab.Navigator  tabBar={TopBarV2}   
              sceneContainerStyle={{backgroundColor:"rgba(19, 23, 32, 1)" ,alignItems:"center",justifyContent:"center"}}
              style={{     
                    backgroundColor:"black",
                  width:"100%",
                  height:250,

              
                  justifyContent:"center",
              
                  marginTop:10,

 
                 }} 


           >
          <Tab.Screen name="Bike" component={Stat1}  />
          <Tab.Screen name="Health" component={Stat2} />
          <Tab.Screen name="Reward" component={Stat3} />
         </Tab.Navigator>

        <ButtomBar />

    <StatusBar hidden={true}  />

     
   
    </ImageBackground>
  
    </SafeAreaView >
  )
}
