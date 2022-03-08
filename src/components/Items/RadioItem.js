import React from 'react'
import {View, Text, StyleSheet, Image, useWindowDimensions, FlatList} from "react-native";
import xxxtentacion from "../../img/xxxtentacion.png";
import {LinearGradient} from "expo-linear-gradient";
import play from '../../img/ico/play.png'
import wave from "../../img/ico/wave.gif";

const RadioItem = ({item}) => {
    const {width} = useWindowDimensions()

    return (

        <View style={ styles.center }>

            <LinearGradient colors={ ['#000000', '#42455d'] } start={ [0.1, -0.2] } style={ styles.linearGradient }>
                {/*<View>*/ }
                {/*<Image source={radio} style={{ width:25, height:25, position:'absolute'}}/>*/ }
                {/*</View>*/ }
                <Image blurRadius={ 15 } source={ item.photo }
                       style={  {width: 300, height: 60, borderRadius: 10, opacity: 0.2} }/>
                <View style={ {width: 300, padding:20, justifyContent: 'space-between', alignItems: 'center', position: 'absolute', flexDirection:'row'} }>
                    <Image source={ wave } style={ {width: 25, height: 25} }/>
                    <Text style={ styles.title }>{ item.name }</Text>
                    <Image source={ play } style={ {width: 25, height: 25} }/>

                </View>
                {/*<Image blurRadius={5} source={item.photo} style={{ width:300, height:60, borderRadius:0, opacity:0.4}} />*/ }
            </LinearGradient>

        </View>
    )
}

const styles = StyleSheet.create({
    center: {
        flex: 1,
        paddingTop: 20,
        paddingLeft: 20,
        justifyContent: 'space-between',
    },
    title: {
        fontFamily: 'Raleway-medium',
        color: 'white',
        fontSize: 20,
        opacity: 1,
        // position:'absolute'

    },
    linearGradient: {
        borderRadius: 10,
        width: 300,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center'
    }
})

export default RadioItem