import React from 'react';
import { View, Text, StyleSheet,SafeAreaView } from 'react-native';
import Home1 from './screens/Home1';
import Home2 from './screens/Home2';
import Statistic1 from './screens/Statistic1';
import Statics2 from './screens/Statics2';
import Statistics3 from './screens/Statistics3';
import Profile from './screens/Profile';
import Notifications1 from './screens/Notifications1';
import Settings from './screens/Settings';
import Weather from './screens/Weather';
import Home0 from './screens/Home0';
import Notifications2 from './screens/Notifications2';
import StopScreen from './screens/PauseStopSuccess/StopScreen';
import HourGlass from './screens/marketplace/HourGlass';
import CommnBox from './screens/marketplace/CommonBox';
import MyNft from './screens/marketplace/MyNft';
import StartMove from './screens/marketplace/StartMove';
const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StartMove/>
    </SafeAreaView>
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