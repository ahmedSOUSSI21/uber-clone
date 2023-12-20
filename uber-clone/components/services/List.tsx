import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const List = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Partout, pour tout</Text>
            <View style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.touchableContainer}>
                    <View style={styles.absolutePromo}>
                        <Text style={styles.absolutePromoText}>
                            Promo
                        </Text>
                    </View>
                    <Image style={styles.icon} source={require("../../assets/car.png")} />
                    <Text style={styles.text}>Course</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.touchableContainer}>
                    <View style={styles.absolutePromo}>
                        <Text style={styles.absolutePromoText}>
                            Promo
                        </Text>
                    </View>
                    <Image style={styles.icon} source={require("../../assets/booking.png")} />
                    <Text style={styles.text}>Réserver</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.touchableContainer2}>
                    <View style={styles.icon2Container}>
                        <Image source={require("../../assets/car-key.png")} style={styles.icon2} />
                    </View>
                    <Text style={styles.text2}>Location</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.touchableContainer2}>
                    <View style={styles.icon2Container}>
                        <Image source={require("../../assets/people.png")} style={styles.icon2} />
                    </View>
                    <Text style={styles.text2}>Course groupée</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.touchableContainer2}>
                    <View style={styles.icon2Container}>
                        <Image source={require("../../assets/bicycle.png")} style={styles.icon2} />
                    </View>
                    <Text style={styles.text2}>Deux roues</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.touchableContainer2}>
                    <View style={styles.icon2Container}>
                        <Image source={require("../../assets/bus.png")} style={styles.icon2} />
                    </View>
                    <Text style={styles.text2}>T. publics</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default List

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
        marginVertical: 20,
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 10,
    },
    icon: {
        width: 60,
        height: 60,
        resizeMode: 'contain',
        marginBottom: 6,
    },
    touchableContainer: {
        backgroundColor: 'gray',
        borderRadius: 20,
        paddingVertical: 20,
        paddingHorizontal: 45,
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
    },
    absolutePromo: {
        backgroundColor: 'green',
        position: 'absolute',
        top: -10,
        right: 50,
        padding: 5,
        borderRadius: 10,
    },
    absolutePromoText: {
        color: 'white',
        fontSize: 13,
    },
    icon2: {
        width: 30,
        height: 30,
        resizeMode: 'contain',
    },
    icon2Container: {
        backgroundColor: 'gray',
        borderRadius: 20,
        padding: 20,
        marginBottom: 6,
    },
    touchableContainer2: {
        marginTop: 20,
        alignItems: 'center',
    }, 
    text2:{
        fontSize: 12,
        fontWeight: 'bold',
        color: 'white',
        maxWidth: 70,
    }
})