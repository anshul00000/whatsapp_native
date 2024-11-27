import { Stack } from 'expo-router'
import React, { useState } from 'react'

const mainnavigation = () => {
  return (
    <Stack>
        <Stack.Screen name="index" />
    </Stack>
  )
}

export default mainnavigation ;