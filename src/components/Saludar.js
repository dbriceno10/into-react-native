import { View, Text } from 'react-native'
import React from 'react'

export default function Saludar({name}) {
  return (
    <View>
      <Text>{`Hola ${name}`}</Text>
    </View>
  )
}