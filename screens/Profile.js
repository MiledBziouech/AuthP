import { View, Text,SafeAreaView,ImageBackground,StatusBar } from 'react-native'
import React from 'react'
import ProfileImage from '../components/Profile/ProfileImage'
import AccountInfo from '../components/Profile/AccountInfo'
import AccountVerif from '../components/Profile/AccountVerif'
import Wallet from '../components/Profile/Wallet'
import Help from '../components/Profile/Help'
import AboutUs from '../components/Profile/AbouUs'
import LogOut from '../components/Profile/LogOut' 
import ButtomBar from '../components/Home1/ButtomBar'  
export default function Profile() {
  return (
    <SafeAreaView style={{flex:1,width:'100%',justifyContent:"center",alignItems:"center" }}> 
    <ImageBackground source={require('../assets/backGround.png')} style={{backgroundColor:"hsl(220, 28%, 10%)",flex:1,width:"100%" ,alignItems:"center",justifyContent:"space-between",flex:1,  }}>
<StatusBar hidden={true}  />
<ProfileImage />
<View style={{gap:12}}>
<AccountInfo />
<AccountVerif />
<Wallet />
<Help />
<AboutUs />
<LogOut />

</View>
<ButtomBar />

       
        
      
        
    </ImageBackground>
    </SafeAreaView>
  )
}