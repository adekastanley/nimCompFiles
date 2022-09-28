import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';


export default function BottomNavigation() {
    return (

        <View style={styles.container} >
            <TouchableOpacity style={styles.link}>
                <Image source={require('./asserts/icons/home-icon-selected.png')} style={styles.linkImage} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.link}>
                <Image source={require('./asserts/icons/chat.png')} style={styles.linkImage} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.bigLink}>
                <Image style={styles.bigLinkImage} source={require('./asserts/icons/search.png')} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.link}>
                <Image source={require('./asserts/icons/appointment.png')} style={styles.linkImage} />
                <View style={styles.appointmentCountContainer}>
                    <Text style={styles.appointmentCountContainerText}>2</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.link}>
                <Image source={require('./asserts/icons/case.png')} style={styles.linkImage} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'

    },
    link: {

    },
    bigLink: {
    },
    bigLinkImage: {
        width: 70,
        height: 70,
        position: 'relative',
        bottom: 20,

    },
    linkImage: {
        height: 30,
        width: 30,
    },
    appointmentCountContainer: {
        position: 'absolute',
        backgroundColor: '#06430D',
        borderRadius: 30,
        width: 20,
        height: 20,
        left: 18,
        top: -8,
        borderWidth: .5,
        borderColor: '#FFFFFF',
        textAlignVertical: 'center'

    },
    appointmentCountContainerText: {
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#FFFFFF',


    },
})