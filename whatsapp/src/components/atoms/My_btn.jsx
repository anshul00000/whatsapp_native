import React, { Component } from 'react'
import { Text, View ,StyleSheet, Pressable, TouchableOpacity } from 'react-native'

import { scale, verticalScale, moderateScale } from 'react-native-size-matters';


function My_btn ({title , onPress , style }) {

    return (
        
        <TouchableOpacity style={[styles.my_btn , style]} activeOpacity={0.8} onPress={onPress} >
     
        <Text style={{textAlign : "center" , color: "white"}}>{title} </Text>
  
      </TouchableOpacity>
     
    )
  
}

const styles = StyleSheet.create({
  
    my_btn : {

        // backgroundColor : '#4CAF50',
        backgroundColor : '#337e80',
        padding : scale(10),
        borderRadius : 5,
        width : '100%',
        alignSelf : 'center',
    }
    
});

export default My_btn
