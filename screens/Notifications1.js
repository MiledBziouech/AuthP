import { View, Text,SafeAreaView,ImageBackground,StatusBar, FlatList,StyleSheet} from 'react-native'
import React from 'react'
import UnreadNotifications from '../components/Nodtifications/UnreadNotifications'
import ReadedNotifications from '../components/Nodtifications/ReadedNotification'
import All from '../components/Nodtifications/All'
import TopPage from '../components/Nodtifications/TopPage'
import Unread from '../components/Nodtifications/Unread'
export default function Notifications1() {
    const data1= [{name:"Mr. Wheelz",discription:"Liked your post",time:"2 min ago",readed:true} , {name:"Mr. Wheelz",discription:"Liked your post",time:"2 min ago",readed:true} ,{name:"Mr. Wheelz",discription:"Liked your post",time:"2 min ago",readed:true} ,] 
    const data= [{name:"Mr. Wheelz",discription:"Liked your post",time:"2 min ago",readed:false},{name:"Mr. Wheelz",discription:"Liked your post",time:"2 min ago",readed:false},{name:"Mr. Wheelz",discription:"Liked your post",time:"2 min ago",readed:false},{name:"Mr. Wheelz",discription:"Liked your post",time:"2 min ago",readed:false},{name:"Mr. Wheelz",discription:"Liked your post",time:"2 min ago",readed:false},] 
    const allData=[...data,...data1]
  return (
    <SafeAreaView style={{flex:1,width:'100%',justifyContent:"center",alignItems:"center" }}> 
    <ImageBackground source={require('../assets/backGround.png')} style={{backgroundColor:"hsl(220, 28%, 10%)",flex:1,width:"100%" ,alignItems:"center",justifyContent:"center"}}>
<StatusBar hidden={true}  />
<TopPage />
<Unread />
<FlatList   data={allData} renderItem={({item})=> !item.readed ? <UnreadNotifications name={item.name} discription={item.discription} time={item.time} /> : <ReadedNotifications name={item.name} discription={item.discription} time={item.time} />} keyExtractor={(item,index)=>index.toString()}  ItemSeparatorComponent={() => <View style={styles.separator}/>}   showsHorizontalScrollIndicator={false} contentContainerStyle={{alignItems:"center",marginTop:12}} showsVerticalScrollIndicator={false}  />

    
      
        
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