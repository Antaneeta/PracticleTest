import { View, Text } from 'react-native'
import React from 'react'
import AuthStack from './src/navigation/auth'
import Routes from './src/navigation'
import Toast from 'react-native-toast-message';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator()

const App = () => {
  return (
    <><Routes /><Toast /></>
  )
}

export default App