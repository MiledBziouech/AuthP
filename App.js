import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
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

const App = () => {
  return (
    <View style={styles.container}>
      <Home1 />
    </View>
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