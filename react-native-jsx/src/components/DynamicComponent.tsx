import { View, Text } from 'react-native'
import React from 'react'

const DynamicComponent = () => {
  const car  = "BMW"
  const rating =  9.6
  return (
    <View>
      <Text>Car name: {car}</Text>
      <Text>Car rating: {rating}</Text>

    </View>
  )
}

export default DynamicComponent