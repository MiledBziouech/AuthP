    import { View, Text ,FlatList,StyleSheet} from 'react-native'
    import React from 'react'
    import Nft from './Nft'
    export default function TopWinnigs() {
        const data =[ 
            {name : "Bike NFT",price : 0.5},
            {name : "Bike NFT",price : 0.5},
            {name : "Bike NFT",price : 0.5},
            {name : "Bike NFT",price : 0.5},
            {name : "Bike NFT",price : 0.5},
            {name : "Bike NFT",price : 0.5},
            {name : "Bike NFT",price : 0.5},
            {name : "Bike NFT",price : 0.5},
            {name : "Bike NFT",price : 0.5},
            {name : "Bike NFT",price : 0.5},
        ]
      return (
        <View style={styles.container}>
                    <FlatList data={data} renderItem={({item}) => <Nft name={item.name} price={item.price} />} keyExtractor={(item) => item.id} ItemSeparatorComponent={() => <View style={styles.separator}/>}    showsVerticalScrollIndicator={false}
  showsHorizontalScrollIndicator={false} contentContainerStyle={{alignItems:"center"}} />

<FlatList data={data} renderItem={({item}) => <Nft name={item.name} price={item.price} />} keyExtractor={(item) => item.id} ItemSeparatorComponent={() => <View style={styles.separator}/>}    showsVerticalScrollIndicator={false}
  showsHorizontalScrollIndicator={false} contentContainerStyle={{alignItems:"center"}} />
        </View>
      )
    }
    const styles = StyleSheet.create({
        container: {
         
          flexDirection:'row',
          justifyContent:"center",
          alignItems:"center",
          height:260 ,
          width:390,
       

        },
        separator: {
          height: 20,
        },
      });