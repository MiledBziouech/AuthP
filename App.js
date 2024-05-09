import React from 'react';
import { View, Text, StyleSheet,SafeAreaView } from 'react-native';
import Home1 from './screens/Home1';
import Home2 from './screens/Home2';
import Statistic1 from './screens/Statistic1';
import Profile from './screens/Profile';
import Notifications1 from './screens/Notifications1';
import Settings from './screens/Settings';
import Weather from './screens/Weather';
import Home0 from './screens/Home0';

import Test from  './ValidRegister';

import StopScreen from './screens/PauseStopSuccess/StopScreen';
import HourGlass from './screens/marketplace/HourGlass';
import CommnBox from './screens/marketplace/CommonBox';
import MyNft from './screens/marketplace/MyNft';
import StartMove from './screens/marketplace/StartMove';
import Favourite from './screens/marketplace/Favourite';
import MyItem from './screens/marketplace/MyItem';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import ValidAuth from './ValidAuth';
import FFData from './FFData';
import FFupdateData from './FFupdateData';
import DdeletesData from './DdeletesData';
import AdddData from './AdddData';
import ConnectWallet from './ConnectWallet';
import Success from './Success';
import Auth from './Auth';
import Auth2 from './Auth2';
import ValidRegister from './ValidRegister';

const App = () => {
  return (
    <NavigationContainer> 
      <Stack.Navigator >
      
        <Stack.Screen name="Auth" component={Auth} options={{headerShown:false}} />
        <Stack.Screen name="Auth2" component={Auth2} options={{headerShown:false}} />
        <Stack.Screen name="Success" component={Success} options={{headerShown:false}} />
        <Stack.Screen name="ConnectWallet" component={ConnectWallet} options={{headerShown:false}} />
        
        <Stack.Screen name="AdddData" component={AdddData} options={{headerShown:false}} />
        <Stack.Screen name="DdeletesData" component={DdeletesData} options={{headerShown:false}} />
        <Stack.Screen name="FFupdateData" component={FFupdateData} options={{headerShown:false}} />
        <Stack.Screen name="FFData" component={FFData} options={{headerShown:false}} />
        


        <Stack.Screen name="Statistic1" component={Statistic1} options={{headerShown:false}} />
        <Stack.Screen name="Home" component={Home0} options={{headerShown:false}} />
        <Stack.Screen name="Profile" component={Profile} options={{headerShown:false}} />
        <Stack.Screen name="Home1" component={Home1} options={{headerShown:false}} />
        <Stack.Screen name="Weather" component={Weather} options={{headerShown:false}} />
        <Stack.Screen name="Home2" component={Home2} options={{headerShown:false}} />
        <Stack.Screen name="Settings" component={Settings} options={{headerShown:false}} />
        <Stack.Screen name="Notifications1" component={Notifications1} options={{headerShown:false}} />
        
      </Stack.Navigator>
    </NavigationContainer>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  
    
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'blue',
  },
});

export default App;