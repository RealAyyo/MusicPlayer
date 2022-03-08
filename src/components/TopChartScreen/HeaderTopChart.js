import React from 'react'
import {View, Text, StyleSheet,Image} from "react-native";
import {Button} from "react-native";
import search from '../../img/ico/searchActive.png'

const HeaderTopChart = ({navigation}) =>{
    return <View style={styles.center}>
            <Text style={styles.title}>Топ-чарт</Text>
    </View>
}

const styles = StyleSheet.create({
    center: {
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        padding:20,
        marginTop:10,
        justifyContent:'space-between',
    },
    title: {
        fontFamily: 'Raleway-medium',
        color:'white',
        fontSize:29
    },
    avatar:{
        width:30,
        height:30,
    }
})

export default HeaderTopChart