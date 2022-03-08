import React, {useEffect} from 'react'
import {View, Text, StyleSheet} from "react-native";
import {Button} from "react-native";
import HeaderMain from "../components/MainScreen/HeaderMain";
import {SafeAreaView} from "react-native";
import {ScrollView} from "react-native-gesture-handler";
import {LinearGradient} from 'expo-linear-gradient';
import FavesArtists from "../components/MainScreen/FavesArtists";
import TopChart from "../components/MainScreen/TopChart";
import Radio from "../components/MainScreen/Radio";
import NewAlbum from "../components/MainScreen/NewAlbum";
import HistoryListen from "../components/MainScreen/HistoryListen";
import Playlist from "../components/MainScreen/NewPlaylist";

export const MainScreen = ({navigation}) =>{

    return (
        <LinearGradient colors={['#191b28', '#141721']} start={[-3, -4]}  style={styles.linearGradient}>
        <SafeAreaView style={styles.center}>
                <ScrollView>
                    <HeaderMain navigation={navigation}/>
                    <TopChart navigation={navigation}/>
                    <Radio   navigation={navigation}/>
                    <FavesArtists  navigation={navigation}/>
                    <NewAlbum  navigation={navigation}/>
                    <HistoryListen  navigation={navigation}/>
                    <Playlist  navigation={navigation}/>
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