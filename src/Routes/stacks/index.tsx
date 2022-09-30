import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { propsNavigationStack } from "./stacks.types";

import HomeScreen from "../../Screens/Home";
import LoginScreen from "../../Screens/Login";

const {Navigator, Screen} = createNativeStackNavigator<propsNavigationStack>();

export default function () {
    return (
        <Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
            <Screen name="Home" component={HomeScreen}/>
            <Screen name="Login" component={LoginScreen}/>
        </Navigator>
    )
}