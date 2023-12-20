import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'

const SearchInput = () => {
    return (
        <View>
            <TextInput placeholder='Saisissez le lieu de prise en charge' placeholderTextColor='#2F2F2F' style={styles.input} />
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
        fontSize: 18,
        fontWeight: 'bold',
    }
})