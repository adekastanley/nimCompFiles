import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';


export default function SignUoOPtions() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Choose Option </Text>
            {/* top OPtion */}
            <TouchableOpacity style={styles.innerContainers}>
                <Image style={styles.image} source={require('./asserts/faces/professional.png')} />
                <Text style={styles.text}>Professional</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.innerContainers}>
                <Image style={styles.image} source={require('./asserts/faces/client.png')} />
                <Text style={styles.text}>Client</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 40,
        paddingTop: 40,

    },
    title: {
        fontWeight: 'bold',
        fontSize: 20
    },
    innerContainers: {
        flex: 1,
        alignItems: 'center'


    },
    image: {
        width: 300,
        height: 300
    },
    text: {
        color: '#06430D',
        margin: 2,
        fontSize: 15,
    }
})