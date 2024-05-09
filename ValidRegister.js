import React, { useState } from 'react';
import { View, Button, TextInput } from 'react-native';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from './firebase/firebaseConfig';

const ValidRegister = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const handlePress = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed up
                const user = userCredential.user;
                // Now update user's display name
                updateProfile(user, { displayName: name })
                    .then(() => {
                        // Profile updated
                        console.log(user)
                        console.log(updateProfile)
                        // add user to docUsers
                    })
                    .catch((error) => {
                        // Handle error
                        console.log(error);
                    });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // Handle error
                console.log(errorMessage);
            });
    };

    return (
        <View>
            <TextInput
                placeholder="Name"
                onChangeText={(text) => setName(text)}
                style={{ backgroundColor: '#000000' }}
            />
            <TextInput
                placeholder="Email"
                onChangeText={(text) => setEmail(text)}
                style={{ backgroundColor: '#000000' }}
            />
            <TextInput
                placeholder="Password"
                onChangeText={(text) => setPassword(text)}
                style={{ backgroundColor: '#000000' }}
            />
            <Button onPress={handlePress} title="Sign up" />
        </View>
    );
};

export default ValidRegister;
