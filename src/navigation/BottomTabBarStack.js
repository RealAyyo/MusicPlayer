import React from 'react'
import { BlurView } from 'expo-blur';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {BottomBar} from "./BottomBar";
import {MainScreen} from "../screens/MainScreen";
import {SearchScreen} from "../screens/SearchScreen";
import {LibraryScreen} from "../screens/LibraryScreen";
import {ProfileScreen} from "../screens/ProfileScreen";
import {View, Text, StyleSheet} from "react-native";
import home from '../img/ico/home.png'
import homeActive from '../img/ico/homeActive.png'
import search from '../img/ico/search.png'
import searchActive from '../img/ico/searchActive.png'
import profile from '../img/ico/profile.png'
import profileActive from '../img/ico/profileActive.png'
import library from '../img/ico/library.png'
import libraryActive from '../img/ico/libraryActive.png'
import SongBottomPlay from "../components/Items/Song/SongBottomPlay";
import AppStack from "./AppStack";


const Tab = createBottomTabNavigator()

export default function BottomTabBarStack() {

    return (

        <Tab.Navigator
            name={ 'TabFlow' }
            tabBar={ props =>  <BottomBar { ...props } /> }
            screenOptions={ {
                headerShown: false,
                tabBarShowLabel: false,

            } }

        >

            <Tab.Screen
                name={ 'home' }
                component={ AppStack }
                initialParams={{
                    activeIcon: homeActive,
                    inActiveIcon: home,

                }}
            />
            <Tab.Screen

                name={ 'search' }
                component={ SearchScreen }
                initialParams={{
                    activeIcon: searchActive,
                    inActiveIcon: search
                }}
            />
            <Tab.Screen
                name={ 'library' }
                component={ LibraryScreen }
                initialParams={{
                    activeIcon: libraryActive,
                    inActiveIcon: library
                }}
            />
            <Tab.Screen
                name={ 'profile' }
                component={ ProfileScreen }
                initialParams={{
                    activeIcon: profileActive,
                    inActiveIcon: profile
                }}
            />


        </Tab.Navigator>

    );
}



