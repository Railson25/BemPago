import { Feather } from '@expo/vector-icons'
import { TouchableOpacityProps } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

interface ButtonProps  extends TouchableOpacityProps{
    onPress: () => void
}

export const Container = styled.View`
   flex: 1;
   background-color: ${({theme}) => theme.colors.background};
   
`

export const Header = styled.View`
   width: 100%;
   height: ${RFValue(200)}px;
   justify-content: center;
   background-color: ${({theme}) => theme.colors.primary};
   
`

export const HeaderContent = styled.View`
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`
export const HeaderTitle = styled.Text`
    color: ${({theme}) => theme.colors.background};
    font-size: ${RFValue(20)}px;
    font-family: ${({theme}) => theme.fonts.bold};
`

export const Icon = styled(Feather)`
    color: ${({theme}) => theme.colors.background};
    font-size: ${RFValue(40)}px;
`

export const TitleQuestion = styled.Text`
    color: ${({theme}) => theme.colors.title};
    font-size: ${RFValue(20)}px;
    font-family: ${({theme}) => theme.fonts.bold};
    margin-left: 12px;
    margin-bottom: ${RFValue(8)}px;
`
export const Title = styled.Text`
    color: ${({theme}) => theme.colors.title};
    font-size: ${RFValue(20)}px;
    font-family: ${({theme}) => theme.fonts.bold};
    margin-left: 12px;
`
export const TitleQuestionTwo = styled.Text`
    color: ${({theme}) => theme.colors.title};
    font-size: ${RFValue(20)}px;
    font-family: ${({theme}) => theme.fonts.bold};
    margin-left: 12px;
    margin-bottom: ${RFValue(40)}px;
`
export const TitleComment = styled.Text`
    color: ${({theme}) => theme.colors.title};
    font-size: ${RFValue(20)}px;
    font-family: ${({theme}) => theme.fonts.bold};
    margin-left: 12px;
    margin-top: ${RFValue(10 )}px;
`

export const Category = styled.View`
    justify-content: flex-start;
    flex-direction: row;
    margin-left: 12px;
` 

export const CategoryIcon = styled.Text`
    color: ${({theme}) => theme.colors.title};
    font-size: ${RFValue(12)}px;
    font-family: ${({theme}) => theme.fonts.regular};
    margin-right: 30px;
`

export const CategoryName = styled.Text`
    color: ${({theme}) => theme.colors.title};
    font-size: ${RFValue(14)}px;
    font-family: ${({theme}) => theme.fonts.bold};   
`

export const QuantityCounter = styled.View`
    align-items: center;
    justify-content: space-around;
    flex-direction: row;
    margin-bottom: ${RFValue(-5)}px;
`

export const Footer = styled.TouchableOpacity<ButtonProps>`
    margin-top: 10px;
    background-color: ${({theme}) => theme.colors.primary_light};
    height: 100px;
    justify-content: center;
    align-items: center;
    
`

export const FooterButton = styled.TouchableOpacity`
    width: 120px;
    height: 50px;
    border-radius: 25px;
    background-color: ${({theme}) => theme.colors.primary};
    align-items: center;
    justify-content: center;
`

export const FooterButtonText = styled.Text`
    color: ${({theme}) => theme.colors.background};
    font-family: ${({theme}) => theme.fonts.bold};
`

export const ListItems = styled.View`
    flex-direction: row;
    margin-bottom: 20px;
`