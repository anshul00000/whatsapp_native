import { Stack } from 'expo-router'
import React, { useState } from 'react'

const authnavigation = () => {
  return (
    <Stack screenOptions={{headerShown : false}} >
        <Stack.Screen name="index" />
        <Stack.Screen name="term_agree" />
        <Stack.Screen name="login" />
        <Stack.Screen name="verify_otp" />
    </Stack>
  )
}

export default authnavigation ;
