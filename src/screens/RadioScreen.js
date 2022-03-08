import React from 'react'
import {View, Text, StyleSheet} from "react-native";
import {LinearGradient} from "expo-linear-gradient";
import HeaderLibrary from "../components/LibraryScreen/HeaderLibrary";
import {ScrollView} from "react-native-gesture-handler";
import {SafeAreaView} from "react-native";
import HeaderTopChart from "../components/TopChartScreen/HeaderTopChart";
import SongItem from "../components/Items/Song/SongItem";
import rus from "../img/russian.png";
import galaxy from "../img/universy.png";
import matrix from "../img/matrix.png";

import RadioItem from "../components/Items/RadioItem";
import RadioItemList from "../components/Items/RadioItemList";
import HeaderRadio from "../components/RadioScreen/HeaderRadio";
const radio = [
    {
        id:1,
        name: 'Русское радио',
        photo: rus
    },
    {
        id:2,
        name: 'Радио Галактики',
        photo: galaxy
    },
    {
        id:3,
        name: 'Исскуственный интеллект',
        photo: matrix
    },
    {
        id:1,
        name: 'Русское радио',
        photo: rus
    },
    {
        id:2,
        name: 'Радио Галактики',
        photo: galaxy
    },
    {
        id:3,
        name: 'Исскуственный',
        photo: matrix
    }
]
export const RadioScreen = ({}) =>{
    return (
        <LinearGradient colors={['#191b28', '#141721']} start={[-3, -4]}  style={styles.linearGradient}>
            <SafeAreaView style={styles.center}>
                <ScrollView>
                    <HeaderRadio/>
                    {
                        radio.map((item, index) => <RadioItemList key={ index } item={ item } />  )
                    }
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