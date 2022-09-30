import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Pressable } from 'react-native';
import React from 'react';


export default function ServicesComp({ title, note }) {

    return (
        <TouchableOpacity style={styles.container}>
            <View style={styles.wrapper}>

                <Image style={styles.image} source={require('../screenAssets/cardimages/ambulance.png')} />
                <View style={styles.textContainer}>
                    <Text style={styles.title}> {title}</Text>
                    <Text style={styles.note}>{note}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    container: {
        height: 80,
        backgroundColor: 'rgba(6, 67, 13, 0.05)',
        width: '90%',
        borderRadius: 20,
        justifyContent: 'center',
        marginLeft: 20,
        marginVertical: 10


    },
    wrapper: {

        width: '100%',
        // backgroundColor: 'purple',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    textContainer: {
        width: 200,
        justifyContent: 'center',

    },
    title: {
        fontWeight: 'bold',
        fontSize: 14,
        right: 8,
        marginBottom: 2

    },
    note: {
        fontSize: 10,
        fontWeight: '600'
    },
    image: {

    }
})