import React from 'react';
import { View, Text ,StyleSheet} from 'react-native';

const Table = () => {
    const lastReward=186
    const totalReward=1568
    const rank=3
  return (
    <View style={styles.mainContainer} >

            <View style={styles.row1}>

                <Text style={[styles.text1,styles.text2]}>Total Rewards</Text>
             
                <Text style={styles.text2}>{totalReward} RT</Text>
             
            </View>
            <View style={styles.row1}>

                        <Text style={[styles.text3,styles.text2]}>Last Reward</Text>
                    
                        <Text style={styles.text2}>{lastReward} RT</Text>
                      

            </View>

            <View style={[styles.row1,styles.row3]}>

            <Text style={[styles.text4,styles.text2]}>Rank</Text>
            <Text style={styles.text2}>{rank}</Text>

            </View>

    </View>
  );
};

export default Table;

const styles = StyleSheet.create({      

  
        mainContainer   : {  
            backgroundColor:"rgba(255, 255, 255, 0.05)",
            width:"90%",
            height:140,
            alignItems:"center",
            justifyContent:"space-evenly",
            borderRadius:20,

           },
           row1:{

            flexDirection:"row",
            width   : "80%",
            justifyContent:"flex-start",
            borderBottomColor:"rgba(255, 255, 255, 0.5)",
            borderBottomWidth:1,
           

        },
           text1:{
            marginRight:30
        },
        text3:{
            marginRight:51
        },
        text4:{
            marginRight:119
        },
            text2:{
                fontFamily:"Poppins-Bold",
                fontSize:20,
                color:"white",
                textAlign:"left",
            },
            row3:{
                borderBottomWidth:0,
                paddingBottom:0,

            },

    });