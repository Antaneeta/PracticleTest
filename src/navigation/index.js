import { View, Text } from "react-native";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./auth";

import DrawerNavigation from "./home/Drawer";
import MyTabs from "./home/BottomTab";
// import MyTabs from "./bottomTab/BottomTab";

const Routes = (props) => {

  return (
    <NavigationContainer>
      
            {/* <DrawerNavigation/> */}
            {/* <AuthStack /> */}
            <MyTabs/>
        
    </NavigationContainer>
  );
};

export default Routes;
