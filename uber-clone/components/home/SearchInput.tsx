import { StyleSheet, Text, View, TextInput, Image } from 'react-native'
import React from 'react'

const SearchInput = () => {
    return (
        <View>
            <TextInput 
                placeholder='Saisissez le lieu de prise en charge' 
                placeholderTextColor='#2F2F2F' 
                style={styles.input} 
            />
            <Image source={require("../../assets/search.png")} style={styles.searchIcon}/>
        </View>
    )
}

export default SearchInput

const styles = StyleSheet.create({
    input: {
        backgroundColor: '#eee',
        marginVertical: 10,
        padding: 15,
        borderRadius: 50,
        fontSize: 16,
        fontWeight: 'bold',
    }, 
    searchIcon:{
        position: 'absolute',
        width: 20,
        height: 20,
        top: 25,
        right: 22,
    }
})