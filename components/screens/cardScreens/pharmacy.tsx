import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Pressable } from 'react-native';
import React from 'react';
import { PrimaryHeaderWithSearch } from './cardComponents/headers';
import BottomNavigation from '../../bottomNavigation';
import PharmacyCard from './cardComponents/pharmacyCard';



export default function Pharmacy() {
    return (
        <View style={styles.container} >
            <View style={styles.header}>
                <PrimaryHeaderWithSearch title={'Pharmacy'} />
            </View>
            <View style={styles.body}>
                <ScrollView style={styles.scroll}>

                    <PharmacyCard title={'Dove Pharmacy'} />
                    <PharmacyCard title={'Dove Pharmacy'} />
                    <PharmacyCard title={'Dove Pharmacy'} />
                    <PharmacyCard title={'Dove Pharmacy'} />
                    <PharmacyCard title={'Dove Pharmacy'} />
                    <PharmacyCard title={'Dove Pharmacy'} />


                </ScrollView>
            </View>
            <View style={styles.navigation}>
                <BottomNavigation />
            </View>
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },

    header: {
        height: '6%',

    },

    body: {
        height: '88%',
        marginVertical: 3,
        paddingVertical: 10,
        alignItems: 'center',
        width: '100%',
    },

    scroll: {
        // alignItems: 'center',
        // marginLeft: 50
    },
    navigation: {
        // flex: 1,
        backgroundColor: 'white',
        height: '6%',
        marginTop: 'auto',
        justifyContent: 'center'
    },

})
