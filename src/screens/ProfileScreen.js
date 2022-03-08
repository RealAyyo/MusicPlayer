import React from 'react'
import {View, Text, StyleSheet} from "react-native";
import {LinearGradient} from "expo-linear-gradient";
import {SafeAreaView} from "react-native";
import {ScrollView} from "react-native-gesture-handler";
import HeaderLibrary from "../components/LibraryScreen/HeaderLibrary";
import HeaderProfile from "../components/ProfileScreen/HeaderProfile";
import Faves from "../components/ProfileScreen/Faves";
import Activities from "../components/ProfileScreen/Activities";
import Mood from "../components/ProfileScreen/Mood";


export const ProfileScreen = ({}) =>{
    return (
        <LinearGradient colors={['#191b28', '#141721']} start={[-3, -4]}  style={styles.linearGradient}>
            <SafeAreaView style={styles.center}>
                <ScrollView>
                    <HeaderProfile/>
                    <Mood/>
                    <Faves/>
                    <Activities/>
                </ScrollView>
            </SafeAreaView>

        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    center: {
        flex:1,

    },
    linearGradient: {
        flex: 1,
    },
})