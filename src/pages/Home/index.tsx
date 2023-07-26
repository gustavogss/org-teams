import React from 'react'
import { Header } from '@components/Header'
import { StyleSheet} from 'react-native'
import {Container} from './styles'

export function Home() {
  return (
    <Container> 
      <Header />  
    </Container>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#4b4848',
    justifyContent: 'center',
    alignItems: 'center',
  }
  
})