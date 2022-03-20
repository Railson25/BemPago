import React from 'react'
import { StatusBar, Text } from 'react-native'
import {
    Container
} from './styles'



export function Home(){

   return(
      <Container>
          <StatusBar 
            barStyle='dark-content'
            backgroundColor="transparent"
            translucent
          />
          <Text>Finalizar Transação</Text>
      </Container>
   )
}