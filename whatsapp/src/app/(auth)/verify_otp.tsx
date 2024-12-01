import React, { Component, useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import AntDesign from '@expo/vector-icons/AntDesign';
import My_btn from '@/src/components/atoms/My_btn';

import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

import OTPInput from "@codsod/react-native-otp-input";
import { router } from 'expo-router';
import { storage } from '@/src/utils/utils';


const verify_otp = () => {

  const [otp, setOTP] = useState("");
  const [tooken_, settooken] = useState(storage.getString('tooken') || "cool");



  const back=()=>{
    router.push("/(auth)/login");

 }



  const verify=()=>{
    alert("OTP is = "+otp);
    storage.set('tooken', 'ANSHUL') ;

  }

  const clear=()=>{
    // alert("OTP is = "+otp);
    storage.delete('tooken') ;

    settooken("");

  }

  return (
    // <View>
    //   <Text> |  OTP  | </Text>
    // </View>

    <SafeAreaView style={styles.continer}>
      <View style={styles.header}>

        <TouchableOpacity onPress={back}>
         <AntDesign name="arrowleft" size={24} color="black" /> 

        </TouchableOpacity>
         
         <Text style={styles.h1}>Enter OTP Code</Text>
         
         </View>

      <View style={styles.main}>
        <Text style={styles.h2} >Code had been send to +91 89******90</Text>
        <Text style={styles.h2} >{tooken_}</Text>

       
          <OTPInput length={4} inputStyle={styles.inputstyle} style={styles.input_box}  onOtpComplete={(txt: string) => setOTP(txt)} />
     

        <Text style={styles.h3}>Resend Code in <Text style={styles.link}>56</Text> s</Text></View>

      <View style={styles.footer}><View> 
        <My_btn title="Verify" onPress={verify} style={{ padding: scale(15), borderRadius: 50, }} />
        <My_btn title="clear" onPress={clear} style={{ padding: scale(15), borderRadius: 50, }} />
        
         </View></View>
    </SafeAreaView>


  )

}

const styles = StyleSheet.create({

  continer: {

    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    // backgroundColor : "gray",
    paddingHorizontal: moderateScale(20),
    paddingVertical: verticalScale(10),
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: verticalScale(10),
    width: "100%",
    gap: moderateScale(20)
  },

  h1: {
    fontSize: scale(20),
    fontWeight: "bold",
    color: "black",
    marginLeft: moderateScale(10)
  },

  main : {
    // backgroundColor : "red" ,
    alignItems : "center",
    justifyContent : "center",
    gap : verticalScale(35),
  },

  h2 : {
    fontSize : scale(18) ,
  },
  h3: {
    fontSize : scale(15) ,
  },

  link: {
    color: "red",
  },

  input_box : {
    // backgroundColor : "red" ,
    gap : moderateScale(10) ,
  },

  inputstyle : {

    borderColor : "black" ,
    borderRadius : moderateScale(15) ,
    width : moderateScale(60) ,
    height : verticalScale(45) ,
  
  },
  footer: {
    // backgroundColor : "red",
    width: moderateScale(250),
    marginBottom: verticalScale(40),
  },


});


export default verify_otp
