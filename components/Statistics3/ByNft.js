import { View, Text } from 'react-native'
import React from 'react'
import Char
from './Char'
import TopWinnigs from './TopWinnigs'

export default function ByNft() {
  return (

    <View style={{marginVertical:14}}>
            <Char  Data={[76, 64, 79, 68, 70, 79]}/>
            <View style={{alignSelf:"flex-start",marginVertical:10,paddingLeft:40}}>
                        <Text style={{color:"white",fontSize:17,fontFamily: 'Poppins-Medium',}}>Top Winning NFTs</Text>
            </View>
            <TopWinnigs />
    </View>
  )
}