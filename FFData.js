import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { db } from './firebase/firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';

const FFData = () => {
  const [userData, setUserData] = useState(null);
  const [userId, setUserId] = useState('');
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    if (!initialized) {
      // Check if Firebase app is initialized before accessing Firestore
      if (db) {
        setInitialized(true);
      }
    }
  }, [initialized]);

  const fetchData = async () => {
    try {
      const userDocRef = doc(db, 'Users', userId);
      const docSnapshot = await getDoc(userDocRef);
      console.log(docSnapshot )
      if (docSnapshot.exists()) {
        const userData = docSnapshot.data();
        setUserData(userData);
        
      } else {
        console.log('User not found.');
        setUserData(null);
      }
    } catch (error) {
      console.error('Error getting user data:', error);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter User ID"
        value={userId}
        onChangeText={setUserId}
      />
      <Button title="Get Data" onPress={fetchData} />
      {userData && (
        <View style={styles.userDataContainer}>
          <Text>User:</Text>
          <View style={styles.userData}>
            <Text>- Name: {userData.name}</Text>
            <Text>- Email: {userData.email}</Text>
            <Text>- UID: {userData.uid}</Text>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
  },
  input: {
    height: 40,
    width: 200,
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  userDataContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  userData: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    marginTop: 10,
  },
});

export default FFData;

