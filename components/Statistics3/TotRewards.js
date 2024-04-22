import { View, Text ,ScrollView} from 'react-native'
import React from 'react'
import BigNft from './BigNft'
import Char from './Char'
import Table from './Table'

export default function TotRewards() {
  return (
    <View style={{marginTop:22}}>
       <ScrollView   contentContainerStyle={{
    alignItems: 'center',
    justifyContent: 'center',
    gap : 12,
    
  }} 
  showsVerticalScrollIndicator={false}
    showsHorizontalScrollIndicator={false}
  
  style={{marginBottom:20}}>

  <BigNft  name="FALCON - Trade"/>
  <Char  Data={[76, 64, 79, 68, 70, 79]}/>
 
  
 <Table />
 </ScrollView>
    </View>
  )
}