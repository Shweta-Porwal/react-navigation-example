/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import LoginPage from "./src/LoginPage";
import ForgotPasswordPage from "./src/ForgotPassword";


const AuthStack = createStackNavigator(
  {
      Login: LoginPage,
      ForgotPassword: ForgotPasswordPage
  }, {
      headerMode: "none",
      initialRouteName: 'Login',
  });

  const AppContainer = createAppContainer(AuthStack);

const App: () => React$Node = () => {
  return (
     <AppContainer/>
  );
};

export default App;
