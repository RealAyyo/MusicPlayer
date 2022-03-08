import React from 'react'
import { View, Text, TouchableOpacity, Image, Animated } from 'react-native';
import {useRef} from "react";
import SongBottomPlay from "../components/Items/Song/SongBottomPlay";


export function BottomBar({ state, descriptors, navigation }) {
    return (
        <>
            <SongBottomPlay/>
        <View style={{ flexDirection: 'row'}}>

            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                        ? options.title
                        : route.name;
                    const {activeIcon, inActiveIcon} = route.params

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        // The `merge: true` option makes sure that the params inside the tab screen are preserved
                        navigation.navigate({ name: route.name, merge: true });
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };

                return (

                    <TouchableOpacity
                        activeOpacity={1}
                        accessibilityRole="button"
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        style={{ flex: 1,backgroundColor:'#191b28'}}
                    >
                            <View key={index} style={{height:60, justifyContent:'center', alignItems:'center'}}>
                                <Image source={isFocused ? activeIcon : inActiveIcon} style={{height:28, width:28}}/>
                                {/*<Text style={{color: isFocused ? 'white' : '#a34b4b', fontFamily:'Raleway-light', paddingVertical:5, fontSize:11}}>Главная</Text>*/}
                            </View>

                    </TouchableOpacity>
                );
            })}
        </View>
        </>
    );
}