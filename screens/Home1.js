import { View, Text, Button } from 'react-native'
import React from 'react'
import TopPage from '../components/Home1/TopPage'
import Kmcercle from '../components/Home1/Kmcercle'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Light from '../components/Home1/Light';
import TotaleDistance from '../components/Home1/TotaleDistance'
import Battery from '../components/Home1/Battery'
export default function Home1() {
  return (
    <View style={{justifyContent:"flex-start"}}>
   

       <   Battery />
    </View>
  )
}