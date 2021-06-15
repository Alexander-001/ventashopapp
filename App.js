import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Cliente from './pages/Cliente';
import NuevoCliente from './pages/NuevoCliente';
import NuevoPedido from './pages/NuevoPedido';
import Pedidos from './pages/Pedidos';

const Stack = createStackNavigator();

const App = () => {

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: '#022697'
            },
            headerTitleStyle: {
              fontWeight: 'bold',
              color: "#FFFFFF"
            }
          }}
        >
          <Stack.Screen
            name="Clientes"
            component={Cliente}
            options={{
              title: "Clientes"
            }}
          />
          <Stack.Screen
            name="NuevoCliente"
            component={NuevoCliente}
            options={{
              title: "Nuevo Cliente"
            }}
          />
          <Stack.Screen
            name="Pedidos"
            component={Pedidos}
            options={{
              title: "Pedidos"
            }}
          />
          <Stack.Screen
            name="NuevoPedido"
            component={NuevoPedido}
            options={{
              title: "Nuevo Pedido"
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;