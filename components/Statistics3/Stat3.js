import { View, Text,ImageBackground ,StatusBar,SafeAreaView,ScrollView} from 'react-native'
import React from 'react'

import RewardsNft from './RewardsNft'
import TopWinnigs from './TopWinnigs'
import Char from './Char'
import TotRewards from './TotRewards'
import BigNft from './BigNft'
import Table from './Table'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ByNft from './ByNft'
export default function Stat3() {
    const Tab = createMaterialTopTabNavigator();
    
  return (
    
     
  <View style={{flex:1,width:'100%',}}> 

 


 
   

<Tab.Navigator  
              sceneContainerStyle={{backgroundColor:"rgba(19, 23, 32, 1)" ,alignItems:"center",justifyContent:"center"}}
              style={{     
                    backgroundColor:"rgba(19, 23, 32, 1)",
                         width:"100%",
                        height:250,

              
                  justifyContent:"center",
              
                 
                 

 
                 }} 


                 screenOptions={{
                    
                    tabBarStyle: { backgroundColor: 'rgba(19, 23, 32, 1)',width:'80%',alignSelf:'center',marginTop:10 },
                
                    
                  }}
                  


                  tabBarOptions={{
                    activeTintColor: 'tomato',
                    inactiveTintColor: 'gray',
                    style: {
                      backgroundColor: 'blue', // change this to your desired color
                    },
                    indicatorStyle: {
                      backgroundColor: 'rgba(0, 215, 255, 1)', // change this to your desired color
                    },
                  }}


           >


<Tab.Screen name="Bike" component={TotRewards}


options={{
    tabBarLabel: ({ focused, color }) => (
      <Text style={{
        color: 'white',
        fontSize: 15,
        
        fontFamily: 'Poppins-Medium'
    }}>Total Rewards</Text>

    ),





}}

    
    />

<Tab.Screen name="Bike1" component={ByNft} 

options={{
    tabBarLabel: ({ focused, color }) => (
      <Text style={{
        color: 'white',
        fontSize: 15,
       
        fontFamily: 'Poppins-Medium'
    }}>By NFT</Text>
    ),
    




}}
 />

</Tab.Navigator>







    
  




  
  



 </View >
      
      

      
      

   
  )
}