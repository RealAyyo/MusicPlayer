import React from 'react'
import {View, Text, StyleSheet, Image} from "react-native";
import {Button} from "react-native";
import library from '../../img/ico/libraryActive.png'
import waves from '../../img/ico/wave.gif'
import album from '../../img/ico/album.png'
import playList from '../../img/ico/playlist.png'


const Faves = ({navigation}) => {
    return (<View style={ styles.center }>
        <View style={ {flexDirection: 'row', alignItems: 'center', marginBottom:10} }>
            <Text style={ styles.title }>Избранное</Text>

        </View>
        <View style={ {paddingHorizontal: 20, paddingVertical:8, flexDirection: 'row', justifyContent: 'space-between'} }>
            <View   style={ styles.linearGradient }>
                <View style={ styles.circle }>
                    <Image source={ playList } style={ {width: 25, height: 25} }/>
                </View>
                <Text style={ styles.titleFaves }>Плейлисты</Text>
            </View>
            <View style={ styles.linearGradient }>
                <View style={ styles.circle }>
                    <Image source={ library } style={ {width: 25, height: 25} }/>
                </View>
                <Text style={ styles.titleFaves }>Синглы</Text>
            </View>
        </View>
        <View style={ {paddingHorizontal: 20, paddingVertical:8, flexDirection: 'row', justifyContent: 'space-between', marginBottom:20} }>
            <View style={ styles.linearGradient }>
                <View style={ styles.circle }>
                    <Image source={ album } style={ {width: 25, height: 25} }/>
                </View>
                <Text style={ styles.titleFaves }>Альбомы</Text>
            </View>
            <View   style={ styles.linearGradient }>
                <View style={ styles.circle }>
                    <Image source={ waves } style={ {width: 25, height: 25} }/>
                </View>
                <Text style={ styles.titleFaves }>Радио</Text>
            </View>
        </View>

    </View>)

}

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: 'space-between',

    },
    title: {
        fontFamily: 'Raleway-regular',
        color: 'white',
        fontSize: 17,
        opacity:0.8,
        paddingHorizontal: 20,

    },
    artistTitle: {
        fontFamily: 'Raleway-regular',
        color: 'white',
        marginTop: 10,
        fontSize: 17,
        opacity: 1
    },
    titleFaves: {
        fontFamily: 'Raleway-regular',
        color: 'white',
        fontSize: 17,
        opacity: 0.9,
        paddingLeft: 10
    },
    linearGradient: {
        width: 160,
        height: 70,
        borderRadius: 10,
        alignItems: 'center',
        flexDirection:'row',
        borderWidth:1,
        borderColor:'#2c2d41',
        padding:10
    },
    circle: {
        width: 50,
        height: 50,
        borderRadius: 500,
        alignItems: 'center',
        backgroundColor:'#2c2d41',
        opacity: 1,
        justifyContent: 'center',
    }
})


export default Faves