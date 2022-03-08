import React from 'react'
import {View, Text, StyleSheet, Image, useWindowDimensions, FlatList} from "react-native";
import hits2000 from '../../img/hits2000.png'
import rnb from '../../img/rnb.png'
import travis from '../../img/Travis.png'
import drake from '../../img/drake.png'
import ArtistItem from "../Items/ArtistItem";
import {TouchableOpacity} from "react-native-gesture-handler";
import PlaylistItem from "../Items/PlaylistItem";

const artists = [

    {
        id:3,
        name: 'Главные новинки',
        photo: travis
    },
    {
        id:2,
        name: 'R&B Лучшее',
        photo: rnb
    },
    {
        id:1,
        name: 'Хиты 2000-ых',
        photo: hits2000
    },
]

const Playlist = ({navigation}) =>{
    const {width} = useWindowDimensions()

    return <View style={styles.center}>
        <View style={styles.head}>
            <Text style={styles.title}>Плейлисты</Text>
            <TouchableOpacity onPress={()=> navigation.navigate('topChart')}><Text style={styles.seeAll}>Все плейлисты</Text></TouchableOpacity>
        </View>

        <View style={[styles.slider, {width}]}>
            <FlatList horizontal showsHorizontalScrollIndicator={false} data={artists}renderItem={({item}) => <PlaylistItem  item={item}/>}/>

            {/*{flat}*/}
        </View>
    </View>
}

const styles = StyleSheet.create({
    center: {
        paddingTop:20,
        flex:1,
        justifyContent:'space-between',

    },
    title: {
        fontFamily: 'Raleway-regular',
        color:'white',
        fontSize:17,
        opacity:0.8

    },
    seeAll:{
        color:'#6a6f96',
        fontFamily: 'Raleway-regular',
        fontSize: 13,
        opacity:0.8
    },
    head:{
        paddingHorizontal:20,
        justifyContent: 'space-between',
        flexDirection:'row',
        alignItems:'flex-end',
    },
    avatar:{
        backgroundColor: 'blue',
        width:50,
        height:50,
        borderRadius:50
    }
})

export default Playlist