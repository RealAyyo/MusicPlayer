import React from 'react'
import {View, Text, StyleSheet,Image} from "react-native";
import {Button} from "react-native";
import ava from '../../img/mockupAva.png'
import {TouchableOpacity, Animated} from "react-native";
const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

const HeaderMain = ({navigation}) =>{
    return <View style={styles.center}>
            <Text style={styles.title}>Привет, Макс!</Text>
        <AnimatedTouchable  onPress={() => navigation.navigate('profile')}>
        <Image source={ava} style={styles.avatar}></Image>
        </AnimatedTouchable>
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

export default HeaderMain