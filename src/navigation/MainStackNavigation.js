import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, ScrollView} from 'react-native';

import {NavigationContainer} from "@react-navigation/native";
import AppStack from "./AppStack";
import BottomTabBarStack from "./BottomTabBarStack";


const MainStackNavigation = () => {

    return (
        <NavigationContainer>
            <BottomTabBarStack/>
        </NavigationContainer>

    );
}



export default MainStackNavigation;