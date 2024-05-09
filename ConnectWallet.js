import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image, StatusBar, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useWalletConnectModal } from "@walletconnect/modal-react-native";
import { ethers } from 'ethers';

const ConnectWallet = () => {
    const connectWallet=0;

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style='auto' />
            <Image source={require('./assets/Wheelz.png')} style={styles.image1} />
            <View style={styles.frame}>
                <Text style={styles.input1}>Please connect your wallet to</Text>
                <Text style={styles.input1}>have the complete experience</Text>
                <TouchableOpacity style={styles.button} onPress={connectWallet}>
                    <Text style={styles.input2}>Connect</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2D2D2D',
    },
    image1: {
        alignSelf: 'center',
        width: 100,
        height: 120,
        marginTop: 20,
        marginBottom: 40,
        resizeMode: 'contain',
    },
    frame: {
        justifyContent: 'center',
        height: 300,
        width: 300,
        backgroundColor: 'rgba(255,255,255,0.1)',
        borderRadius: 15,
        alignItems: 'center',
        shadowColor: '#000',
        marginBottom: 200,
    },
    input1: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
    },
    button: {
        backgroundColor: '#0248E7',
        width: 95,
        height: 33,
        marginTop: 50,
        borderRadius: 15,
        justifyContent: 'center', // Added this line
        alignItems: 'center', // Added this line
    },
    input2: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        marginTop: 5,
    },
});

export default ConnectWallet;