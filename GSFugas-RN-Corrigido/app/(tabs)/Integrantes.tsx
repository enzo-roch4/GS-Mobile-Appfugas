import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function IntegrantesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Integrantes</Text>
      <View style={styles.listContainer}>
        <Text style={styles.item}>Enzo Franco Rocha <Text style={styles.rm}>RM: 553643</Text></Text>
        <Text style={styles.item}>João Pedro Pereira <Text style={styles.rm}>RM: 553698</Text></Text>
        <Text style={styles.item}>Hebert Santos de Sousa <Text style={styles.rm}>RM: 553227</Text></Text>
      </View>
      <Text style={styles.thankYou}>Obrigado por usar o AppFugas!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8F4FF',
    padding: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#005BBB',
    marginBottom: 30,
  },
  listContainer: {
    width: '100%',
    marginBottom: 40,
  },
  item: {
    fontSize: 18,
    color: '#003F7D',
    marginBottom: 15,
  },
  rm: {
    fontWeight: '600',
    color: '#007BFF',
  },
  thankYou: {
    fontSize: 20,
    color: '#005BBB',
    fontWeight: '600',
    textAlign: 'center',
  },
});
