import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SearchInput from './SearchInput'
import Recent from './Recent'
import Suggestions from './Suggestions'
const Main = () => {
  return (
    <View style={styles.container}>
      <SearchInput/>
      <Recent/>
      <Suggestions/>
    </View>
  )
}

export default Main

const styles = StyleSheet.create({
    text:{
        color: 'white',
        textAlign: 'center'
    }, 
    container:{
        paddingVertical: 10,
        marginHorizontal: 20,
    }
})