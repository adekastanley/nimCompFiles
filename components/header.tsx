import React from 'react';
import { View, Text, StyleSheet, ViewStyle } from 'react-native';
// import PrimaryButtonBlack from './buttons/primaryButtonBlack';
// import PrimaryButton from './buttons/primaryButton';
// import PrimaryButtonGreen from './buttons/primaryButtonGreen';
// import { PrimaryButton, PrimaryButtonBlack, PrimaryButtonGreen, PrimaryRoundedButtonGreen } from './buttons/button';
// import LoginComp from './signUp/loginComp';
import BottomNavigation from './bottomNavigation';


// this was made foim portr testing purposes
export default function Header() {
    return (
        <View style={styles.container}>

            {/* <PrimaryButtonBlack title='helllo' />
            <PrimaryButton title='helllo' />
            <PrimaryButtonGreen title='hello' />
            <PrimaryRoundedButtonGreen title='hello' /> */}
            {/* <BottomNavigation /> */}

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
});
