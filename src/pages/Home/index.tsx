import { View } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'
import { Header } from '@components/Header'

export function Home() {
  return (
    <View style={styles.container}>
      <Header />
    </View>
  )
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#4b4848',
    justifyContent: 'center',
    alignItems: 'center'
  } 
})