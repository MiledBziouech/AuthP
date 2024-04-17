import { View, Text ,FlatList ,StyleSheet,TouchableOpacity} from 'react-native'
import React from 'react'
import Item from '../../../components/marketplace/nft/Item'
import AntDesign from 'react-native-vector-icons/AntDesign'
export default function EquippedItems() {
    data=["SMITH - Trad","SMITH - Trade","SMITH - Tradeee","SMITHh - Trade","SMITH - Ttrade","SMITH - Tradee"]
  return (
    <View style={{height:130}}>
    <View style={styles.mainContainer} >
     <FlatList
    data={data} 
     renderItem={({item})=><Item name={item}/>} 
     keyExtractor={(item)=>item.toString()} 
     horizontal={true} 
     showsHorizontalScrollIndicator={false}
     style={styles.flatList}
     contentContainerStyle={{alignItems:"center"}}
     ItemSeparatorComponent={() => <View style={styles.separator}/>} 
     />
    
    </View>
    <TouchableOpacity style={styles.icon}>
    <AntDesign name="pluscircle" size={25} color="blue"  />
    </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    mainContainer:{
    height:120,
    justifyContent:'center',
    alignItems:'center',
    width :'90%',
  },

  flatList:{
    backgroundColor:'rgba(255, 255, 255, 0.05)',
    borderRadius:20,
},
separator: {
    width: 10,
    
  },
  icon:{
    position:'absolute',
    right:20,
    top:105,
  
  }
})