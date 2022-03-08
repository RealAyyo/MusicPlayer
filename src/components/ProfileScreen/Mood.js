import React, {useState} from 'react'
import {View, Text, StyleSheet, Image} from "react-native";
import {Button} from "react-native";
import alcohol from '../../img/smiles/alcohol.webp'
import neitral from '../../img/smiles/neitral.png'
import mad from '../../img/smiles/mad.png'
import love from '../../img/smiles/love.png'
import good from '../../img/smiles/good.webp'
import cry from '../../img/smiles/cry.png'
import playList from '../../img/ico/playlist.png'
import {TouchableOpacity, Animated} from "react-native";
import ava from "../../img/mockupAva.png";
const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

const Mood = ({navigation}) => {
    const [myMood, setMyMood] = useState('mad')
    return (<View style={ styles.center }>
        <View style={ {flexDirection: 'row', alignItems: 'center', marginBottom:10} }>
            <Text style={ styles.title }>Выбери настроение</Text>

        </View>
        <View style={ {paddingHorizontal: 20, paddingVertical:8,flexDirection:'row', justifyContent: 'space-around'} }>
            <AnimatedTouchable  onPress={() => setMyMood('good')}>
            <View style={ styles.linearGradient }>
                    <Image source={ good } style={ {width: 25, height: 25,opacity: myMood === 'good' ? 1 : 0.4}  }/>
            </View>
            </AnimatedTouchable>

                        <AnimatedTouchable  onPress={() => setMyMood('cry')}>

            <View style={ styles.linearGradient }>
                <Image source={ cry } style={ {width: 25, height: 25, opacity: myMood === 'cry' ? 1 : 0.4} }/>
            </View>
                        </AnimatedTouchable>
                        <AnimatedTouchable  onPress={() => setMyMood('love')}>

            <View style={ styles.linearGradient }>
                <Image source={ love } style={ {width: 25, height: 25, opacity: myMood === 'love' ? 1 : 0.4} }/>
            </View>
                        </AnimatedTouchable>
                        <AnimatedTouchable  onPress={() => setMyMood('mad')}>

            <View style={ styles.linearGradient }>
                <Image source={ mad } style={ {width: 25, height: 25, opacity: myMood === 'mad' ? 1 : 0.4} }/>
            </View>
                        </AnimatedTouchable>
                        <AnimatedTouchable  onPress={() => setMyMood('neitral')}>

            <View style={ styles.linearGradient }>
                <Image source={ neitral } style={ {width: 25, height: 25, opacity: myMood === 'neitral' ? 1 : 0.4} }/>
            </View>
                        </AnimatedTouchable>
                        <AnimatedTouchable  onPress={() => setMyMood('alcohol')}>

            <View style={ styles.linearGradient }>
                <Image source={ alcohol } style={ {width: 25, height: 25, opacity: myMood === 'alcohol' ? 1 : 0.4} }/>
            </View>
                        </AnimatedTouchable>
        </View>

    </View>)

}

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: 'space-between',
        marginBottom:20
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
        borderRadius: 550,
        alignItems: 'center',
        flexDirection:'row',
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


export default Mood