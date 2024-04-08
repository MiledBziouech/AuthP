import { View, Text,SafeAreaView,ImageBackground,StatusBar, FlatList,StyleSheet} from 'react-native'
import React from 'react'
import UnreadNotifications from '../components/Nodtifications/UnreadNotifications'
import ReadedNotifications from '../components/Nodtifications/ReadedNotification'
import All from '../components/Nodtifications/All'
import TopPage from '../components/Nodtifications/TopPage'
import Unread from '../components/Nodtifications/Unread'
import ButtomBar from '../components/Home1/ButtomBar'

export default function Notifications2() {
  
    const data= [{name:"Mr. Wheelz",discription:"Liked your post",time:"2 min ago",readed:false},{name:"Mr. Wheelz",discription:"Liked your post",time:"2 min ago",readed:false},{name:"Mr. Wheelz",discription:"Liked your post",time:"2 min ago",readed:false},{name:"Mr. Wheelz",discription:"Liked your post",time:"2 min ago",readed:false},{name:"Mr. Wheelz",discription:"Liked your post",time:"2 min ago",readed:false},] 
   
  return (
    <SafeAreaView style={{flex:1,width:'100%',justifyContent:"center",alignItems:"center" }}> 
    <ImageBackground source={require('../assets/backGround.png')} style={{backgroundColor:"hsl(220, 28%, 10%)",flex:1,width:"100%" ,alignItems:"center",justifyContent:"center"}}>
    <StatusBar hidden={true}  />
    <TopPage />
  <Unread/>
<FlatList   data={data} 

    renderItem={({item})=>  <UnreadNotifications name={item.name} discription={item.discription} time={item.time} /> }
    keyExtractor={(item,index)=>index.toString()} 
   ItemSeparatorComponent={() => <View style={styles.separator}/>}  
   showsHorizontalScrollIndicator={false} contentContainerStyle={{alignItems:"center",marginTop:12}} 
   showsVerticalScrollIndicator={false}  />

    <ButtomBar />
      
        
    </ImageBackground>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
    container: {
     
      flexDirection:'row',
      justifyContent:"center",
      alignItems:"center",
      height:260 ,
      width:390,
   
      marginBottom:20,
   

    },
    separator: {
      height: 10,
    },
  });