import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Home1 from './screens/Home1';
import Home2 from './screens/Home2';
const App = () => {
  return (
    <View style={styles.container}>
      <Home2 />
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