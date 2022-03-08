import React from 'react'
import {View, Text, StyleSheet, Image, useWindowDimensions, FlatList} from "react-native";
import universe from '../../img/universy.png'
import matrix from '../../img/matrix.png'
import russian from '../../img/russian.png'
import wave from '../../img/ico/wave.gif'
import RadioItem from "../Items/RadioItem";
import {TouchableOpacity} from "react-native-gesture-handler";

const artists = [
    {
        id:1,
        name: 'Русское Радио',
        photo: russian
    },
    {
        id:2,
        name: 'Радио Галактики',
        photo: universe
    },
    {
        id:3,
        name: 'Искуственный интеллект',
        photo: matrix
    }
]

const Radio = ({navigation}) =>{
    const {width} = useWindowDimensions()

    return <View style={styles.center}>
        <View style={styles.head}>
            <Text style={styles.title}>Радио-Live</Text>
            <TouchableOpacity onPress={()=> navigation.navigate('radio')}><Text style={styles.seeAll}>Полный список</Text></TouchableOpacity>
        </View>

        <View style={[styles.slider, {width}]}>
            <FlatList horizontal showsHorizontalScrollIndicator={false} data={artists}renderItem={({item}) => <RadioItem  item={item}/>}/>
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

export default Radio