import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Pressable } from 'react-native';
import React from 'react';
import BottomNavigation from '../../bottomNavigation';
import { PrimaryHeader, PrimaryHeaderWithSearch } from './cardComponents/headers';
import ServicesComp from './cardComponents/services';

export default function HealthcareScreen() {

    return (
        <View style={styles.container}>

            <View style={styles.header} >
                <PrimaryHeader title={'Health Care'} />
                {/* <PrimaryHeaderWithSearch title={' doctors'} /> */}
            </View>
            <View style={styles.body}>

                <ScrollView  >
                    <ServicesComp title={' emergency Searvices'} note={'TIA, Stroke, Headaches, Parkinson’s disease, Dementia etc'} />
                    <ServicesComp title={' Paediatrics/Childcare Service'} note={'TIA, Stroke, Headaches, Parkinson’s disease, Dementia etc'} />
                    <ServicesComp title={'Psychiatry'} note={'TIA, Stroke, Headaches, Parkinson’s disease, Dementia etc '} />
                    <ServicesComp title={' Family Medice '} note={'TIA, Stroke, Headaches, Parkinson’s disease, Dementia etc'} />
                    <ServicesComp title={' Neurology '} note={' TIA, Stroke, Headaches, Parkinson’s disease, Dementia etc'} />
                    <ServicesComp title={' Dermatology '} note={'TIA, Stroke, Headaches, Parkinson’s disease, Dementia etc'} />
                    <ServicesComp title={' Dermatology '} note={'TIA, Stroke, Headaches, Parkinson’s disease, Dementia etc'} />
                    <ServicesComp title={' Dermatology '} note={'TIA, Stroke, Headaches, Parkinson’s disease, Dementia etc'} />
                    <ServicesComp title={' Dermatology '} note={'TIA, Stroke, Headaches, Parkinson’s disease, Dementia etc'} />

                </ScrollView>
            </View>


            <View style={styles.navigation}>
                < BottomNavigation />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },


    header: {
        height: '6%',

    },
    // scrollview: {
    //     backgroundColor: 'red',
    //     // width: '100%'
    // },
    body: {
        height: '88%',
        marginVertical: 3,
        paddingVertical: 10,
        // alignItems: 'center',
        // alignContent: 'center',
        width: '100%',
    },
    navigation: {
        // flex: 1,
        backgroundColor: 'white',
        height: '6%',
        marginTop: 'auto',
        justifyContent: 'center'
    },

})