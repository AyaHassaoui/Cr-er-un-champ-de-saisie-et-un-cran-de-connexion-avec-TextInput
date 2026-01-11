import { StyleSheet, Text, View } from 'react-native';

export default function AppFooter() {
  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>© 2024 Mon Application</Text>
      <Text style={styles.footerSubText}>Tous droits réservés</Text>
    </View>
  );
}

const styles = StyleSheet.create({
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