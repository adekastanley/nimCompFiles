import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, PermissionsAndroid } from 'react-native';
import Reactr from 'react';
import PrimaryButtonGreen from '../buttons/primaryButtonGreen';



export default function ProSignUp() {
    return (
        <View style={styles.container}>
            {/* header */}
            <View style={styles.header}>
                <View>
                    <Text style={styles.title}>Profesional Sign Up</Text>
                    <Text>Create New Account</Text>
                </View>
                <TouchableOpacity>

                    <Image style={styles.icon} source={require('../asserts/icons/Icon-Back.png')} />
                </TouchableOpacity>
            </View>

            {/* body */}

            <View style={styles.body} >
                {/* these view are for the inputs and images */}
                <View style={styles.inputContainer}>
                    <Image style={styles.inputIcon} source={require('../asserts/form-icons/person.png')} />
                    <TextInput style={styles.textInput} placeholder='Full Name' />
                </View>

                <View style={styles.inputContainer}>
                    <Image style={styles.inputIcon} source={require('../asserts/form-icons/certificate.png')} />
                    <TextInput style={styles.textInput} placeholder='Qualification' />
                </View>

                <View style={styles.inputContainer}>
                    <Image style={styles.inputIcon} source={require('../asserts/form-icons/email.png')} />
                    <TextInput style={styles.textInput} placeholder='Email Address' />
                </View>
                <View style={styles.inputContainer}>
                    <Image style={styles.inputIcon} source={require('../asserts/form-icons/whatsapp.png')} />
                    <TextInput style={styles.textInput} placeholder='WhatsApp Number' />
                </View>

                <View style={styles.inputContainer}>
                    <Image style={styles.inputIcon} source={require('../asserts/form-icons/hospital.png')} />
                    <TextInput style={styles.textInput} placeholder='Current Hospital Or Practice' />
                </View>

                <View style={styles.inputContainer}>
                    <Image style={styles.inputIcon} source={require('../asserts/form-icons/password.png')} />
                    <TextInput style={styles.textInput} placeholder=' ****** ' />
                </View>

                {/* button still part of the part, did this to justify center */}
                <PrimaryButtonGreen title='Create Account' style={styles.button} />

            </View>






        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        // alignItems: 'center'
    },
    // header part
    header: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        // margin: 10,
        padding: 10

    },
    title: {
        fontWeight: 'bold',
        fontSize: 20
    },
    icon: {
        width: 65,
        height: 45,


    },

    // body part 
    body: {
        padding: 20,
        justifyContent: 'center'

    },
    inputContainer: {

        borderColor: '#E2E6EB',
        borderWidth: 1,
        height: 60,
        borderRadius: 100,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingLeft: 10,
        marginTop: 10,
        marginBottom: 10,

    },
    inputIcon: {
        width: 20,
        height: 20,

        margin: 4,



    },
    textInput: {
        height: 40,
        width: 300
    },

    button: {
        borderBottomColor: 'red',
        borderWidth: 5,
        borderRadius: 30,
    }


})