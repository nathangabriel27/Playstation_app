import React, { useEffect, useState } from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';


import Main from '../src/Pages/Main'
import DetailsConsole from '../src/Pages/DetailsConsole'
const Stack = createStackNavigator();

export default function Routes() {

  function RootStack() {
    return (
      <Stack.Navigator initialRouteName={"Main"} screenOptions={{ headerShown: false, animationEnabled: false }}>
        <Stack.Screen name="Main" component={Main} options={{ title: '', headerShown: false, }} />
        <Stack.Screen name="DetailsConsole" component={DetailsConsole} options={{ title: '', headerShown: false, }} />
      </Stack.Navigator >
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: true, animationEnabled: false }}>
        <Stack.Screen
          name="RootStack"
          component={RootStack}
          options={{ headerShown: false, }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}