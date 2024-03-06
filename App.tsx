import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Home from './src/views/Home';

function App() {
  return (
    <SafeAreaView style={styles.screem}>
      <Home />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screem: {
    flex: 1,
  },
});
export default App;
