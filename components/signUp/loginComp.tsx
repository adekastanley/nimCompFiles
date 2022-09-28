
import { View, Text, StyleSheet, Image, TextInput } from 'react-native';
import React from 'react';
// import PrimaryButtonGreen from '../buttons/primaryButtonGreen';
// import PrimaryButtonBlack from '../buttons/primaryButtonBlack';
import { PrimaryButtonBlack, PrimaryButtonGreen, PrimaryRoundedButtonBlack } from '../buttons/button';

export default function LoginComp() {
    return (
        <View style={styles.container}>
            <View style={styles.topContainer}>
                <Image style={styles.logoImage} source={require('../asserts/nimlogo.png')} />
                <Text style={styles.textTitle}> Welcome Back</Text>
                <Text style={styles.textParagraph}> Let’s get you connected to a medical professional </Text>
            </View>


            <View style={styles.bottomContainer}>
                <View>
                    <Text style={styles.inputTitle}>Email Address</Text>
                    <TextInput style={styles.input} placeholder={'yourmail@email.com'} />
                </View>

                <View >
                    <Text style={styles.inputTitle}>Email Password</Text>
                    <TextInput style={styles.input} placeholder={'*****'} />

                </View>

                <PrimaryButtonGreen title={"Login"} />
                <Text> Forgot Password? </Text>
                <View style={styles.orContainer}>
                    <Text style={styles.orLines}></Text>
                    <Text>Or</Text>
                    <Text style={styles.orLines}></Text>
                </View>
                <PrimaryRoundedButtonBlack title='Continue with Facebook/Google' />



            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        color: 'white',
        backgroundColor: '#021D05',
    },
    topContainer: {
        height: '40%',
        backgroundColor: '#021D05',
        justifyContent: 'center',
        alignItems: 'center',

    },
    bottomContainer: {
        height: '60%',
        borderWidth: 1,
        borderColor: 'white',
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        backgroundColor: 'white',
        alignItems: 'center',
        paddingTop: 15,
    },
    logoImage: {
        width: 120,
        height: 100

    },
    textTitle: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        margin: 2,
    },
    textParagraph: {
        color: 'white',
        width: 240,
        textAlign: 'center'

    },
    input: {
        width: 280,
        height: 40,
        borderColor: '#E0E0E0',
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,


    },
    orContainer: {
        flexDirection: 'row',
        justifyItems: 'space-evenly',

    },
    orLines: {
        marginHorizontal: 10,
        width: 120,
        bottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#E0E0E0'


    },
    inputTitle: {
        margin: 10,
        right: 10,
    },
    bottomView: {
        alignContent: 'center'
    }

})