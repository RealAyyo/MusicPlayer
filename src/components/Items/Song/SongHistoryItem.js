import React, {useEffect} from 'react'
import {View, Text, StyleSheet, Image, useWindowDimensions, FlatList} from "react-native";
import xxxtentacion from "../../../img/xxxtentacion.png";
import {LinearGradient} from "expo-linear-gradient";
import {Audio} from "expo-av";
import {TouchableOpacity} from "react-native";
import wave from '../../../img/ico/wave.gif'
import configAudio from "../../config/config";

const SongItem = (props) =>{
    const {width} = useWindowDimensions()
    const {item, place} = props
    const [sound, setSound] = React.useState(null);
    async function playSound() {
        console.log('Loading Sound');
        await Audio.setAudioModeAsync(configAudio)
        const { sound } = await Audio.Sound.createAsync(
            require('../../MainScreen/aaa.mp3')
        );
        setSound(sound);
        const x = await sound.getStatusAsync()
        console.log(x)

        console.log('Playing Sound');
        await sound.playAsync(); }

    async function pauseSound() {
        await sound.pauseAsync();
        setSound(false);
        console.log('Pause Sound');

    }
    useEffect(() => {
        return sound
            ? () => {
                console.log('Unloading Sound');
                sound.unloadAsync(); }
            : undefined;
    }, [sound]);
    return (

        <View style={styles.center}>
            {/*<Text style={{color:'white', paddingRight:10, fontFamily:'Raleway-Medium', fontSize:20, opacity:0.8}}>{item.id}</Text>*/}
            <View style={styles.blockSong}>
                <TouchableOpacity onPress={()=>{ !sound ? playSound() : pauseSound()}}>
                <Image source={item.photo} style={{width:50, height:50, borderRadius:10, opacity:0.9}}/>
            </TouchableOpacity>
                <View>
                    <Text style={styles.title}>{item.name}</Text>
                    <Text style={styles.titleSong}>{item.songName}</Text>
                </View>
            </View>

            { sound ? <Image source={ wave } style={ {width: 20, height: 20} }/> : null }
        </View>
    )
}

const styles = StyleSheet.create({
    center: {
        flex:1,
        paddingTop:10,
        marginHorizontal:20,
        flexDirection:'row',
        alignItems:'center',
    },
    blockSong: {
        flex:1,
        flexDirection:'row',
        alignItems:'center',
    },
    title: {
        fontFamily: 'Raleway-regular',
        color:'white',
        fontSize:17,
        opacity:1,
        paddingLeft: 10
    },
    place:{
        fontFamily: 'Raleway-regular',
        color:'white',
        fontSize:17,
        opacity:0.9,
        paddingRight: 20
    },
    titleSong: {
        fontFamily: 'Raleway-regular',
        color:'white',
        fontSize:17,
        opacity:0.6,
        paddingLeft: 10
    },
    linearGradient: {
        borderRadius:20
    }
})

export default SongItem