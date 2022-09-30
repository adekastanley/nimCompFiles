import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Pressable } from 'react-native';
import React from 'react';


export function PrimaryHeader({ title }) {
    return (
        <View style={styles.primaryHeaderContainer}>
            <View style={styles.primaryImageContainer}>
                <Image style={styles.primaryHeaderImage} source={require('../screenAssets/icon-Back.png')} />
            </View>

            <Text style={styles.primaryHeaderText} > {title}</Text>
        </View>
    )
}
export function PrimaryHeaderWithSearch({ title }) {
    return (
        <View style={styles.primaryHeaderContainer}>
            <View style={styles.primaryImageContainer}>
                <TouchableOpacity>

                    <Image style={styles.primaryHeaderImage} source={require('../screenAssets/icon-Back.png')} />
                </TouchableOpacity>

            </View>

            <Text style={styles.primaryHeaderText} > {title}</Text>

            <View style={styles.primaryImageSearchContainer}>
                <TouchableOpacity>
                    <Image style={styles.primaryHeaderImageSearch} source={require('../screenAssets/search.png')} />
                </TouchableOpacity>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    primaryHeaderContainer: {
        width: '100%',
        backgroundColor: '#FFFFFF',
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomColor: 'rgba(0, 0, 0, .06)',
        borderBottomWidth: 1
    },
    primaryImageContainer: {
        height: 50,

    },
    primaryHeaderImage: {
        height: 80,
        width: 80,
        justifyContent: 'center',
        // backgroundColor: 'blue'
    },
    primaryHeaderText: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        // backgroundColor: 'red',
        marginLeft: 75
    },
    primaryImageSearchContainer: {
        marginLeft: 110
    },
    primaryHeaderImageSearch: {
        height: 25,
        width: 25,
        justifyContent: 'center',
    }
})