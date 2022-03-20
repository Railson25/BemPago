import { createStackNavigator } from '@react-navigation/stack';
import React from "react";
import { Buystickerpack } from '../screen/Buystickerpack';
import { Home } from '../screen/Home';



const {Navigator, Screen} = createStackNavigator()

export function AppStackRoutes(){
    return(
        <Navigator screenOptions={{headerShown: false }} initialRouteName='Buystickerpack' >
            <Screen name="Home" component={Home}/>
            <Screen name="Buystickerpack" component={Buystickerpack}/>
            
        </Navigator>
    )
}