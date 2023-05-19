import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {OnboardScreen, Home, SignUp, SecurityQuestion, SuccessScreen, Biometrics, SignIn} from './screens';
import { TailwindProvider } from 'tailwindcss-react-native';
// import {AsyncStorage} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState, useEffect } from 'react';




const Stack = createStackNavigator();
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    border: "transparent",
  }
}




export default function App() {
  const [isFirstLauch, setIsFirstLauch] = useState(false)

  useEffect(() => {
    AsyncStorage.getItem("alreadyLauched").then(value => {
      if (value === null) {
        AsyncStorage.setItem("alreadyLaunched", "true");
        setIsFirstLauch(true);
      }else{
        setIsFirstLauch(false);
      }
    })
  }, []);
  return (
    <TailwindProvider>
      <NavigationContainer>
        <Stack.Navigator options={{headerShown: false}}>
          {isFirstLauch && (
            <Stack.Screen  name="OnboardScreen" component={OnboardScreen} />
          )}
          
          {/* <Stack.Screen options={{headerShown: false}} name="SignUp" component={SignUp} /> */}
          <Stack.Screen options={{headerShown: false}} name="SecurityQuestion" component={SecurityQuestion} />
          <Stack.Screen options={{headerShown: false}} name="SignIn" component={SignIn} />
          <Stack.Screen options={{headerShown: false}} name="SuccessScreen" component={SuccessScreen} />
          <Stack.Screen options={{headerShown: false}} name="Biometrics" component={Biometrics} />
          <Stack.Screen options={{headerShown: false}} name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="light" />
    </TailwindProvider>
  );
}