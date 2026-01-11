import { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

// Définition des composants dans le même fichier
const AppHeader = () => (
  <View style={headerStyles.header}>
    <Text style={headerStyles.headerTitle}>Mon Application</Text>
  </View>
);

const AppFooter = () => (
  <View style={footerStyles.footer}>
    <Text style={footerStyles.footerText}>© 2024 Mon Application</Text>
    <Text style={footerStyles.footerSubText}>Tous droits réservés</Text>
  </View>
);

export default function WelcomeScreen() {
  const [firstName, onChangeFirstName] = useState('');

  return (
    <View style={{ flex: 1 }}>
      <AppHeader />
      <ScrollView style={styles.container}>
        <Text style={styles.headerText}>Welcome to My App</Text>
        <Text style={styles.regularText}>
          This is a simple demo application. Please enter your name below.
        </Text>
        
        <TextInput
          style={styles.inputBox}
          value={firstName}
          onChangeText={onChangeFirstName}
          placeholder="First Name"
          placeholderTextColor="#999"
        />
      </ScrollView>
      <AppFooter />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333',
  },
  headerText: {
    padding: 40,
    fontSize: 30,
    color: '#EDEFEE',
    textAlign: 'center',
  },
  regularText: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: '#EDEFEE',
    textAlign: 'center',
  },
  inputBox: {
    height: 40,
    marginHorizontal: 20,
    marginVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#EDEFEE',
    borderRadius: 8,
    fontSize: 18,
    backgroundColor: '#FFFFFF',
    color: '#000000',
  },
});

// Styles pour AppHeader
const headerStyles = StyleSheet.create({
  header: {
    width: '100%',
    height: 80,
    backgroundColor: '#333333',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 30,
    borderBottomWidth: 1,
    borderBottomColor: '#EDEFEE',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#EDEFEE',
  },
});

// Styles pour AppFooter
const footerStyles = StyleSheet.create({
  footer: {
    width: '100%',
    height: 60,
    backgroundColor: '#333333',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#EDEFEE',
    paddingBottom: 10,
  },
  footerText: {
    fontSize: 16,
    color: '#EDEFEE',
  },
  footerSubText: {
    fontSize: 12,
    color: '#999999',
    marginTop: 4,
  },
});