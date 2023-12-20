import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native'
import React from 'react'

const Planification = () => {
  return (
    <View style={styles.container}>
            <View style={styles.more}>
                <Text style={styles.moreText}>Planifiez votre course</Text>
            </View>
            <ScrollView style={styles.scrollHorizontal} horizontal>
                <TouchableOpacity style={styles.block}>
                    <View style={styles.iconContainer}>
                        <Image source={require("../../assets/van.png")} style={styles.icon} />
                    </View>
                    <Text style={styles.moreText}>Vans haut de gamme &#8594;</Text>
                    <Text style={styles.detailText}>Offrez une course de luxe à vos proches</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.block}>
                    <View style={styles.iconContainer}>
                        <Image source={require("../../assets/car-key2.png")} style={styles.icon} />
                    </View>
                    <Text style={styles.moreText}>Location de voiture facile &#8594;</Text>
                    <Text style={styles.detailText}>Prenez le volant, et en route !</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.block}>
                    <View style={styles.iconContainer}>
                        <Image source={require("../../assets/suv.png")} style={styles.icon} />
                    </View>
                    <Text style={styles.moreText}>SUV haut de gamme &#8594;</Text>
                    <Text style={styles.detailText}>Offrez une course de luxe à vos proches</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.block}>
                    <View style={styles.iconContainer}>
                        <Image source={require("../../assets/comfort-zone.png")} style={styles.icon} />
                    </View>
                    <Text style={styles.moreText}>Réservez et détendez-vous &#8594;</Text>
                    <Text style={styles.detailText}>Réservez jusqu'à 90 jours à l'avance</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
  )
}

export default Planification

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
        marginBottom: 100,
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