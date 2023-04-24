import React from 'react'
import { SafeAreaView, StatusBar } from 'react-native'
import {style} from './src/Theme/appTheme'
import { CalculatorScreen } from './src/screens/CalculatorScreen'

const App = () => {
  return (
    <SafeAreaView style={style.background}>
        <StatusBar 
          backgroundColor='black'
          barStyle='light-content'
        />
        <CalculatorScreen/>
    </SafeAreaView>
  )
}

export default App

