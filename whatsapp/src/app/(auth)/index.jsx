import { Link, router } from 'expo-router'
import React, { useEffect, useState } from 'react'
import { View , Text , Image , StyleSheet , ActivityIndicator , StatusBar} from 'react-native'
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import imagepath from '../../constants/imagepath'
// import { ActivityIndicator } from 'react-native-web';
// import imagepath from '../constants/imagepath'

function index() {

  const [isloading , setisloading] = useState(false) ;

  let navigate=()=>{
    router.push("/(auth)/term_agree");
  }
  let loading_time_out=()=>{
    setisloading(true) ;
    setTimeout(()=>{navigate()}, 2000) ;

  }

  useEffect(()=>{
      const timeout =  setTimeout(()=>{loading_time_out()}, 2000) ;

      return ()=> {clearTimeout(timeout)}
  }, [])

  return (
  <>
    <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor ="lightblue" translucent = {false}/>
   
    <View style={styles.container}>
       
       <View style={styles.header} ></View>
       <View style={styles.mid}>
        <Image style={styles.logo} source={imagepath.fav_icon} resizeMode='contain' />
        <Text style={styles.logofont}>HELLOW</Text>
       </View>
       <View style={styles.footer}>

     {
      isloading ? (<> 
      <ActivityIndicator size={moderateScale(35)} color={"black"}/>
      <Text style={styles.loadingtext} >loading ...</Text>
      
      </>) 
      : (<>  <Text style={styles.footertext} >From</Text> 
             <Text style={styles.footertext2} >FACEBOOK</Text>
        </>)
     }

      
     
       </View>

    </View>

    </>
  )
}

const styles = StyleSheet.create({
  
  container : {
    flex : 1,
    // backgroundColor : 'gray',
    alignItems : 'center',
    justifyContent : 'space-between',
    paddingVertical : moderateScale(50)
  },


  mid : {
    // backgroundColor : 'blue',
    // height : 100,
    // width : '100%',
    alignItems : 'center',
    justifyContent : 'center',
  },
  logo : {
    width : scale(100),
    height : verticalScale(100),
    // backgroundColor : "red"
  } ,
  logofont : {
    fontSize :  moderateScale(25) ,
    fontWeight : 900
  },
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
  loadingtext:{
    // color : "blue",
    fontSize : moderateScale(20) ,
    paddingTop :  moderateScale(10)
  },

});

export default index
