import { View, Text,SafeAreaView,ImageBackground,StatusBar } from 'react-native'
import React from 'react'
import ProfileImage from '../components/Profile/ProfileImage'
import AccountInfo from '../components/Profile/AccountInfo'
import AccountVerif from '../components/Profile/AccountVerif'
import Wallet from '../components/Profile/Wallet'
import Help from '../components/Profile/Help'
import AboutUs from '../components/Profile/AbouUs'
import LogOut from '../components/Profile/LogOut'   
export default function Profile() {
  return (
    <SafeAreaView style={{flex:1,width:'100%',justifyContent:"center",alignItems:"center" }}> 
    <ImageBackground source={require('../assets/backGround.png')} style={{backgroundColor:"hsl(220, 28%, 10%)",flex:1,width:"100%" ,alignItems:"center",justifyContent:"center",gap:12  }}>
<StatusBar hidden={true}  />
       
        <AboutUs/>
      
        
    </ImageBackground>
    </SafeAreaView>
  )
}