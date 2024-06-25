import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {Routes} from '../screens/ForgetPassword/Routes';

import EmailComponent from '../screens/ForgetPassword/EmailComponent';
import PasswordResetComponent from '../screens/ForgetPassword/PasswordResetComponent';
import DetailsComponent from '../screens/ForgetPassword/DetailsComponent';

const Stack = createStackNavigator();

export const AppStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={'email'}
        screenOptions={{
          headerShown: false,
          gestureEnabled: false,
        }}>
        <Stack.Screen name={Routes.forget.email} component={EmailComponent} />
        <Stack.Screen
          name={Routes.forget.reset}
          component={PasswordResetComponent}
        />
        <Stack.Screen
          name={Routes.forget.details}
          component={DetailsComponent}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
