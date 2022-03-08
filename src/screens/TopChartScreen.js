import React from 'react'
import {View, Text, StyleSheet} from "react-native";
import {LinearGradient} from "expo-linear-gradient";
import HeaderLibrary from "../components/LibraryScreen/HeaderLibrary";
import {ScrollView} from "react-native-gesture-handler";
import {SafeAreaView} from "react-native";
import HeaderTopChart from "../components/TopChartScreen/HeaderTopChart";
import SongItem from "../components/Items/Song/SongItem";
import xxxtentacion from "../img/xxxtentacion.png";
import billie from "../img/billie.png";
import kanye from "../img/Kanye.png";
import drake from "../img/drake.png";
const songs = [
    {
        id:1,
        name: 'XXXTENTACION',
        songName:'Trumpets',
        photo: xxxtentacion
    },
    {
        id:2,
        name: 'Billie Eilish',
        songName:'Deep water',
        photo: billie
    },
    {
        id:3,
        name: 'Kanye West',
        songName:'All day',
        photo: kanye
    },
    {
        id:4,
        name: 'Drake',
        songName:'Hotline Blink',
        photo: drake
    },
    {
        id:1,
        name: 'XXXTENTACION',
        songName:'Trumpets',
        photo: xxxtentacion
    },
    {
        id:2,
        name: 'Billie Eilish',
        songName:'Deep water',
        photo: billie
    },
    {
        id:3,
        name: 'Kanye West',
        songName:'All day',
        photo: kanye
    },
    {
        id:4,
        name: 'Drake',
        songName:'Hotline Blink',
        photo: drake
    },
    {
        id:1,
        name: 'XXXTENTACION',
        songName:'Trumpets',
        photo: xxxtentacion
    },
    {
        id:2,
        name: 'Billie Eilish',
        songName:'Deep water',
        photo: billie
    },
    {
        id:3,
        name: 'Kanye West',
        songName:'All day',
        photo: kanye
    },
    {
        id:4,
        name: 'Drake',
        songName:'Hotline Blink',
        photo: drake
    },
    {
        id:1,
        name: 'XXXTENTACION',
        songName:'Trumpets',
        photo: xxxtentacion
    },
    {
        id:2,
        name: 'Billie Eilish',
        songName:'Deep water',
        photo: billie
    },
    {
        id:3,
        name: 'Kanye West',
        songName:'All day',
        photo: kanye
    },
    {
        id:4,
        name: 'Drake',
        songName:'Hotline Blink',
        photo: drake
    },
    {
        id:1,
        name: 'XXXTENTACION',
        songName:'Trumpets',
        photo: xxxtentacion
    },
    {
        id:2,
        name: 'Billie Eilish',
        songName:'Deep water',
        photo: billie
    },
    {
        id:3,
        name: 'Kanye West',
        songName:'All day',
        photo: kanye
    },
    {
        id:4,
        name: 'Drake',
        songName:'Hotline Blink',
        photo: drake
    }
]
export const TopChartScreen = ({}) =>{
    return (
        <LinearGradient colors={['#191b28', '#141721']} start={[-3, -4]}  style={styles.linearGradient}>
            <SafeAreaView style={styles.center}>
                <ScrollView>
                    <HeaderTopChart/>
                    {
                        songs.map((item, index) => <SongItem key={ index } item={ item } place={index}/>  )
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