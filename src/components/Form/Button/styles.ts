import styled from 'styled-components/native'

export const Container = styled.TouchableOpacity`
   width: 50px;
   height: 50px;
   background-color: ${({theme}) => theme.colors.primary};
   border-radius: 5px;
   align-items: center;
   padding: 15px;
`

export const Title = styled.Text`
   color: ${({theme}) => theme.colors.background};
   font-size: 14px;
   
`