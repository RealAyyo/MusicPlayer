import React from 'react'
import {View, Text, StyleSheet, Image, useWindowDimensions, FlatList} from "react-native";
import miller from '../../img/miller.jpg'
import drake from '../../img/scorpion.jpg'
import kanye from '../../img/808.jpg'
import {TouchableOpacity} from "react-native-gesture-handler";



const NewAlbum = ({navigation}) =>{
    const {width} = useWindowDimensions()

    return <View style={styles.center}>
        <View style={styles.head}>
            <Text style={styles.title}>Новые альбомы</Text>
            <TouchableOpacity onPress={()=> navigation.navigate('topChart')}><Text style={styles.seeAll}>Полный список</Text></TouchableOpacity>
        </View>
        <View style={{padding:20, flexDirection:'row'}}>
            <View style={{alignItems:'center'}}>
            <Image source={miller} style={{width:220, height:220, borderRadius:20}}/>

            </View>
            <View style={{paddingLeft:20}}>
            <View style={{alignItems:'center', paddingBottom:20}}>
                <Image source={drake} style={{ width:100, height:100, borderRadius:17}}/>

            </View>
                <View style={{alignItems:'center'}}>
                    <Image source={kanye} style={{ width:100, height:100, borderRadius:17}}/>

                </View>
            </View>

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
    artistTitle:{
        fontFamily: 'Raleway-regular',
        color:'white',
        marginTop: 10,
        fontSize:17,
        opacity:1
    },
    songTitle:{
        fontFamily: 'Raleway-regular',
        color:'white',
        fontSize:17,
        opacity:0.6
    }
})

export default NewAlbum