import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import db from './firebase/firebaseConfig';

const AdddData = () => {
    const [userData, setUserData] = useState(null);
    const [userId, setUserId] = useState("");
    const [newData, setNewData] = useState('');

    const fetchData = async () => {
        try {
            const userDocRef = doc(db, "users", userId); // <-- Error might be here
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

    const handleAddData = async () => {
        try {
            if (!userData) {
                console.log('No user data available.');
                return;
            }

            const userDocRef = doc(db, 'users', userId);
            await setDoc(userDocRef, { ...userData, [newData]: true }, { merge: true });
            console.log('Data added successfully!');
        } catch (error) {
            console.error('Error adding data:', error);
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
                    <Text>- Email: {userData.email}</Text>
                    <Text>- Name: {userData.name}</Text>
                    <Text>- UID: {userData.uid}</Text>
                </View>
            )}
            <Text style={styles.subtitle}>Add new information:</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter new data"
                value={newData}
                onChangeText={setNewData}
            />
            <Button title="Add Data" onPress={handleAddData} />
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
    subtitle: {
        fontSize: 16,
        marginTop: 20,
        marginBottom: 5,
    },
});

export default AdddData;
