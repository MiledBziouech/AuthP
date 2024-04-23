import { View, Text,StyleSheet ,TouchableOpacity,FlatList} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import UnreadNotifications from './UnreadNotifications'
import ReadedNotifications from './ReadedNotification'
export default function All() { 
    const navigation = useNavigation()
    const data1= [{name:"Mr. Wheelz",discription:"Liked your post",time:"2 min ago",readed:true} , {name:"Mr. Wheelz",discription:"Liked your post",time:"2 min ago",readed:true} ,{name:"Mr. Wheelz",discription:"Liked your post",time:"2 min ago",readed:true} ,] 
    const data= [{name:"Mr. Wheelz",discription:"Liked your post",time:"2 min ago",readed:false},{name:"Mr. Wheelz",discription:"Liked your post",time:"2 min ago",readed:false},{name:"Mr. Wheelz",discription:"Liked your post",time:"2 min ago",readed:false},{name:"Mr. Wheelz",discription:"Liked your post",time:"2 min ago",readed:false},{name:"Mr. Wheelz",discription:"Liked your post",time:"2 min ago",readed:false},] 
    const allData=[...data,...data1]
  return (
    <View style={styles.mainContainer}>
        
  <FlatList   data={allData} 

    renderItem={({item})=> !item.readed ? <UnreadNotifications name={item.name} discription={item.discription} time={item.time} /> : <ReadedNotifications name={item.name} discription={item.discription} time={item.time} />}
    keyExtractor={(item,index)=>index.toString()} 
   ItemSeparatorComponent={() => <View style={styles.separator}/>}  
   showsHorizontalScrollIndicator={false} contentContainerStyle={{alignItems:"center",marginTop:12}} 
   showsVerticalScrollIndicator={false}  /> 

    </View>
  )
}
const styles = StyleSheet.create({   
    mainContainer:{
        marginTop:5,
        
    },



})