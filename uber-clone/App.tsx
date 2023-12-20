import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Main from './components/home/Main';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Main/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    flex: 1,
  },
});
