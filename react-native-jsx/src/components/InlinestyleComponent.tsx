import { View } from 'react-native'
import React from 'react'

const InlinestyleComponent = () => {
  return (
    <View style={{flexDirection:'row'}}>
      <View  style={{backgroundColor: 'blue', width: 100, height: 100,margin:15,}}/>
      <View  style={{backgroundColor: 'red', width: 100, height: 100,margin:15,}}/>
      <View  style={{backgroundColor: 'yellow', width: 100, height: 100,margin:15,}}/>
    </View>
  )
}

export default InlinestyleComponent