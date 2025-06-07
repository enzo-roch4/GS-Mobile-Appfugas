import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ScrollView, ActivityIndicator } from 'react-native';

export default function CadastroRotas() {
  const [nomeRota, setNomeRota] = useState('');
  const [descricao, setDescricao] = useState('');
  const [pontoPartida, setPontoPartida] = useState('');
  const [pontoChegada, setPontoChegada] = useState('');
  const [loading, setLoading] = useState(false);

  const handleCadastro = async () => {
    if (!nomeRota || !descricao || !pontoPartida || !pontoChegada) {
      Alert.alert('Preencha todos os campos');
      return;
    }

    setLoading(true);

    const rotaData = {
      id: 0, // ID será gerado automaticamente pela API
      descricao,
      latitudeA: parseFloat(pontoPartida),   // para simular: o ponto partida sendo latitudeA
      longitudeA: parseFloat(pontoChegada),  // para simular: o ponto chegada sendo longitudeA
      latitudeB: 0, 
      longitudeB: 0
    };

    try {
      const response = await fetch('http://10.0.2.2:7040/api/PontoRota/cadastrar', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(rotaData),
      });

      if (response.ok) {
        Alert.alert('Rota cadastrada com sucesso!');
        setNomeRota('');
        setDescricao('');
        setPontoPartida('');
        setPontoChegada('');
      } else {
        const error = await response.text();
        Alert.alert('Erro ao cadastrar', error);
      }
    } catch (error) {
      if (error instanceof Error) {
        Alert.alert('Erro de conexão', error.message);
      } else {
        Alert.alert('Erro de conexão', 'Ocorreu um erro desconhecido.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Cadastro de Rotas de Fuga</Text>

      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Nome da Rota" value={nomeRota} onChangeText={setNomeRota} />
      </View>

      <View style={styles.inputContainer}>
        <TextInput style={[styles.input, { height: 80 }]} placeholder="Descrição" value={descricao} onChangeText={setDescricao} multiline />
      </View>

      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Ponto de Partida (Latitude A)" value={pontoPartida} onChangeText={setPontoPartida} keyboardType="numeric" />
      </View>

      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Ponto de Chegada (Longitude A)" value={pontoChegada} onChangeText={setPontoChegada} keyboardType="numeric" />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleCadastro} disabled={loading}>
        {loading ? <ActivityIndicator color="#fff" /> : <Text style={styles.buttonText}>Cadastrar Rota</Text>}
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flexGrow: 1, justifyContent: 'center', padding: 25, backgroundColor: '#EFFFFA' },
  title: { fontSize: 26, fontWeight: 'bold', color: '#007BFF', textAlign: 'center', marginBottom: 40 },
  inputContainer: { marginBottom: 20, backgroundColor: '#fff', borderRadius: 10, elevation: 3, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.15, shadowRadius: 5 },
  input: { paddingHorizontal: 15, paddingVertical: 12, fontSize: 16 },
  button: { backgroundColor: '#007BFF', paddingVertical: 15, borderRadius: 10, marginTop: 10, alignItems: 'center', elevation: 3 },
  buttonText: { color: '#fff', fontWeight: 'bold', fontSize: 18 },
});
