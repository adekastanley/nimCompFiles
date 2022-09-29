import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import BottomNavigation from '../bottomNavigation';

export default function HomeScreen() {
    return (
        <View style={styles.container}>

            {/* the below container covers the  entire top from user image to vitals*/}
            <View style={styles.topOuter}>

                {/* this container covers images location and notification only */}
                <View style={styles.topInner}>
                    <View style={styles.imageContainer} >
                        <Image style={styles.image} source={require('../asserts/doctors/doctorfemale.png')} />
                    </View>

                    <View style={styles.locationContainer}>
                        {/* dommy text added (should be dynamic) also clearity needed for laction... dropdow?? */}
                        <Text style={styles.locationTitleText}>Your Location</Text>
                        <Text style={styles.locationText}>Lagos, Nigeria</Text>
                    </View>

                    <View style={styles.notificationContainer}>
                        <Image style={styles.notificationIcon} source={require('../asserts/icons/bell.png')} />
                        {/* content of bellow should be dynamic */}
                        <Text style={styles.bellCount}>1</Text>
                    </View>
                </View>

                {/* this container starts from the good moring and ends at vitals */}
                <View style={styles.topInnerBottomContainer}>

                    {/* this container has two containers, styles {greeting} and {indecatorContainer} */}
                    <View style={styles.greeting}>
                        <Text style={styles.greetingTop}>Good Moring</Text>
                        <Text style={styles.greetingBottom}>Hi User, how can we help?</Text>
                    </View>
                    {/* this container houses the indicator and feeling sick pill */}
                    <View style={styles.indecatorContainer}>
                        <View style={styles.indicatorInner}>
                            <View style={styles.indecatorCounterContainer}>
                                <Text style={styles.indecatorCounterContainerText}> Time Left</Text>
                                {/* dummy text added, the 2 should be dynamic  */}
                                <Text style={styles.indecatorCounterContainerTime}> {`${2} hrs`} </Text>
                            </View>

                            <View style={styles.indecatorInfoContainer} >
                                <View style={styles.indecatorInfoContainerTop} >
                                    <Text style={styles.indecatorInfoNote}>Take Insulin</Text>
                                    <Text style={styles.indecatorInfoCount}> +2 active</Text>
                                </View>
                                <View style={styles.indecatorInfoBar}>
                                    <View style={styles.indecatorInfoBarProgress}>
                                    </View>
                                </View>
                                <View style={styles.indecatorInfoBarDateContainer}>
                                    {/* date shpuld be dynamic  */}
                                    <Text style={styles.indecatorInfoBarDate} >3:35pm, 1 Jan 2023</Text>
                                </View>
                            </View>

                        </View>
                        {/* this is the indicator note container housing the feeling sick button */}
                        <TouchableOpacity style={styles.indicatorNoteContainer}>
                            <Text style={styles.indicatorNoteText}>
                                Feeling Sick?
                            </Text>
                        </TouchableOpacity>
                    </View>
                    {/* this container houses the vitals */}
                    <View style={styles.vitalsContainer}>
                        <View style={styles.vitalsContainerTop} >
                            <Text style={styles.vitalsContainerTopText}>Your Vitals!</Text>
                            <TouchableOpacity style={styles.vitalsContainerTopButton}>
                                <Image style={styles.vitalsContainerTopButtonIcon} source={require('../asserts/icons/plus.png')} />
                                <Text>Update</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.vitalsContainerBottom}>
                            <View style={styles.vitalsContainerBottomVitals}>

                                <View style={styles.vitalsContainerBottomVitalsWrapper}>
                                    <View style={styles.vitalsContainerBottomVitalsCards}>
                                        <Text style={styles.vitalsContainerBottomVitalsCardsData}>{`${100}bpm`}</Text>
                                        <Text style={styles.vitalsContainerBottomVitalsCardsTitle}>Pulse Rate</Text>
                                    </View>
                                    <View style={styles.vitalsContainerBottomVitalsCards}>
                                        <Text style={styles.vitalsContainerBottomVitalsCardsData}>{`${'97 / 65'}`}</Text>
                                        <Text style={styles.vitalsContainerBottomVitalsCardsTitle}>B/P mmHg</Text>
                                    </View>
                                </View>
                                <View style={styles.vitalsContainerBottomVitalsWrapper}>
                                    <View style={styles.vitalsContainerBottomVitalsCards}>
                                        <Text style={styles.vitalsContainerBottomVitalsCardsData}>{`${140}mg/ dL`}</Text>
                                        <Text style={styles.vitalsContainerBottomVitalsCardsTitle}>Blood Sugar</Text>
                                    </View>
                                    <View style={styles.vitalsContainerBottomVitalsCards}>
                                        <Text style={styles.vitalsContainerBottomVitalsCardsData}>{`${98.6} F`}</Text>
                                        <Text style={styles.vitalsContainerBottomVitalsCardsTitle}>Body Temp</Text>
                                    </View>
                                </View>


                            </View>
                            <View style={styles.vitalsContainerBottomChart}>

                            </View>
                        </View>

                    </View>


                </View>

            </View>
            {/* top navigation styles end here */}


            <ScrollView style={styles.bottom}>
                <View style={styles.vaccinePassportWrapper}>

                    <TouchableOpacity style={styles.vaccinePassport}>
                        <Image style={styles.vaccineImage} source={require('../asserts/images/vaccine.png')} />
                        <Text style={styles.vaccineText}> Vaccine Passport</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.servicesContainer}>
                    <View style={styles.servicesContainerWrapper}>
                        <TouchableOpacity style={styles.servicesContainerCards}>
                            <View style={styles.servicesContainerCardsImagesContainer}>
                                <Image style={styles.servicesContainerCardsImage} source={require('../asserts/images/ambulance.png')} />
                            </View>
                            <View style={styles.servicesContainerCardsTitleContainer}>
                                <Text style={styles.servicesContainerCardsTitleText}> Ambulance</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.servicesContainerCards}>
                            <View style={styles.servicesContainerCardsImagesContainer}>
                                <Image style={styles.servicesContainerCardsImage} source={require('../asserts/images/emergency.png')} />
                            </View>
                            <View style={styles.servicesContainerCardsTitleContainer}>
                                <Text style={styles.servicesContainerCardsTitleText}>Emergency Services</Text>
                            </View>
                        </TouchableOpacity></View>

                    <View style={styles.servicesContainerWrapper}>
                        <TouchableOpacity style={styles.servicesContainerCards}>
                            <View style={styles.servicesContainerCardsImagesContainer}>
                                <Image style={styles.servicesContainerCardsImage} source={require('../asserts/images/doctor.png')} />
                            </View>
                            <View style={styles.servicesContainerCardsTitleContainer}>
                                <Text style={styles.servicesContainerCardsTitleText}> Healthcare</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.servicesContainerCards}>
                            <View style={styles.servicesContainerCardsImagesContainer}>
                                <Image style={styles.servicesContainerCardsImage} source={require('../asserts/images/ambulance.png')} />
                            </View>
                            <View style={styles.servicesContainerCardsTitleContainer}>
                                <Text style={styles.servicesContainerCardsTitleText}>Pharmacy</Text>
                            </View>
                        </TouchableOpacity>
                    </View>






                </View>

            </ScrollView>


            <View style={styles.navigation}>
                <BottomNavigation />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'

    },
    topOuter: {
        backgroundColor: '#06430D',
        height: '42%',

    },
    topInner: {

        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15
    },
    topInnerBottomContainer: {
        alignItems: 'center'
    },

    imageContainer: {
        // the container thats houses the user image
    },



    image: {
        // user image itself 
        height: 40,
        width: 40,
        borderRadius: 60,
        borderColor: 'white',
        borderWidth: 2,

    },
    locationContainer: {
        // color: '#F5F5F5'
        // #F5F5F5
    },
    locationTitleText: {
        color: '#F5F5F5',
        fontSize: 10,
        textAlign: 'center'
    },
    locationText: {
        color: '#F5F5F5',
        fontWeight: 'bold'
    },



    notificationIcon: {
        height: 30,
        width: 30
    },
    notificationContainer: {
        position: 'relative'
    },
    bellCount: {
        fontSize: 10,
        position: 'absolute',
        left: 20,
        backgroundColor: 'red',
        borderRadius: 60,
        width: 18,
        borderWidth: 2,
        borderColor: 'white',
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold'
    },


    greeting: {
        color: '#F5F5F5',
        marginBottom: 10
    },
    greetingTop: {
        color: '#F5F5F5',
        fontSize: 10
    },
    greetingBottom: {
        color: '#F5F5F5',
        fontWeight: 'bold',

    },

    indecatorContainer: {
        // backgroundColor: 'red',
        width: '90%',
        flexDirection: 'row',
        // margin: 10
        justifyContent: 'space-between'
    },
    indicatorInner: {
        flexDirection: 'row',
        width: '70%',
        backgroundColor: '#F5F5F5',
        borderRadius: 10,
        padding: 5,
        justifyContent: 'space-between',
        // backgroundColor: 'blue'
    },
    indecatorCounterContainer: {
        justifyContent: 'space-between',
    },
    indecatorInfoContainer: {
        // backgroundColor: 'red',
        width: 180
    },
    indecatorCounterContainerText: {
        fontWeight: 'bold',
        fontSize: 10,
        color: '#06430D',

    },
    indecatorCounterContainerTime: {
        fontWeight: 'bold',
        fontSize: 10
    },

    indecatorInfoNote: {
        fontSize: 9,
        fontWeight: 'bold'
    },
    indecatorInfoContainerTop: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    indecatorInfoCount: {
        fontSize: 10,
        fontWeight: 'bold',
        backgroundColor: '#C5DFDC',
        borderRadius: 30,
        color: '#06430D',
        marginRight: 3
    },
    indecatorInfoBar: {
        height: 6,
        width: 180,
        backgroundColor: '#D9D9D9',
        borderRadius: 30,
        marginTop: 3
    },
    indecatorInfoBarProgress: {
        height: '100%',
        width: '80%',
        backgroundColor: '#06430D',
        borderRadius: 30,

    },
    indecatorInfoBarDateContainer: {
        marginTop: 1,
    },
    indecatorInfoBarDate: {
        fontSize: 10
    },

    indicatorNoteContainer: {
        backgroundColor: '#FFC107',
        width: '25%',
        fontWeight: 'bold',
        height: '100%',
        borderRadius: 10,
        // justifyContent: 'center'


    },
    indicatorNoteText: {
        fontSize: 10,
        textAlign: 'center',
        textAlignVertical: 'center',
        // alignContent: 'center'
        height: 38,
        fontWeight: 'bold'

    },

    vitalsContainer: {
        marginTop: 20,
        width: '90%',
        height: 170,
        backgroundColor: '#C5DFDC',
        borderRadius: 9,
        padding: 5,
    },

    vitalsContainerTop: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 3
    },
    vitalsContainerTopText: {
        marginLeft: 13,
        fontWeight: 'bold',
        fontSize: 12,
        color: '#06430D',
    },
    vitalsContainerTopButton: {
        fontSize: 12,
        marginRight: 13,
        borderWidth: 1,
        backgroundColor: '#FFFFFF',
        width: 70,
        alignItems: 'center',
        height: 23,
        borderRadius: 10,
        borderColor: '#0000001A',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    vitalsContainerTopButtonIcon: {
        width: 10,
        height: 10
    },
    vitalsContainerBottom: {
        // backgroundColor: 'red',
        height: 130,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    vitalsContainerBottomVitals: {
        height: 120,
        width: '45%',
        justifyContent: 'space-between'

    },
    vitalsContainerBottomVitalsWrapper: {
        flexDirection: 'row',
        height: '45%',
        padding: 1,
        justifyContent: 'space-between',

    },
    vitalsContainerBottomVitalsCards: {
        width: '45%',
        // height: '25%',
        backgroundColor: '#FAFAFA',
        alignItems: 'center',
        borderRadius: 10,
        justifyContent: 'center'


    },
    vitalsContainerBottomChart: {
        backgroundColor: 'green',
        height: 120,
        width: '45%'
    },
    vitalsContainerBottomVitalsCardsData: {
        fontSize: 12,
        fontWeight: 'bold'
    },
    vitalsContainerBottomVitalsCardsTitle: {
        fontSize: 10,
    },

    // location: {

    // },

    //top navigation styles end here




    bottom: {
        backgroundColor: '#F5F5F5',
        height: '50%',
        zIndex: -1,

        marginTop: 60,


    },
    vaccinePassportWrapper: {
        width: '100%',
        alignItems: 'center'
    },
    vaccinePassport: {
        height: 100,
        width: '90%',
        backgroundColor: '#FFC107',
        borderRadius: 15,
        flexDirection: 'row',
        alignItems: 'center'
    },
    vaccineImage: {
        height: 80,
        width: 120
    },
    vaccineText: {
        fontSize: 20,
        fontWeight: 'bold'
    },

    servicesContainer: {
        backgroundColor: '#F5F5F5',
        marginVertical: 10,
        justifyContent: 'center',
        alignItems: 'center'

    },
    servicesContainerWrapper: {
        flexDirection: 'row'
    },
    servicesContainerCards: {
        height: 120,
        width: 180,
        // backgroundColor: 'red',
        // margin: 10
        marginVertical: 10
    },

    servicesContainerCardsImagesContainer: {
        alignItems: 'center'
    },
    servicesContainerCardsTitleContainer: {
        height: 40,
        bottom: 15,
        zIndex: 1,
        position: 'relative',
        backgroundColor: 'rgba(255, 255, 255, .8)',


    },
    servicesContainerCardsImage: {
        width: 170,
        height: 100,


    },
    servicesContainerCardsTitleText: {
        color: '#FF0615',
        textAlign: 'center',
        paddingTop: 20,
        fontWeight: 'bold',


    },

    navigation: {
        // flex: 1,
        backgroundColor: 'white',
        height: '6%',
        marginTop: 'auto',
        justifyContent: 'center'
    },
})



