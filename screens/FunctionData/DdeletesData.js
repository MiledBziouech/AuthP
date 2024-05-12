import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Alert } from 'react-native';
import { doc, getDoc, deleteDoc } from 'firebase/firestore';
import { db, auth } from '../../firebase/firebaseConfig';

const DdeletesData = () => {
  const [userData, setUserData] = useState(null);
  const [userId, setUserId] = useState('');

  const fetchData = async () => {
    try {
      const userDocRef = doc(db, 'Users', userId);
      const docSnapshot = await getDoc(userDocRef);

      if (docSnapshot.exists()) {
        const userData = docSnapshot.data();
        setUserData(userData);
      } else {
        console.log('User not found.');
      }
    } catch (error) {
      console.error('Error getting user data:', error);
    }
  };

  const deleteUser = async () => {
    try {
      const userDocRef = doc(db, 'Users', userId);
      await deleteDoc(userDocRef);
      await auth.currentUser.delete();
      setUserData(null);
      Alert.alert('User Deleted', 'The user has been successfully deleted from Firestore and Firebase.');
    } catch (error) {
      console.error('Error deleting user:', error);
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
          <Text>- name: {userData.name}</Text>
          <Text>- email: {userData.email}</Text>
          <Text>- uid: {userData.uid}</Text>
        </View>
      )}
      {userData && (
        <View style={styles.deleteButtonContainer}>
          <Button title="Delete User" onPress={deleteUser} />
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
  deleteButtonContainer: {
    marginTop: 20,
  },
});

export default DdeletesData;
