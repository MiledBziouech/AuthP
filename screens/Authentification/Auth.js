import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity, Alert ,Pressable} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { auth } from '../../firebase/firebaseConfig';
import { signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
import Icon from 'react-native-vector-icons/FontAwesome'; // Import the desired icon
const Auth = () => {
    const navigation = useNavigation();
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const goToAuth2 = () => {
        navigation.navigate('Auth2');
    };

    const goToSuccess = () => {
        navigation.navigate('Success');
    };

    const handleSignIn = () => {
        if (!email || !password) {
            Alert.alert('Missing Fields', 'Please enter your email and password.');
            return;
        }

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log('User signed in successfully:', user);
                goToSuccess(); // Navigate to Success screen after successful login
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
                    Alert.alert('Authentication Failed', errorMessage);
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

    return(
        <SafeAreaView style={styles.container}>
            <Image source={require('../../assets/Wheelz.png')} style={styles.image1}/>
            <Text style={styles.text1}>Hey!</Text>
            <Text style={styles.text1} >Welcome Back</Text>
            <View style={styles.frame1}>
                <View style={{flexDirection:'row'}}>
                    <TouchableOpacity>
                        <View>
                            <Text style={{ color:'white',marginTop:20,marginRight:50}}>Log in</Text>
                            <View style={styles.line}/>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={goToAuth2} >
                            <Text style={{color:'#858597',marginTop:20,marginLeft:50}}>Sign up</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.frame2}>
                    <Text style={styles.inputFieldText}>Email</Text>
                    <TextInput
                        style={styles.inputField}
                        placeholder="Your Email"
                        value={email}
                        onChangeText={setEmail}
                    />
                    <Text style={styles.inputFieldText}>Password</Text>
                    
                    <View style={styles.pswrd}>
                        <TextInput style={styles.pswrdInput}
                        secureTextEntry={!passwordVisible}
                        placeholder="Your Password"
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
                    <Text style={styles.inputForgot}>Forgot Password?</Text>
                </View>
                <TouchableOpacity style={styles.button} onPress={handleSignIn}>
                    <Text style={styles.text3}>Log In</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

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
        marginTop: 50,
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
        fontWeight: 'bold',
        color: '#407AFF',
        alignSelf:'flex-start',
        marginTop: 10,
    
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
        marginTop:60,
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
});

export default Auth;
