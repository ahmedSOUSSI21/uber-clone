import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const List = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>À venir</Text>
            <View style={styles.activityContainer}>
                <View style={styles.textWithIconContainer}>
                <Text style={styles.text2}>
                    Vous n'avez aucune course planifiée
                </Text>
                <Image source={require("../../assets/booking.png")} style={styles.icon} />
                </View>
                <TouchableOpacity>
                    <Text style={styles.text3}>
                        Réserver votre course  &#8594;
                    </Text>
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
        width: 50,
        height: 50,
        marginRight: 10,
    },
    text2: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#ACB0A3',
        maxWidth: 200,
    },
    text3: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
        maxWidth: 200,
        marginTop: 10,
    }, 
    textWithIconContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    activityContainer:{
        backgroundColor: '#2A2C36',
        borderRadius: 10,
        padding: 20,
    }
})