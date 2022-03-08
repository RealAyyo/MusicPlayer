import React from 'react'
import {View, Text, StyleSheet} from "react-native";
import {SafeAreaView} from "react-native";
import {ScrollView} from "react-native-gesture-handler";
import {LinearGradient} from 'expo-linear-gradient';
import HeaderSearch from "../components/SearchScreen/HeaderSearch";

export const SearchScreen = ({}) =>{
    return (
        <LinearGradient colors={['#191b28', '#141721']} start={[-3, -4]}  style={styles.linearGradient}>
            <SafeAreaView style={styles.center}>
                <ScrollView>
                    <HeaderSearch/>

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