import React from 'react'
import {View, Text, StyleSheet,Image} from "react-native";
import {Button} from "react-native";
import ava from '../../img/mockupAva.png'

const HeaderProfile = ({navigation}) =>{
    return <View style={styles.center}>
            <Text style={styles.title}>Мой профиль</Text>
        <Image source={ava} style={styles.avatar}></Image>
    </View>
}

const styles = StyleSheet.create({
    center: {
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        padding:20,
        justifyContent:'space-between',
    },
    title: {
        fontFamily: 'Raleway-medium',
        color:'white',
        fontSize:29
    },
    avatar:{
        backgroundColor: 'blue',
        width:50,
        height:50,
        borderRadius:50
    }
})
export default HeaderProfile