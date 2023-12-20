import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'

const Suggestions = () => {
    return (
        <View style={styles.container}>
            <View style={styles.suggestions}>
                <Text style={styles.suggestionText}>Suggestions</Text>
                <TouchableOpacity>
                    <Text style={styles.toutAfficherText}>Tout afficher</Text>
                </TouchableOpacity>
            </View>
            <ScrollView style={styles.scrollHorizontal} horizontal>
                <TouchableOpacity style={styles.block}>
                    <View style={styles.imageContainer}>
                        <Image source={require("../../assets/car.png")} style={styles.icon} />
                    </View>
                    <Text style={styles.toutAfficherText}>Course</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.block}>
                    <View style={styles.imageContainer}>
                        <Image source={require("../../assets/booking.png")} style={styles.icon} />
                    </View>
                    <Text style={styles.toutAfficherText}>Réserver</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.block}>
                    <View style={styles.imageContainer}>
                        <Image source={require("../../assets/car-key.png")} style={styles.icon} />
                    </View>
                    <Text style={styles.toutAfficherText}>Location</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.block}>
                    <View style={styles.imageContainer}>
                        <Image source={require("../../assets/bicycle.png")} style={styles.icon} />
                    </View>
                    <Text style={styles.toutAfficherText}>Deux roux</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
}

export default Suggestions

const styles = StyleSheet.create({
    suggestions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 10,
    },
    suggestionText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18,
    },
    toutAfficherText: {
        color: '#ccc',
        fontSize: 16,
    },
    container: {
        marginHorizontal: 10,
        marginVertical: 30,
    },
    scrollHorizontal: {
        marginVertical: 10,
        paddingVertical: 10,
    },
    icon: {
        width: 30,
        height: 30,
    },
    imageContainer:{
        backgroundColor: '#eee',
        padding: 10,
        borderRadius: 10,
        marginRight: 10,
    }, 
    block:{
        marginHorizontal: 10,
    },
})