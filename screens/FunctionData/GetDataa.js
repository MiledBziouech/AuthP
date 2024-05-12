import { doc, getDoc } from 'firebase/firestore';
import db from '../../firebase/firebaseConfig';
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';


const GetDataa = () => {
  const [userData, setUserData] = useState(null);
  const [userId, setUserId] = useState("");

  const fetchData = async () => {
    try {
      const userDocRef = doc(db, "users", userId);
      const docSnapshot = await getDoc(userDocRef);

      if (docSnapshot.exists()) {
        const userData = docSnapshot.data();
        setUserData(userData);
      } else {
        console.log("User not found.");
        setUserData(null);
      }
    } catch (error) {
      console.error("Error getting user data:", error);
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
      <Button
        title="Get Data"
        onPress={fetchData}
      />
      {userData && (
        <View style={styles.userDataContainer}>
          <Text>User:</Text>
          <Text>- email address: {userData.email}</Text>
          <Text>- name: {userData.name}</Text>
          <Text>- uid: {userData.uid}</Text>
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
  },
});

export default GetDataa;
