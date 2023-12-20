import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const More = () => {
    return (
        <View style={styles.container}>
            <View style={styles.more}>
                <Text style={styles.moreText}>En faire plus avec Uber</Text>
            </View>
            <ScrollView style={styles.scrollHorizontal} horizontal>
                <TouchableOpacity style={styles.block}>
                    <View style={styles.iconContainer}>
                        <Image source={require("../../assets/taxi.png")} style={styles.icon} />
                    </View>
                    <Text style={styles.moreText}>Taxis à la demande &#8594;</Text>
                    <Text style={styles.detailText}>Commandez des taxis locaux à la demande</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.block}>
                    <View style={styles.iconContainer}>
                        <Image source={require("../../assets/driver.png")} style={styles.icon} />
                    </View>
                    <Text style={styles.moreText}>Optez pour le confort &#8594;</Text>
                    <Text style={styles.detailText}>Chauffeurs les mieux notés, voitures récentes</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.block}>
                    <View style={styles.iconContainer}>
                        <Image source={require("../../assets/security.png")} style={styles.icon} />
                    </View>
                    <Text style={styles.moreText}>Outils de sécurité &#8594;</Text>
                    <Text style={styles.detailText}>Aide en cas de problème de sécurité pendant la course</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.block}>
                    <View style={styles.iconContainer}>
                        <Image source={require("../../assets/electric-car.png")} style={styles.icon} />
                    </View>
                    <Text style={styles.moreText}>Passez au vert &#8594;</Text>
                    <Text style={styles.detailText}>Déplacez-vous en véhicule éléctrique ou hybride</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
}

export default More

const styles = StyleSheet.create({
    more: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    moreText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18,
    },
    detailText: {
        color: '#fff',
        fontSize: 13,
        maxWidth: 200,
    },
    container: {
        marginHorizontal: 10,
        marginBottom: 20,
    },
    scrollHorizontal: {
        marginVertical: 10,
        paddingVertical: 10,
    },
    icon: {
        width: 150,
        height: 100,
        resizeMode: 'contain',
    },
    iconContainer: {
        borderRadius: 10,
    },
    block: {
        marginHorizontal: 10,
    },
})