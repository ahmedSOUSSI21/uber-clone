import { StyleSheet, View, ScrollView } from 'react-native'
import React from 'react'
import Header from './Header'

const Profile = () => {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView>
      </ScrollView>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
})