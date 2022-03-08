import React, {useEffect} from 'react'
import {View, Text, StyleSheet, Image, useWindowDimensions, FlatList} from "react-native";
import xxxtentacion from '../../img/xxxtentacion.png'
import billie from '../../img/billie.png'
import kanye from '../../img/Kanye.png'
import drake from '../../img/drake.png'
import arrow from '../../img/ico/arrow.png'
import ArtistItem from "../Items/ArtistItem";
import SongItem from "../Items/Song/SongItem";
import {TouchableOpacity} from "react-native";
import SongHistoryItem from "../Items/Song/SongHistoryItem";


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
    }
]
const HistoryListen = ({navigation}) =>{


    return <View style={styles.center}>
        <View style={styles.head}>
        <Text style={styles.title}>Последнее проигрывалось</Text>
            <TouchableOpacity onPress={()=> navigation.navigate('topChart')}><Text style={styles.seeAll}>Полный спиок</Text></TouchableOpacity>

        {/*<Image source={arrow} style={{width:20, height:20}}/>*/}
        </View>
        <View style={styles.songs}>
            {
                songs.map((item, index) =>  <SongHistoryItem key={index} item={item}/>)
            }

        </View>
    </View>
}

const styles = StyleSheet.create({
    center: {
        flex:1,
        justifyContent:'space-between',

    },
    head:{
        paddingHorizontal:20,
        justifyContent: 'space-between',
        flexDirection:'row',
        alignItems:'flex-end',
    },
    title: {
        fontFamily: 'Raleway-regular',
        color: 'white',
        fontSize: 17,
        opacity:0.8
    },
    avatar:{
        backgroundColor: 'blue',
        width:50,
        height:50,
        borderRadius:50
    },
    seeAll:{
        color:'#6a6f96',
        fontFamily: 'Raleway-regular',
        fontSize: 13,
        opacity:0.8
    },
    songs:{

    }
})

export default HistoryListen