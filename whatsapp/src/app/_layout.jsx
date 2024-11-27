import { Redirect, Stack } from 'expo-router'
import React, { useEffect, useState } from 'react'

import * as SplashScreen  from "expo-splash-screen" ;

SplashScreen.preventAutoHideAsync();
const Rootnavigation = () => {
  const [login , setlogin] = useState(false);

  useEffect(()=>{
    setTimeout(()=>{

      SplashScreen.hideAsync();

    }, 2000)
  },[]) ;

  return (
    <>
    <Stack screenOptions={{headerShown : false}} />
    {
      login ? ( <Redirect href={"/(main)"} />) :( <Redirect href={"/(auth)"} />) 
    }
    </>
  )
}

export default Rootnavigation
