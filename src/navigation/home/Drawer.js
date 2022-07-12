import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { screens } from "../../constants";
import { Home, Explore, Profile } from "../../containers";
import MyTabs from "./BottomTab";

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      //  drawerContent={props => <DrawerContent {...props} />}
      // screenOptions={{ headerShown: false }} 
      // initialRouteName={screens.HOME}
      >
      {/* <Drawer.Screen name="MYTABS" component={MyTabs}/> */}
      <Drawer.Screen name={screens.HOME} component={Home} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
