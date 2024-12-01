import React, { Component } from 'react'
import { Text, View , StyleSheet, Image } from 'react-native'
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

import imagepath from '../../constants/imagepath'
import My_btn from '@/src/components/atoms/My_btn';
import { router } from 'expo-router';


export class term_agree extends Component {

  render() {

    const agree=()=>{
       router.push("/(auth)/login");
    }

    return (
      <View style={styles.container}>
        
        <View style={styles.uperdiv}>
          <Text style={styles.h1}>Welcome to Hellow</Text>
          <Image source={imagepath.loginimg} />
        </View>

         <View style={styles.btn_text}>
             <Text style={styles.termtext}>Read our <Text style={styles.link_text}>Privacy Policy</Text>. Tap “Agree and continue” to 
             accept the <Text style={styles.link_text} >Teams of Service</Text>.</Text>
        
            <View style={styles.btn}>
                  <My_btn  title="AGREE AND CONTINUE" onPress={agree} />
            </View>
         
        </View>


        <View style={styles.footer}>
             <Text style={styles.footertext} >From</Text> 
             <Text style={styles.footertext2} >FACEBOOK</Text>
         </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  
  container : {
    flex : 1,
    // backgroundColor : 'gray',
    alignItems : 'center',
    justifyContent : 'space-between',
    paddingVertical : moderateScale(100),
    paddingHorizontal : moderateScale(35),
  },

  uperdiv : {
  
    alignItems : 'center',
    // justifyContent : 'center',
  },

  h1 : {
    fontSize : scale(30),
    fontWeight : 'bold',
    color : 'black',
    marginBottom : verticalScale(50)
  },

  termtext : {
    textAlign : 'center',
    paddingHorizontal : moderateScale(40),

  },
  link_text : {
    color : 'blue',
  },
  btn_text : {
    gap : scale(20) ,
    alignItems : "center"
  },
  btn : {
    width :moderateScale(300),
  } ,
  footer : {
    // backgroundColor : 'green',
    height : verticalScale(100),
    width : '100%',
    alignItems : 'center',
    justifyContent : 'flex-end',
  },
  footertext : {
    color : "gray"
  },
  footertext2 : {
    fontWeight :500
  },

});

export default term_agree
