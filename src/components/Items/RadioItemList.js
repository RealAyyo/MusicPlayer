import React from 'react'
import {View, Text, StyleSheet, Image, useWindowDimensions, FlatList} from "react-native";
import xxxtentacion from "../../img/xxxtentacion.png";
import {LinearGradient} from "expo-linear-gradient";
import play from '../../img/ico/play.png'
import wave from "../../img/ico/wave.gif";

const RadioItemList = ({item}) => {
    const {width} = useWindowDimensions()

    return (

        <View style={ styles.center }>

            <LinearGradient colors={ ['#000000', '#42455d'] } start={ [0.1, -0.2] } style={ styles.linearGradient }>
                {/*<View>*/ }
                {/*<Image source={radio} style={{ width:25, height:25, position:'absolute'}}/>*/ }
                {/*</View>*/ }
                <Image  blurRadius={ 25 }  source={ item.photo }
                       style={  {height:60, borderRadius: 10, opacity: 0.2, resizeMode:'stretch'} }/>
                <View style={ {width: 300,height:60, paddingHorizontal:20, justifyContent: 'space-between', alignItems: 'center', position: 'absolute', flexDirection:'row'} }>
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
        padding: 20,
        justifyContent: 'space-between',
    },
    title: {
        fontFamily: 'Raleway-medium',
        color: 'white',
        fontSize: 20,
        opacity: 1,
        maxWidth:200,
        textAlign:'center',
    },
    linearGradient: {
        borderRadius: 10,
        height:60,
        flex:1,
        justifyContent: 'space-between',
        alignItems: 'center'
    }
})

export default RadioItemList