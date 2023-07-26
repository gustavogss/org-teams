import { SafeAreaView, StatusBar } from 'react-native'
import React from 'react'
import { Home } from '@pages/Home'
import { StyleSheet } from 'react-native'
import { ThemeProvider } from 'styled-components'
import theme from './src/theme'

export default function App() {
  return (
    <ThemeProvider theme={theme}>
    <SafeAreaView style={styles.container}>
     
      <StatusBar barStyle={'light-content'} translucent/>
      <Home />
      
    </SafeAreaView>
    </ThemeProvider>
  )
}
const styles = StyleSheet.create({
  container:{
    flex:1,   
  },
})