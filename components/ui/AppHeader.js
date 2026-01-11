import { StyleSheet, Text, View } from 'react-native';

export default function AppHeader() {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>Mon Application</Text>
    </View>
  );
}

const styles = StyleSheet.create({
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