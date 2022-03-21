import { useRoute } from '@react-navigation/native'
import React from 'react'
import { StatusBar, Text } from 'react-native'
import {
    Container
} from './styles'



export function Home(){

    const route = useRoute()
    const {dataProps} = route.params 
    console.log(dataProps.name)

      console.log(dataProps)
   return(
      <Container>
          <StatusBar 
            barStyle='dark-content'
            backgroundColor="transparent"
            translucent
          />
          <Text>Finalizar Transação {dataProps.comments} </Text>
      </Container>
   )
}