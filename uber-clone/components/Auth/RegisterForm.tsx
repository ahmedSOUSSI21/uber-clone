import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'

const RegisterForm = () => {
    return (
        <>
            <TextInput style={styles.input} placeholder='First Name' placeholderTextColor={"#7F817C"} />
            <TextInput style={styles.input} placeholder='Last Name' placeholderTextColor={"#7F817C"} />
            <TextInput style={styles.input} placeholder='Email' placeholderTextColor={"#7F817C"} />
            <TextInput style={styles.input} placeholder='Password' placeholderTextColor={"#7F817C"} secureTextEntry={true} />
            <TextInput style={styles.input} placeholder='Confirm Password' placeholderTextColor={"#7F817C"} secureTextEntry={true} />
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
        </>
    )
}

export default RegisterForm

const styles = StyleSheet.create({
    input: {
        backgroundColor: 'white',
        width: '100%',
        height: 50,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        color: '#333',
        fontSize: 16,
        padding: 10,
        marginBottom: 10,
    },
    button: {
        backgroundColor: '#000',
        width: '100%',
        height: 50,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 30,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
})