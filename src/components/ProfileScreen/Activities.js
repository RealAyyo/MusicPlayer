import React from 'react'
import {View, Text, StyleSheet, Image, useWindowDimensions} from "react-native";
import library from '../../img/ico/libraryActive.png'
import arrow from '../../img/ico/arrow.png'
import playList from '../../img/ico/playlist.png'
import like from '../../img/ico/like.png'
import subscribe from '../../img/ico/subscribe.png'
import settings from '../../img/ico/settings.png'

const Activities = ({navigation}) => {
    const {width} = useWindowDimensions()

    return (<View style={ [styles.center, {width: width}] }>
        <View style={ {flexDirection: 'row', alignItems: 'center'} }>
            <Text style={ styles.title }>Активность</Text>

        </View>
        <View style={ {padding: 19, justifyContent: 'space-between'} }>

            <View style={ styles.linearGradient }>
                <View style={ {flexDirection: 'row', alignItems: 'center'} }>
                    <Image source={ playList } style={ {width: 25, height: 25} }/>
                    <Text style={ styles.titleFaves }>Ваши плейлисты</Text>
                </View>
                <Image source={ arrow } style={ {width: 20, height: 20} }/>
            </View>

            <View style={ styles.linearGradient }>
                <View style={ {flexDirection: 'row', alignItems: 'center'} }>
                    <Image source={ like } style={ {width: 25, height: 25} }/>
                    <Text style={ styles.titleFaves }>Избранные песни</Text>
                </View>
                <Image source={ arrow } style={ {width: 20, height: 20} }/>
            </View>

            <View style={ styles.linearGradient }>
                <View style={ {flexDirection: 'row', alignItems: 'center'} }>
                    <Image source={ subscribe } style={ {width: 25, height: 25} }/>
                    <Text style={ styles.titleFaves }>Подписки</Text>
                </View>
                <Image source={ arrow } style={ {width: 20, height: 20} }/>
            </View>

            <View style={ styles.linearGradient }>
                <View style={ {flexDirection: 'row', alignItems: 'center'} }>
                    <Image source={ settings } style={ {width: 25, height: 25} }/>
                    <Text style={ styles.titleFaves }>Настройки</Text>
                </View>
                <Image source={ arrow } style={ {width: 20, height: 20} }/>
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
        paddingHorizontal: 20,
        opacity:0.8
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
        paddingLeft: 20
    },
    linearGradient: {
        borderBottomLeftRadius: 50,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        borderBottomWidth: 1,
        borderColor: '#2c2d41'
    },
    circle: {

        borderRadius: 500,
        alignItems: 'center',
        backgroundColor: '#2c2d41',
        opacity: 1,
        justifyContent: 'center'
    }
})


export default Activities