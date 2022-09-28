
import { View, Text, StyleSheet, Image, TextInput } from 'react-native';
import React from 'react';
import { PrimaryButton } from '../buttons/button';

export default function NearWalletSuccessful() {
    return (
        <View style={styles.container}>
            <Image source={require('../asserts/icons/success.png')} />
            <Text style={styles.text}>Account Created Successfully</Text>
            <Text style={styles.text}>Your NEAR Wallet Address Is: </Text>
            <View style={styles.nearAddress}>
                <Text style={styles.nearAddressText}>0a81755cf206abc8cbe12141974055169a95edde1da3fa9e456f65eddd677376</Text>
            </View>
            <PrimaryButton title={'Sign in'} />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        margin: 10
    },
    nearAddress: {
        borderColor: '#DFE2E7',
        borderWidth: .7,
        textAlign: 'center',
        height: 60,
        width: 300,
        borderRadius: 10,
        justifyContent: 'center',
        padding: 20,
        marginBottom: 10
    },
    nearAddressText: {
        textAlign: 'center'

    }
})
