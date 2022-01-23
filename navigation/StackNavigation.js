import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Main from '../src/page/Main';
import Formulario from '../src/page/Formulario';
import ValidarCelular from '../src/page/ValidarCelular';
import Final from '../src/page/Final'

const Stack = createNativeStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={Main}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Formulario"
          component={Formulario}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="ValidarCelular"
          component={ValidarCelular}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Final"
          component={Final}
          options={{
            headerShown: false
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;