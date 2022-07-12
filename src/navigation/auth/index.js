import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import * as Screen from '../../containers'
import { screens } from '../../constants'

const Stack = createNativeStackNavigator()

const AuthStack = props => {
  return (
    <Stack.Navigator screenOptions={{
        headerShown: false,
    }}>
      <Stack.Screen name={screens.SIGN_IN} component={Screen.SignIn} />
      <Stack.Screen name={screens.SIGN_UP} component={Screen.SignUp} />
      <Stack.Screen name={screens.HOME} component={Screen.Home} />

    </Stack.Navigator>
  )
}

export default AuthStack