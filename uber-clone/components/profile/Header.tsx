import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const Header = () => {
    return (
        <View style={styles.nameAndImageContainer}>
            <View style={styles.leftContainer}>
                <Text style={styles.name}>Jean Dupont</Text>
                <View style={styles.rating}>
                    <Image source={require("../../assets/star.png")} style={styles.star}/>
                    <Text style={styles.ratingtext}>4.5</Text>
                </View>
            </View>
            <View style={styles.rightContainer}>
                <Image
                    source={{ uri: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFjZXxlbnwwfHwwfHx8MA%3D%3D" }}
                    style={styles.profilePicture}
                />
            </View>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    name: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
    },
    nameAndImageContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 10,
        marginHorizontal: 10,
    },
    leftContainer: {
        flex: 1,
    },
    rightContainer: {
        marginLeft: 10,
    },
    profilePicture: {
        width: 60,
        height: 60,
        borderRadius: 25,
    }, 
    rating:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: '#2E3248',
        width: 70,
        height: 30,
        borderRadius: 10,
        padding: 5,
    }, 
    ratingtext:{
        color: 'white',
        fontWeight: 'bold',
    },
    star:{
        width: 15,
        height: 15,
        marginRight: 5,
    }
})