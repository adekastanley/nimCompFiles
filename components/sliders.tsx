import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

interface Slider {
    title: string;
    note: string;
    //   imageUrl: string
}
export default function Sliders<Slider>({ title, note, imagePath }) {
    let imageLink = './asserts/sliderimages/slider1.png';


    return (
        <View style={styles.container}>
            <Text style={styles.title}> {title}</Text>
            <Text style={styles.note}> {note}</Text>
            <Image style={styles.sldierImage} source={require(imageLink)} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {

        textAlign: 'center',
        width: '100%',
        height: 40,
        fontSize: 30,
        fontWeight: 'bold'

    },
    note: {
        marginTop: 10,
        width: '100%',
        textAlign: 'center'
    },
    sldierImage: {
        marginTop: 30,
        marginBottom: 100,
        width: 300,
        height: 300,


    },
});
