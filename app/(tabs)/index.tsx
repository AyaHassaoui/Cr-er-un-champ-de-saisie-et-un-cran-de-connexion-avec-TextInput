import * as React from 'react';
import { StyleSheet, View } from 'react-native';

import AppFooter from '../../components/ui/AppFooter';
import AppHeader from '../../components/ui/AppHeader';
import LoginScreen from '../../components/ui/LoginScreen';
import WelcomeScreen from '../../components/ui/WelcomeScreen';

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <AppHeader />
         <LoginScreen />
        <WelcomeScreen />
      </View>
      <View style={styles.footerContainer}>
        <AppFooter />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333',
  },
  footerContainer: {
    backgroundColor: '#333333',
  },
});