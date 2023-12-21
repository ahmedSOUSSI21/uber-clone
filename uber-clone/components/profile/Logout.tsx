import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { auth } from '../../core/firebaseConfig'
import { signOut } from 'firebase/auth'
import React from 'react'

const Logout = () => {
  return (
    <TouchableOpacity style={styles.button} onPress={async () => await signOut(auth)}>
        <Text style={styles.buttonText}>Logout</Text>
    </TouchableOpacity>

  )
}

export default Logout

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#fff',
        width: '100%',
        height: 50,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        color: 'white',
        fontSize: 16,
        padding: 10,
        marginBottom: 10,
    }, 
    buttonText: {
        color: '#000',
        fontSize: 18,
    }
})