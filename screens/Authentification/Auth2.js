import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity, Alert, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db, firestore } from '../../firebase/firebaseConfig'; // Import firestore from firebase config
import { updateProfile } from 'firebase/auth'; // Import updateProfile function from firebase/auth
import Icon from 'react-native-vector-icons/FontAwesome'; // Import the desired icon
import { addDoc, collection } from 'firebase/firestore';

const Auth2 = () => {
    const navigation = useNavigation();
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [password2Visible, setPassword2Visible] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const togglePassword2Visibility = () => {
        setPassword2Visible(!password2Visible);
    };

    const goToAuth = () => {
        navigation.navigate('Auth');
    };

    const goToSuccess = () => {
        navigation.navigate('Success');
    };

    // Handle sign up button press
    const handleSignUp = () => {
        // Validate input fields
        if (!name.trim() || !email.trim() || !password.trim() || !confirmPassword.trim()) {
            Alert.alert('Missing Fields', 'Please fill out all the fields.');
            return;
        }

        // Check if password matches confirm password
        if (password !== confirmPassword) {
            Alert.alert('Passwords do not match', 'Please make sure the passwords match.');
            return;
        }

        // Create user with email and password
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed up successfully
                const user = userCredential.user;

                // Update user's display name
                updateProfile(user, { displayName: name })
                    .then(async() => {
                        // Profile updated successfully
                        console.log('User signed up successfully:', user);

                        // Add user data to Firestore
                        await addDoc(collection(db, "Users"), {
                            gender: '',
                            name: name,
                            email: email,
                            uid: user.uid,
                            nickName: '',
                        }).then(() => {
                            console.log('User data added to Firestore');
                            goToSuccess(); // Navigate to Success screen after successful registration
                        })
                        .catch((error) => {
                            console.error('Error adding user data to Firestore:', error.message);
                            Alert.alert('Registration Failed', 'Failed to add user data to Firestore. Please try again.');
                        });
                    })
                    .catch((error) => {
                        console.error('Error updating profile:', error.message);
                        Alert.alert('Registration Failed', 'Failed to update profile. Please try again.');
                    });
            })
            .catch((error) => {
                // Handle error
                const errorCode = error.code;
                const errorMessage = error.message;
                console.error('Sign up error:', errorMessage);
                Alert.alert('Registration Failed', errorMessage);
            });
    };

    return (
        <SafeAreaView style={styles.container}>
            <Image source={require('../../assets/Wheelz.png')} style={styles.image1} />
            <Text style={styles.text1}>Hey!</Text>
            <Text style={styles.text1}>Join Now</Text>
            <View style={styles.frame1}>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity onPress={goToAuth}>
                        <Text style={{ color: 'white', marginTop: 20, marginRight: 50 }}>Log in</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View>
                            <Text style={{ color: '#858597', marginTop: 20, marginLeft: 50 }}>Sign up</Text>
                            <View style={styles.line} />
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.frame2}>
                    <Text style={styles.inputFieldText}>Name</Text>
                    <TextInput
                        style={styles.inputField}
                        placeholder="Your Name"
                        value={name}
                        onChangeText={setName}
                    />
                    <Text style={styles.inputFieldText}>Email</Text>
                    <TextInput
                        style={styles.inputField}
                        placeholder="Your Email"
                        value={email}
                        onChangeText={setEmail}
                    />
                    <Text style={styles.inputFieldText}>Password</Text>
                    <View style={styles.pswrd}>
                        <TextInput
                            style={styles.pswrdInput}
                            secureTextEntry={!passwordVisible}
                            placeholder="Create Password"
                            value={password}
                            onChangeText={setPassword}
                        />
                        <Pressable onPress={togglePasswordVisibility}>
                            <Icon
                                name={passwordVisible ? 'eye' : 'eye-slash'}
                                size={24}
                                color="white"
                                style={styles.eyeIcon}
                            />
                        </Pressable>
                    </View>
                    <Text style={styles.inputFieldText}>Confirm Password</Text>
                    <View style={styles.pswrd}>
                        <TextInput
                            style={styles.pswrdInput}
                            secureTextEntry={!password2Visible}
                            placeholder="Confirm Password"
                            value={confirmPassword}
                            onChangeText={setConfirmPassword}
                        />
                        <Pressable onPress={togglePassword2Visibility}>
                            <Icon
                                name={password2Visible ? 'eye' : 'eye-slash'}
                                size={24}
                                color="white"
                                style={styles.eyeIcon}
                            />
                        </Pressable>
                    </View>
                </View>
                <TouchableOpacity style={styles.button} onPress={handleSignUp}>
                    <Text style={styles.text3}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    pswrdInput:{
        width:'70%', 
        height:50,
        borderRadius:10,
    },
    pswrd:{
        backgroundColor:'#1D222E',
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        width:'110%',
        borderRadius:10,
        marginTop:10,
    },
    line:{
        height:3,
        width:40,
        backgroundColor:'#407AFF',
        borderRadius:2,
        marginLeft:50,
    },
    container:{
        flex:1,
        alignItems:'center',
        backgroundColor:'#2D2D2D',
    },
    image1:{
        alignSelf: 'center',
        width: 100,
        height: 120,
        marginTop: 20,
        marginBottom: 20,
        resizeMode: 'contain'
    },
    frame1:{
        height: '80%',
        width:'93%',
        backgroundColor: 'rgba(28,33,45,0.3)',
        borderRadius: 15,
        alignItems: 'center',
        shadowColor: "#000",
    },
    text1:{
        fontSize: 25,
        fontWeight: 'bold',
        color: 'white',
        marginRight: 200,
        alignSelf:'flex-start',
    },
    frame2:{
        width:200,
        heigth:200,
        alignSelf:'center',
        justifyContents:'center',
        marginTop: 40,
    },
    inputField:{
        backgroundColor:'#1D222E',
        marginTop: 10,
        height:50,
        borderRadius:10,
        width:220,
    },
    inputFieldText:{
        fontSize: 20,
        marginTop: 5,
        fontWeight: 'bold',
        color: '#407AFF',
        alignSelf:'flex-start',
    },
    passwordContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        position: 'relative',
    },
    passwordInput: {
        paddingRight: 40, // Adjust padding to accommodate the eye icon
    },
    inputForgot:{
        fontSize: 15,
        fontWeight: 'bold',
        color: '#858597',
        alignSelf:'flex-end',
    },
    button:{
        backgroundColor:'#0248E7',
        width:150,
        height:40,
        marginTop:10,
        borderRadius:15
    },
    text3:{
        fontSize: 15,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        marginTop: 7,
    },
    eyeIcon: {
        //position: 'absolute',
        //right: 10,
        //top: '50%',
        //transform: [{ translateY: -35 }], // Adjust vertically to center the icon
    },
})

export default Auth2;
