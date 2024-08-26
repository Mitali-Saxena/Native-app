import * as React from 'react';
import { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as Font from 'expo-font';
import SignupScreen from './screens/Signup';
import LoginScreen from './screens/Login';
import ForgotPasswordScreen from './screens/ForgotPassword';
import VerifyOTPScreen from './screens/VerifyOtp';
import FarmInfoScreen from './screens/FarmInfo';
import VerificationScreen from './screens/Verification';
import BusinessHoursScreen from './screens/BusinessHours';
import DoneScreen from './screens/Done';
import ResetPasswordScreen from './screens/ResetPassword';
import SplashScreen from './screens/Splash';

const Stack = createStackNavigator();

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const loadFonts = async () => {
    await Font.loadAsync({
      'BeVietnam-Regular': require('./assets/fonts/BeVietnam-Regular.ttf'),
      'BeVietnam-Bold': require('./assets/fonts/BeVietnam-Bold.ttf'),
 
    });
    setFontsLoaded(true);
  };


  useEffect(() => {
    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return null; 
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{ headerShown: false }} 
        />
        <Stack.Screen name="Signup" component={SignupScreen} options={{ headerShown: false }}  />
        <Stack.Screen name="FarmInfo" component={FarmInfoScreen} options={{ headerShown: false }} />
        <Stack.Screen name = "Verification" component={VerificationScreen} options={{headerShown: false}}/>
        <Stack.Screen name="BusinessHours" component={BusinessHoursScreen} options={{headerShown: false}} />
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} options={{ headerShown: false }} />
        <Stack.Screen name="VerifyOtp" component={VerifyOTPScreen} options={{ headerShown: false }} />
        <Stack.Screen name="ResetPassword" component={ResetPasswordScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Done" component={DoneScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

