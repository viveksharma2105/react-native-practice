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
      <Text style={{color:'teal'}}>On Press</Text>
    </Pressable>

{/* execute  instant when touched */}
    <Pressable onPressIn={()=> console.log("On Pressed In")}>
      <Text style={{color:'coral'}}>On Press In</Text>
    </Pressable>
    
{/* execute when leave */}
    <Pressable onPressOut={()=> console.log("On Pressed Out")}>
      <Text style={{color:'magenta'}}>On Press Out</Text>
    </Pressable>

{/* execute when long pressed */}
     <Pressable onLongPress={()=> console.log("On Long Pressed")}>
      <Text style={{color:'crimson'}}>On Long Press</Text>
    </Pressable>






  </View>
)

export default ButtonComponent