
import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { FlatList, SafeAreaView, StatusBar, TextInput } from 'react-native'
import { Checkbox } from 'react-native-paper'
import { useTheme } from 'styled-components'
import { Button } from '../../components/Form/Button'
import { data } from '../../utils/data'
import {
    Container, Footer, FooterButton, FooterButtonText, Header,
    HeaderContent,
    HeaderTitle, Icon, ListItems, QuantityCounter, Title, TitleComment, TitleQuestion, TitleQuestionTwo
} from './styles'


interface Data {
    key: string
    name: string
}

export function Buystickerpack({key, name}: Data){
    const theme = useTheme()
    const [ counter, setCounter] = useState(0)
    const [selected, setSelected] = useState(false)
    const navigation = useNavigation()

    const subtrack = () => setCounter(counter - 1)
    const add = () => setCounter(counter + 1)

    function handleHome(){
        navigation.navigate('Home', )
    }


   return(
      <Container>
          <StatusBar 
            barStyle='light-content'
            backgroundColor="transparent"
            translucent
          />
            <Header>
                <HeaderContent>
                    <HeaderTitle> Formulário{'\n'}para compra de{'\n'}pacote de adesivos   </HeaderTitle> 
                    <Icon name='filter' />
                </HeaderContent>
                
            </Header> 

            <TitleQuestion>Quais adesivos :</TitleQuestion>
            <FlatList 
                data={data}
                keyExtractor={(item) => item.key}
                renderItem={({item}) => (
                <ListItems >
                    <Checkbox
                        status={ 'checked' || 'unchecked'}
                        color='blue'
                        onPress={() => setSelected(true)}
                    />
                    <Title>{item.name}</Title>
            </ListItems>
                )}
            />
            
            <TitleQuestionTwo>Quantos adesivos de cada?</TitleQuestionTwo>
            <QuantityCounter>  
                <Button 
                    title='-' 
                    onPress={subtrack}
                />
                 <Title>{counter}</Title> 
                <Button 
                    title='+'
                    onPress={add}
                />
            </QuantityCounter>

            <TitleComment>Observações :</TitleComment>

            <SafeAreaView
                style={{
                    borderWidth: 1,
                    marginLeft: 14,
                    marginRight: 14,
                    borderBottomColor: theme.colors.primary,
                    backgroundColor: theme.colors.primary_light
                }}
            >
                <TextInput 
                    style={{height: 100, marginBottom: 10,}}
                    placeholder='Alguma dúvida? Reacado?'
                />
            </SafeAreaView>
            
            <Footer>
                    <FooterButton onPress={handleHome}>
                        <FooterButtonText>Enviar</FooterButtonText>
                    </FooterButton> 
            </Footer>
      </Container>
   )
}