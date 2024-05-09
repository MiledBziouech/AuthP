import React, { useState } from 'react';
import { View, Button, TextInput, Alert } from 'react-native';
import { getAuth, signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
import { auth } from './firebase/firebaseConfig';

const ValidAuth = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignIn = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log('User signed in successfully:', user);
                // Add navigation to the next screen or any other action
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                if (errorCode === 'auth/wrong-password') {
                    // Prompt user to reset password
                    Alert.alert(
                        'Incorrect Password',
                        'Do you want to reset your password?',
                        [
                            {
                                text: 'Cancel',
                                style: 'cancel'
                            },
                            {
                                text: 'Reset Password',
                                onPress: handleForgotPassword
                            }
                        ]
                    );
                } else {
                    console.error('Signin error:', errorMessage);
                    // Handle other errors
                }
            });
    };
    
    const handleForgotPassword = () => {
        if (!email.trim()) {
            Alert.alert('Email is required');
            return;
        }
        sendPasswordResetEmail(auth, email)
            .then(() => {
                Alert.alert('Password reset email sent');
            })
            .catch((error) => {
                console.error('Forgot password error:', error.message);
                Alert.alert('Failed to send password reset email');
            });
    };
    
    return (
        <View>
            <TextInput
                placeholder="Email"
                onChangeText={(text) => setEmail(text)}
                style={{ backgroundColor: '#000000' }}
            />
            <TextInput
                placeholder="Password"
                onChangeText={(text) => setPassword(text)}
                style={{ backgroundColor: '#000000' }}
                secureTextEntry={true}
            />
            <Button onPress={handleSignIn} title="Sign In" />
        </View>
    );
};

export default ValidAuth;
