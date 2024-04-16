import { View, Text ,StyleSheet} from 'react-native'
import React from 'react'

export default function InfoCard() {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.group1container}>

          <View  style={styles.tx1container}>
            <Text style={styles.text1}>Rarity</Text>
            <Text style={styles.text1}>Level</Text>
            <Text style={styles.text1}>Energy</Text>
            <Text style={styles.text1}>Reward Ratio</Text>

          </View>
          <View  style={styles.tx2container}>
          <Text style={styles.text1}>Legendary</Text>
            <Text style={styles.text1} >06</Text>
            <Text style={[styles.text1,{color:"rgba(64, 122, 255, 1)"}]}>45 min <Text style={{fontFamily:'Poppins-Regular',color:"white"}}>  Enhanced</Text></Text>
            <Text style={[styles.text1,{color:"rgba(64, 122, 255, 1)"}]}>1.6<Text style={{fontFamily:'Poppins-Regular',color:"white"}}>  Enhanced </Text> </Text>

          </View>

      </View>

      <View style={styles.group1container}>

          <View  style={styles.tx1container}>
            <Text style={styles.text3}>Total distance</Text>
            <Text style={styles.text3}>Total Rewards</Text>


          </View>
          <View  style={styles.tx3container}>
          <Text style={styles.text3}>27.6 KM</Text>
          <Text style={styles.text3} >2198 RT</Text>
          </View>

</View>
    </View>
  )
}
const styles = StyleSheet.create({    

mainContainer : { 
  width:"90%",
  height:280,
  borderRadius:20,
backgroundColor:"rgba(255, 255, 255, 0.05)",



},

group1container : { 
   flexDirection:"row",
    justifyContent:"flex-start",
    marginTop:20,
 },

 tx1container : { 

gap:10,
marginLeft:20, 
   

 },

 text1: {   
  fontFamily:'Poppins-Bold',
  fontSize:14,
  letterSpacing:-0.3,
  color : "white"
  


 },
 text3:{
  fontFamily:'Poppins-Bold',
  fontSize:20,
  letterSpacing:-0.3,
  color : "white"
 


 },
 tx2container : { 

  gap:10,
  marginLeft:80, 
     
  
   },
   tx3container : { 

    gap:10,
    marginLeft:32, 
       
    
     },
   


 });