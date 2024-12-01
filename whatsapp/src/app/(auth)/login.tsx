import React, { Component, useState } from 'react'
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import My_btn from '@/src/components/atoms/My_btn';


import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

import AntDesign from '@expo/vector-icons/AntDesign';

import CountryPicker from 'react-native-country-picker-modal'

import { router } from 'expo-router';


const login =()=> {
  const [visible , setvisible ] = useState(false) ;
  const [countrycode , setcountrycode] = useState("91");
  const [countryname , setcountryname ] = useState("INDIA");


  const next=()=>{
    router.push("/(auth)/verify_otp");
 }
  

    return (
      // <View>
      //   <Text> | LOGIN |</Text>
      // </View>

      <SafeAreaView style={styles.container}>

        <View style={styles.upercontainer}>

          <Text style={styles.h1} >Enter yourphone number</Text>

          <Text style={styles.p} >Hellow will need to verify your phone number .</Text>
          <Text style={styles.p2} >What's my number ?</Text>

          <View>

            <View style={styles.dropdown1}>

              <TouchableOpacity onPress={()=>setvisible(true)} style={styles.dropdown}>

                     <View />
                     <Text style={styles.dropdown_text}>{countryname}</Text>
                     <AntDesign name="caretdown" size={20} color="black" />
                </TouchableOpacity>

               <View style={styles.line} />
            </View>

            <View style={styles.input_box} >

             <View >
              <View style={styles.countrycode_box}>
              <Text style={styles.countrycode}>+ {countrycode}</Text>
              </View>
              <View style={styles.line} />
              
             </View>

        

             <View style={styles.input}>
              
             <View style={styles.countrycode_box}>

             <TextInput style={styles.inputfeald} />

             </View>

             <View style={styles.line} />
             </View>

            </View>
          </View>

        </View>

        <View style={styles.footer}>

          <View style={styles.btn}>

            {/* <My_btn title="Next" onPress={next}/> */}

          </View>

        </View>
{/* 
{
visible && <CountryPicker withFilter  visible={true}  onClose={()=>setvisible(false)} onSelect={(e)=>{setcountrycode(e.callingCode) , setcountryname(e.name)}} />
} */}


      </SafeAreaView>

    )
  
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-between",
    // paddingHorizontal : scale(20),
    paddingVertical: verticalScale(100),
  },

  upercontainer: {
    // backgroundColor : "gray",
    // width : "100%",
    alignItems: "center",
    textAlign: "center",
  },

  h1: {
    fontSize: scale(25),

  },

  p: {

    fontSize: scale(15),
    marginTop: verticalScale(17),
  },
  p2: {
    color: "blue",
    fontSize: scale(12),
  },

  dropdown1: {
    alignItems: "center",
  },
  dropdown: {
    // backgroundColor : "red",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
    marginTop: verticalScale(50),

  },

  dropdown_text: {
    fontSize: scale(15),
    color: "black",
  },

  line: {
    width: "100%",
    height: scale(1),
    // backgroundColor: "green",
    backgroundColor: "aqua",
    marginTop: verticalScale(10),
  },

  countrycode_box : {
    
    // backgroundColor : "red",
    // width : scale(30),
    marginTop: verticalScale(10),
    height : verticalScale(30),
    alignItems : "center" ,
    justifyContent : "center",

  },

  countrycode: {
    fontSize: scale(15),
  

  },

  input_box : {
    // backgroundColor : "green",
    flexDirection : "row",
    // height : verticalScale(50) ,
    alignItems : "center",
    textAlign : "center",
    gap : scale(25),
  },

  input : {
    flex : 1,
   
  },

  inputfeald : {
    // backgroundColor : "red",
    width : "100%",
    fontSize : scale(15),
  },

  footer: {
    // backgroundColor: "red",
    alignItems: "center",

  },

  btn: {
    width: moderateScale(250),
  },

});

export default login  
