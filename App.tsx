/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Sliders from './components/sliders';
import LoginComp from './components/signUp/loginComp';
import SignUoOPtions from './components/signUpOptions';
import ProSignUp from './components/signUp/proSignUp';
import Header from './components/header';
import NearWalletSuccessful from './components/signUp/nearWalletSuccessfull';
import HomeScreen from './components/screens/homeScreen';
import HealthcareScreen from './components/screens/cardScreens/healthCare';
import Pharmacy from './components/screens/cardScreens/pharmacy';

const App = () => {

  return (
    // <Sliders
    //   title="Seek Medical Care"
    //   note="Explore our diverse array of certified medical professionals. Interact live and get on-time solutions to your healthcare needs."
    //   imagePath={undefined}    // imagePath='./asserts/slider1.png'
    // /> 
    // <LoginComp />
    // <PrimaryButton title={"sign up"} />
    // <SignUoOPtions />
    // <ProSignUp />
    // <Header />
    // <NearWalletSuccessful />
    // <HomeScreen />
    // <HealthcareScreen />
    <Pharmacy />

  );
};

export default App;
