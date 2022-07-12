import { View, Text } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Feather from 'react-native-vector-icons/Feather'

import { screens } from '../../../constants';
import { Expert, Services }from '../../../containers'

const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

const Explore = () => {
  // <Stack.Navigator
  //     screenOptions={{
  //       header: props => (
  //         <View>
  //           <Feather name='menu' size={40}/>
  //         </View>
  //       ),
  //     }}>

  //     <Stack.Screen name={'Advances'} children={ExploreTab} />
  //   </Stack.Navigator>
  return (
        <Tab.Navigator>
          <Tab.Screen name={screens.EXPERT} component={Expert} />
          <Tab.Screen name={screens.SERVICES} component={Services} />
        </Tab.Navigator>
      )
}

export default Explore

// const ExploreTab = () => {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen name={screens.EXPERT} component={Expert} />
//       <Tab.Screen name={screens.SERVICES} component={Services} />
//     </Tab.Navigator>
//   )
// }