import React from 'react';
import {View, StyleSheet,Text,TouchableOpacity,Image, StatusBar} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
const Success = () => {
    const navigation = useNavigation();

    const goToConnectWallet = () => {
        navigation.navigate('ConnectWallet');
    };
    return(
        <SafeAreaView style={styles.container}>
            <StatusBar style='auto'/>
            <Image source={require('./assets/Wheelz.png')} style={styles.image1}/>
            <View style={styles.frame}>
                <Image source={require('./assets/checkIcon.png')} style={styles.image2}/>     
                <Text style={styles.input1}>Success</Text>
                <Text style={styles.input1}>Congratulations</Text>
                <Text style={styles.input2}>you have completed your registration</Text>
                <TouchableOpacity style={styles.button}onPress={goToConnectWallet}>
                    <Text style={styles.input1}>Done</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
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
    image2:{
        width: 100,
        height: 100,
        marginBottom: 20,
        resizeMode: 'contain'
    },
    frame:{
        justifyContent: 'center',
        height: 350,
        width:300,
        backgroundColor: 'rgba(255,255,255,0.1)',
        borderRadius: 15,
        alignItems: 'center',
        shadowColor: "#000",
        marginBottom: 200
    },
    input1:{
        fontSize: 15,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        marginTop: 5
    },
    input2:{
        fontSize: 15,
        
        color: 'white',
        textAlign: 'center'
    },
    button:{
        backgroundColor:'#0248E7',
        width:95,
        height:33,
        marginTop:50,
        borderRadius:15
    },


})

export default Success;