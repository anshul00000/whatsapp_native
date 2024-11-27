import React from 'react'
import { View , Text , Image} from 'react-native'
import imagepath from '../constants/imagepath'

function index() {
  return (
    <View>
        <Text>Welcome to the React Native App!</Text>
        <Text>This is a simple React Native application.</Text>
      <Text>Please replace the text in the component with your own content.</Text>
      <Image source={imagepath.fav_icon} style={{width: 200 ,height :200}} />

    </View>
  )
}

export default index
