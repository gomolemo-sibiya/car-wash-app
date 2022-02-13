import React, { useState, useEffect } from 'react';
import * as Font from 'expo-font';
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  StatusBar,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Tabs from './navigation/Tabs';
import Checkout from './screens/Checkout';
import History from './screens/History';
import Payment from './screens/Payment';
import { customFonts } from './constants';
import 'react-native-gesture-handler';

const Stack = createStackNavigator();

export default function App() {
  const [assetsLoaded, setAssetLoaded] = useState(false);

  /* Loading custom fonts in async */
  const _loadAssetsAsync = async () => {
    await Font.loadAsync(customFonts);
    setAssetLoaded(true);
  };

  useEffect(() => {
    _loadAssetsAsync();
  });

  return assetsLoaded ? (
    <NavigationContainer>
      <StatusBar barStyle="light-content"></StatusBar>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Checkout"
      >
        <Stack.Screen name="Checkout" component={Tabs} />
        <Stack.Screen name="Payment" component={Payment} />
        <Stack.Screen name="History" component={History} />

      </Stack.Navigator>
    </NavigationContainer>
  ) : (
    <ActivityIndicator size="small"></ActivityIndicator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
