import { View, Text, Button, Pressable } from 'react-native'
import React from 'react'

const ButtonComponent = () => (
  <View>
    {/* <Button  title='Press me' color='red' /> */}
    {/* <Button  title='Tap me'  color='#841584'></Button> */}

    {/* EVENTS */}
    <Button title='Click & check console ' onPress={()=> console.log("Pressed")}></Button>
    <Button title='Alert ' color='red' onPress={()=> alert("you pressed me")}></Button>

{/* execute if when touch  and leave form  the  button */}
    <Pressable onPress={()=> console.log("Pressed")}>
      <Text style={{color:'teal'}}>Press Me</Text>
    </Pressable>

{/* execute  instant when touched */}
    <Pressable onPressIn={()=> console.log("On Pressed In")}>
      <Text style={{color:'coral'}}>Press Me</Text>
    </Pressable>
    
{/* execute when leave */}
    <Pressable onPressOut={()=> console.log("On Pressed Out")}>
      <Text style={{color:'megent'}}>Press Me</Text>
    </Pressable>




  </View>
)

export default ButtonComponent