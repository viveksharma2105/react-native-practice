import { View, Text, Image } from 'react-native'
import React from 'react'

const ImageComponent = () => {
  return (
    <View>
      <Text style={{fontWeight: 'bold'}}>Lest's explore Images:-</Text>
      <Image source={ require('../assets/image.jpeg') }/>
      <Image source={{uri: "https://shorturl.at/6xlwV"}}/>
    </View>
  )
}

export default ImageComponent