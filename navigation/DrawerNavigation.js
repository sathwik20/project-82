import React from "react";
import {createDrawerNavigator} from "@react-navigatin/drawer";
import TabNavigtor from "./TabNavigtor";
import Profile from "../screens/Profile";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return(
        <Drawer.Navigator>
        <Drawer.Screen name="Home" component={TabNavigtor}/>
        <Drawer.Screen name="Profile" component={Profile}/>
        </Drawer.Navigator>
    );
};

export default DrawerNavigator;