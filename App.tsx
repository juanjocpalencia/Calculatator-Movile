import React from 'react'
import { SafeAreaView, StatusBar } from 'react-native'
import {style} from './src/Theme/appTheme'
import { CalculadoraScreen } from './src/screens/CalculadoraScreen'

const App = () => {
  return (
    <SafeAreaView style={style.fondo}>
        <StatusBar 
          backgroundColor='black'
          barStyle='light-content'
        />
        <CalculadoraScreen/>
    </SafeAreaView>
  )
}

export default App

