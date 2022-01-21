import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Main from '../src/page/Main';

const Stack = createNativeStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        name="Main" 
        component={Main} 
        options={{
            headerShown : false
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;