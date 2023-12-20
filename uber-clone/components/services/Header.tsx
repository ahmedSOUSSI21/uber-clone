import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Services</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
        marginVertical: 10,
    },
    text:{
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',
    }
})