import React, { useState } from "react"
import { StyleSheet, Text, View } from 'react-native';
import AppLoading from 'expo-app-loading';
import {bootstrap} from "./src/bootstrap";
import MainStackNavigation from "./src/navigation/MainStackNavigation";
import {Provider} from "react-redux";
import store from './src/store/index'
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [isReady, setIsReady] = useState(false)

  if(!isReady){
    return <AppLoading
        startAsync={bootstrap}
        onFinish={() => setIsReady(true)}
        onError={(e) => console.log(e)}/>
  }

  return (<Provider store={store}>
      <MainStackNavigation/>
      <StatusBar style="light" />
      </Provider>)


}

