import { SafeAreaView, StatusBar } from 'react-native'
import React from 'react'
import { Home } from './src/pages/Home'

export default function App() {
  return (
    <SafeAreaView>
      <StatusBar barStyle={'light-content'} translucent/>
      <Home />
    </SafeAreaView>
  )
}