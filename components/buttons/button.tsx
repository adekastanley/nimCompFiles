import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Reactr from 'react';



// accepts a prop "title"(that is destructed )
export function PrimaryButton({ title }) {
    return (

        // this small ROUNDED button has a style {primaryButtonStyles } accepts a title prop,It has an left facing icon on it 
        <View style={primaryButtonStyles.container}>
            <TouchableOpacity style={primaryButtonStyles.primaryButton}>
                <View style={primaryButtonStyles.innerButton}>
                    <Text style={primaryButtonStyles.primaryButtonText}> {title}</Text>
                    <Image style={primaryButtonStyles.buttonIcon} source={require('../asserts/button-icons/icon-faceleft.png')} />
                </View>

            </TouchableOpacity>
        </View>

    );
}

// accepts a prop "title"(that is destructed )
export function PrimaryButtonBlack({ title }) {
    /**
     * this button is a wide ROUNDED black button with style {primaryBlackButtonStyles}, it accepts a prop of title
     */
    return (
        <View style={primaryBlackButtonStyles.buttonContainer}>
            <TouchableOpacity style={primaryBlackButtonStyles.PrimaryButtonStyle} >
                <Text style={primaryBlackButtonStyles.text}>{title}</Text>
            </TouchableOpacity>
        </View>
    )
}

// accepts a prop "title"(that is destructed )
export function PrimaryButtonGreen({ title }) {
    // this button is a large Green Squared button with style {PrimaryGreenButtonStyles}
    return (
        <View style={PrimaryGreenButtonStyles.buttonContainer}>
            <TouchableOpacity style={PrimaryGreenButtonStyles.PrimaryButtonStyle} >
                <Text style={PrimaryGreenButtonStyles.text}>{title}</Text>
            </TouchableOpacity>
        </View>
    )
}

// accepts a prop "title"(that is destructed )
export function PrimaryRoundedButtonGreen({ title }) {
    // this button is a large Green Squared button with style {PrimaryGreenButtonStyles}
    return (
        <View style={PrimaryRoundedButtonGreenStyles.buttonContainer}>
            <TouchableOpacity style={PrimaryRoundedButtonGreenStyles.PrimaryButtonStyle} >
                <Text style={PrimaryRoundedButtonGreenStyles.text}>{title}</Text>
            </TouchableOpacity>
        </View>
    )
}

// accepts a prop "title"(that is destructed )
export function PrimaryRoundedButtonBlack({ title }) {
    // this button is a large Black Squared button with style {PrimaryGreenButtonStyles}
    return (
        <View style={PrimaryRoundedButtonBlackStyles.buttonContainer}>
            <TouchableOpacity style={PrimaryRoundedButtonBlackStyles.PrimaryButtonStyle} >
                <Text style={PrimaryRoundedButtonBlackStyles.text}>{title}</Text>
            </TouchableOpacity>
        </View>
    )
}

// this style is for the primary button
const primaryButtonStyles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginTop: 10,

    },
    primaryButton: {
        width: 110,
        height: 40,
        backgroundColor: '#06430D',
        justifyContent: 'center',
        borderRadius: 30,
    },
    primaryButtonText: {
        textAlign: 'center',
        fontSize: 15,
        fontWeight: 'bold',
        color: 'white'
    },
    innerButton: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 1
    },
    buttonIcon: {
        width: 15,
        height: 15,
        margin: 2,
        marginTop: 4,

    }

})

// this style is for the primary black button

const primaryBlackButtonStyles = StyleSheet.create({
    buttonContainer: {
        margin: 10
    },
    PrimaryButtonStyle: {
        backgroundColor: 'black',
        borderWidth: 1,
        borderColor: 'black',
        width: 275,
        height: 40,
        justifyContent: 'center',
        borderRadius: 20

    },
    text: {
        fontSize: 14,
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
    }
})

//this is the styles for the primary green button 

const PrimaryGreenButtonStyles = StyleSheet.create({
    buttonContainer: {
        margin: 10
    },
    PrimaryButtonStyle: {
        backgroundColor: '#06430D',
        borderWidth: 1,
        borderColor: '#06430D',
        width: 275,
        height: 40,
        justifyContent: 'center'

    },
    text: {
        fontSize: 15,
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold'
    }
})


const PrimaryRoundedButtonGreenStyles = StyleSheet.create({
    buttonContainer: {
        margin: 10
    },
    PrimaryButtonStyle: {
        backgroundColor: '#06430D',
        borderWidth: 1,
        borderColor: '#06430D',
        width: 275,
        height: 40,
        justifyContent: 'center',
        borderRadius: 30,

    },
    text: {
        fontSize: 15,
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold'
    }
})
const PrimaryRoundedButtonBlackStyles = StyleSheet.create({
    buttonContainer: {
        margin: 10
    },
    PrimaryButtonStyle: {
        backgroundColor: '#000',
        borderWidth: 1,
        borderColor: '#06430D',
        width: 275,
        height: 40,
        justifyContent: 'center',
        borderRadius: 30,

    },
    text: {
        fontSize: 15,
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold'
    }
})