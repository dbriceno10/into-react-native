import { View, Text, Button } from 'react-native'
import React from 'react'

export default function SettingsScreen(props) {
  const { navigation } = props
  const goToPage = () => {
    navigation.navigate('Home')
  }
  return (
    <View>
      <Text>SettingsScreen</Text>
      <Text>SettingsScreen</Text>
      <Text>SettingsScreen</Text>
      <Text>SettingsScreen</Text>
      <Text>SettingsScreen</Text>
      <Text>SettingsScreen</Text>
      <Text>SettingsScreen</Text>
      <Text>SettingsScreen</Text>
      <Text>SettingsScreen</Text>
      <Button onPress={goToPage} title='Go to Home'/>
    </View>
  )
}