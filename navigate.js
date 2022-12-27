import React from 'react';
import Main from './components/Main.js'
import FullInfo from './components/FullInfo.js';
import PreMain from './components/PreMain.js';
import { createStackNavigator, HeaderStyleInterpolators } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

export default function Navigate() {
   return <NavigationContainer>
          <Stack.Navigator>
          <Stack.Screen
              name='Категории' 
              component= {PreMain}
              option ={{
              title: 'Категории',
              headerStyle:{backgroundColor: 'Red', height: 100,}, 
              headerTitleStyle:{fontWeight:'900', fontSize:50}}}
                            
            />
            <Stack.Screen 
             name='Назад'
             component= {Main}
             option ={{
                title: 'Назад',
                headerStyle: { backgroundColor: 'Red', height: 100, },
                headerTitleStyle: { fontWeight:'400'}            
            }}
            />
            <Stack.Screen 
             name='FullInfo'
             component= {FullInfo}
             option ={{title: 'Настройки'}}
            />
          </Stack.Navigator>

   </NavigationContainer>

}