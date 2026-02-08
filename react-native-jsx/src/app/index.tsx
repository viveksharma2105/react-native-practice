import { View, Text } from 'react-native'
import React from 'react'
import TextComponent from '../components/TextComponent'
import ViewComponent from '../components/ViewComponent'
import ButtonComponent from '../components/ButtonComponent'
import ImageComponent from '../components/ImageComponent'
import DynamicComponent from '../components/DynamicComponent'
import InlinestyleComponent from '../components/InlinestyleComponent'
import InternalStyle from '../components/InternalStyle'
import ExternalStyle from '../components/ExternalStyle'
import NameComponent from '../components/NameComponent'


const index = () => {
  return (
    <View>
      <TextComponent/>
      <ViewComponent/>
      <ButtonComponent/>
      <ImageComponent/>
      <DynamicComponent/>
      <Text>InlineStyle below-:</Text>
      <InlinestyleComponent/>
      <InternalStyle/>
      <ExternalStyle/>
      <NameComponent/>

    </View>
  )
}

export default index