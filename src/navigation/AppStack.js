import React from 'react'
import {createStackNavigator} from "@react-navigation/stack";
import BottomTabBarStack from './BottomTabBarStack'
import {MainScreen} from "../screens/MainScreen";
import {SearchScreen} from "../screens/SearchScreen";
import {LibraryScreen} from "../screens/LibraryScreen";
import {ProfileScreen} from "../screens/ProfileScreen";
import {TopChartScreen} from "../screens/TopChartScreen";
import {RadioScreen} from "../screens/RadioScreen";

const Stack = createStackNavigator()

const AppStack = () => {

    return (
                <Stack.Navigator
                    screenOptions={ {
                        headerShown: false,
                    } }
                >
                    <Stack.Screen name='main' component={MainScreen}/>
                    <Stack.Screen name='topChart' component={TopChartScreen}/>
                    <Stack.Screen name='search' component={SearchScreen}/>
                    <Stack.Screen name='library' component={LibraryScreen}/>
                    <Stack.Screen name='profile' component={ProfileScreen}/>
                    <Stack.Screen name='radio' component={RadioScreen}/>

                </Stack.Navigator>

    );
}


export default AppStack
