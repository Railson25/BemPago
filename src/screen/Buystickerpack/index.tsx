
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
    const [selected, setSelected] = useState([false])
    const [comments, setComments] = useState('')
    const navigation = useNavigation()

    const dataProps = {comments, counter}

    const subtrack = () => setCounter(counter - 1)
    const add = () => setCounter(counter + 1)

    function handleHome(){
        navigation.navigate('Home', {dataProps})
    }

    function handleSelected(index, item){
        setSelected(old => {
          const newValues = [...old]  
          newValues[index ] = !newValues[index]
            return newValues
        })
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
                renderItem={({item, index}) => (
                <ListItems >
                    <Checkbox
                        status={selected[index] ? 'checked' : 'unchecked'}
                        color='blue'
                        onPress={() => handleSelected(index)}
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
                    onChangeText={setComments}
                    value={comments}
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