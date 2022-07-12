import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Explore, Profile, Expert} from '../../containers';
import { screens } from "../../constants";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

import * as colors from '../../themes/Colors'

const Tab = createBottomTabNavigator();

const MyTabs = () => {
    return (
        <Tab.Navigator
            initialRouteName={screens.HOME}
            screenOptions={{
                tabBarActiveTintColor: '#099',
                headerShown: false,

            }}>
            <Tab.Screen name={screens.HOME} component={Home}
                options={{
                    tabBarIcon: () => (
                        <MaterialCommunityIcons name="home" color={colors.PrimaryColor} size={40} />
                    ),
                }}
            />
            <Tab.Screen name={screens.EXPLORE} component={Explore}
                options={{
                    tabBarIcon: () => (
                        <MaterialIcons name="search" color={colors.PrimaryColor} size={40} />
                    ),
                }}
            />
            <Tab.Screen name={screens.PROFILE} component={Profile} options={{
                tabBarIcon: () => (
                    <MaterialCommunityIcons name="account" color={colors.PrimaryColor} size={40} />
                ),
            }} />
        </Tab.Navigator>
    );
}

export default MyTabs