import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Pressable } from 'react-native';
import React from 'react';


export default function PharmacyCard({ title }) {
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={require('../screenAssets/pharmacyimages/pharma.png')} />
            </View>
            <View style={styles.detailsContainer}>
                <Text style={styles.title}> {title}</Text>
                <Text style={styles.distance}>5km away</Text>
                <View style={styles.iconsContainer}>
                    <TouchableOpacity>
                        <Image style={styles.icons} source={require('../screenAssets/icons/rectangle.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image style={styles.icons} source={require('../screenAssets/icons/rectangle.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image style={styles.icons} source={require('../screenAssets/icons/rectangle.png')} />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.ratingContainer}>
                <Image style={styles.star} source={require('../screenAssets/icons/star.png')} />
                <Text>4.8</Text>
            </View>


        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(6, 67, 13, 0.05)',
        height: 100,
        marginVertical: 10,
        flexDirection: 'row',
        width: '90%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        padding: 10,
        marginLeft: 20

    },
    imageContainer: {
        width: '30%'
    },
    image: {
        width: 80,
        height: 80,

    },
    detailsContainer: {

        width: '50%'

    },

    title: {
        fontWeight: 'bold',
        fontSize: 20,

    },
    distance: {
        marginLeft: 5,
        marginBottom: 5
    },


    iconsContainer: {
        flexDirection: 'row'
    },
    icons: {
        width: 35,
        height: 35,
        marginHorizontal: 5
    },

    ratingContainer: {
        width: '20%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'

    },
    star: {
        marginRight: 5
    },
})