import { View, Text,StyleSheet,FlatList,Image, ImageBackground,TouchableOpacity } from 'react-native'
import React from 'react'
import SingleHour from './SingleHour'

export default function HourlyForcast({data}) {
  return (
    <View  style={styles.mainContainer} >

        <TouchableOpacity style={styles.pick}>


          </TouchableOpacity>
        <View style={styles.textContainer}>
          <TouchableOpacity>
          <Text style={styles.text} >Hourly Forcast</Text>  
          </TouchableOpacity>
          <TouchableOpacity>
          <Text style={styles.text}  >weakly forcast</Text>
          </TouchableOpacity>
    
        </View>
    <View style={styles.listContainer} > 
  

      <FlatList data={data} renderItem={({item}) => <SingleHour data={item} />} 

            keyExtractor={item => item.dt_txt} horizontal={true}  
            showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}
              ItemSeparatorComponent={() => <View style={styles.separator}/>} 
      />
      
    </View>
    </View>
  )
}

const styles = StyleSheet.create({

    separator: {
        width: 10,
    }  ,
    mainContainer: {
  
        justifyContent: "space-around",
       
       
        width: "95%",
        backgroundColor: 'rgba(28, 33, 45, 0.6)',
        height: 270,
        borderRadius: 10,
        marginBottom: 20,
       
    },
    textContainer: {
        marginTop: -15,
        flexDirection: 'row',
        justifyContent: "space-around",
        alignItems: 'center',
        width: "100%",

      },
listContainer : {


 justifyContent: "center",
 alignItems: 'center',
  width: "100%",
padding: 4,


 },

text: {
    color: 'rgba(235, 235, 245, 0.6)',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
 
},
pick: {
  height: 5,
  width: 50,
  backgroundColor: 'rgba(0, 0, 0, 0.7)',
  alignSelf: 'center',
  borderRadius: 5,
    
  },
  



})    