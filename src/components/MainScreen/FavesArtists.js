import React from 'react'
import {View, Text, StyleSheet, Image, useWindowDimensions, FlatList} from "react-native";
import xxxtentacion from '../../img/xxxtentacion.png'
import billie from '../../img/billie.png'
import kanye from '../../img/Kanye.png'
import drake from '../../img/drake.png'
import ArtistItem from "../Items/ArtistItem";
import {TouchableOpacity} from "react-native-gesture-handler";

const artists = [
    {
        id:1,
        name: 'XXXTENTACION',
        photo: xxxtentacion
    },
    {
        id:2,
        name: 'Billie Eilish',
        photo: billie
    },
    {
        id:3,
        name: 'Kanye West',
        photo: kanye
    },
    {
        id:4,
        name: 'Drake',
        photo: drake
    }
]

const FavesArtists = ({navigation}) =>{
    const {width} = useWindowDimensions()

    return <View style={styles.center}>
        <View style={styles.head}>
            <Text style={styles.title}>Самые прослушиваемые</Text>
            <TouchableOpacity onPress={()=> navigation.navigate('topChart')}><Text style={styles.seeAll}>Топ-10</Text></TouchableOpacity>
        </View>
        <View style={[styles.slider, {width}]}>
            <FlatList horizontal showsHorizontalScrollIndicator={false} data={artists}renderItem={({item}) => <ArtistItem  item={item}/>}/>
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
    seeAll:{
        color:'#6a6f96',
        fontFamily: 'Raleway-regular',
        fontSize: 13,
        opacity:0.8
    },
})

export default FavesArtists