import React, {useEffect} from 'react'
import {View, Text, StyleSheet, Image, useWindowDimensions, FlatList} from "react-native";
import {LinearGradient} from "expo-linear-gradient";
import play from '../../../img/ico/play.png'
import like from '../../../img/ico/like.png'
import xxxtentacion from '../../../img/xxxtentacion.png'

const SongBottomPlay = ({item}) => {

    return (
        <LinearGradient colors={ ['#272d40', '#202535'] } start={ [1, 1] } end={ [1, 0.6] }
                        style={ styles.linearGradient }>
            <Image source={ xxxtentacion }
                   style={ {width: 45, height: 45, opacity: 0.7, borderRadius: 5, marginLeft: 5} }/>
            <View blurRadius={ 20 } style={ styles.center }>
                <View style={ {flexDirection: 'row', alignItems: 'center'} }>

                    <View>
                        <Text style={ styles.title }>XXXTENTACION</Text>
                        <Text style={ styles.titleSong }>Trumpets</Text>
                    </View>
                </View>
                <View style={ {flexDirection: 'row', alignItems: 'center'} }>
                    <Image source={ like } style={ {width: 25, height: 25, opacity: 0.7, marginLeft: 10} }/>
                    <Image source={ play } style={ {width: 22, height: 22, opacity: 0.7, marginLeft: 10} }/>
                </View>


            </View>
        </LinearGradient>

    )
}

const styles = StyleSheet.create({
    linearGradient: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    center: {
        paddingRight: 20,
        flexDirection: 'row',
        alignItems: 'center',
        height: 60,
        opacity: 1,
        justifyContent: 'space-between',
        flex: 1

    },
    title: {
        fontFamily: 'Raleway-regular',
        color: 'white',
        fontSize: 17,
        opacity: 1,
        paddingLeft: 10
    },
    titleSong: {
        fontFamily: 'Raleway-regular',
        color: 'white',
        fontSize: 17,
        opacity: 0.6,
        paddingLeft: 10
    }
})

export default SongBottomPlay