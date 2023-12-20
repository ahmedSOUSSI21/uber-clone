import { ScrollView, StyleSheet, View } from 'react-native'
import React from 'react'
import SearchInput from './SearchInput'
import Recent from './Recent'
import Suggestions from './Suggestions'
import More from './More'
import Planification from './Planification'

const Main = () => {
  return (
    <View style={{ flex: 1 }}> 
      <View style={styles.inputContainer}>
        <SearchInput />
      </View>
      <ScrollView>
        <Recent />
        <Suggestions />
        <More />
        <Planification />
      </ScrollView>
    </View>
  )
}

export default Main

const styles = StyleSheet.create({
  text: {
    color: 'white',
    textAlign: 'center'
  },
  inputContainer:{
    paddingVertical: 10,
    marginHorizontal: 20,
  }
})