import React from 'react'
import {View, Text, StyleSheet, Image, useWindowDimensions, FlatList} from "react-native";


const PlaylistItem = ({item}) =>{
    const {width} = useWindowDimensions()

    return (

            <View style={styles.center}>


                <Image source={item.photo} style={{width:140, height:140, borderRadius:20, opacity:0.9}}/>
                <Text style={styles.title}>{item.name}</Text>
            </View>
            )
}

const styles = StyleSheet.create({
    center: {
        flex:1,
        paddingTop:20,
        paddingLeft:20,
        justifyContent:'space-between',
    },
    title: {
        fontFamily: 'Raleway-regular',
        color:'white',
        marginTop: 15,
        fontSize:17,
        opacity:0.6
    },
    linearGradient: {
        borderRadius:20
    }
})

export default PlaylistItem