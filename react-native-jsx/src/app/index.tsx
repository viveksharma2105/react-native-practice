import { View, Text } from 'react-native'
import React from 'react'
import TextComponent from '../components/TextComponent'
import ViewComponent from '../components/ViewComponent'
import ButtonComponent from '../components/ButtonComponent'

const index = () => {
  return (
    <View>
      <TextComponent/>
      <ViewComponent/>
      <ButtonComponent/>
    </View>
  )
}

export default index