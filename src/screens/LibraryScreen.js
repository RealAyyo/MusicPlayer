import React from 'react'
import {View, Text, StyleSheet} from "react-native";
import {LinearGradient} from "expo-linear-gradient";
import HeaderLibrary from "../components/LibraryScreen/HeaderLibrary";
import {ScrollView} from "react-native-gesture-handler";
import {SafeAreaView} from "react-native";

export const LibraryScreen = ({}) =>{
    return (
        <LinearGradient colors={['#191b28', '#141721']} start={[-3, -4]}  style={styles.linearGradient}>
            <SafeAreaView style={styles.center}>
                <ScrollView>
                    <HeaderLibrary/>

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