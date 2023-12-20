import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import data from '../../data/data'

const Recent = () => {
    return (
        <View>

            {
                data.map((item, index) => {
                    return (
                        <TouchableOpacity key={index} style={styles.block}>
                            <Image source={require("../../assets/chronometer.png")} style={styles.image} />
                            <View>
                                <Text style={styles.address}>{item.address}</Text>
                                <Text style={styles.city}>{item.city}</Text>
                            </View>
                        </TouchableOpacity>
                    )
                })
            }
        </View>
    )
}

export default Recent

const styles = StyleSheet.create({
    block: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    image: {
        width: 30,
        height: 30,
        marginRight: 10,
    },
    address: {
        fontWeight: 'bold',
        fontSize: 16,
        color: '#fff',
    },
    city: {
        color: '#ccc',
    }
})