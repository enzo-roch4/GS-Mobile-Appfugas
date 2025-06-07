import React, { useEffect, useState } from 'react';
import {View,Text,FlatList,TextInput,Button,StyleSheet,Alert,KeyboardAvoidingView,Platform,} from 'react-native';

type Rota = {
  id: number;
  descricao: string;
  latitudeA: number;
  longitudeA: number;
};

export default function RotasScreen() {
  const [rotas, setRotas] = useState<Rota[]>([]);
  const [editandoId, setEditandoId] = useState<number | null>(null);
  const [descricao, setDescricao] = useState('');
  const [latitudeA, setLatitudeA] = useState('');
  const [longitudeA, setLongitudeA] = useState('');

  useEffect(() => {
    carregarRotas();
  }, []);

  const carregarRotas = async () => {
    try {
      const response = await fetch('http://10.0.2.2:7040/api/PontoRota/buscar');
      const data = await response.json();
      setRotas(data);
    } catch (error) {
      Alert.alert('Erro ao carregar rotas');
    }
  };

  const atualizarRota = async () => {
    if (!descricao || !latitudeA || !longitudeA || editandoId === null) {
      Alert.alert('Preencha todos os campos para atualizar');
      return;
    }

    const rotaAtualizada = {
      id: editandoId,
      descricao,
      latitudeA: parseFloat(latitudeA),
      longitudeA: parseFloat(longitudeA),
      latitudeB: 0,
      longitudeB: 0
    };

    try {
      await fetch(`http://10.0.2.2:7040/api/PontoRota/atualizar/${editandoId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(rotaAtualizada),
      });

      await carregarRotas();
      setEditandoId(null);
      limparCampos();
    } catch {
      Alert.alert('Erro ao atualizar');
    }
  };

  const deletarRota = async (id: number) => {
    try {
      await fetch(`http://10.0.2.2:7040/api/PontoRota/apagar/${id}`, { method: 'DELETE' });
      await carregarRotas();
    } catch {
      Alert.alert('Erro ao apagar');
    }
  };

  const iniciarEdicao = (rota: Rota) => {
    setEditandoId(rota.id);
    setDescricao(rota.descricao);
    setLatitudeA(rota.latitudeA.toString());
    setLongitudeA(rota.longitudeA.toString());
  };

  const limparCampos = () => {
    setDescricao('');
    setLatitudeA('');
    setLongitudeA('');
  };

  const renderItem = ({ item }: { item: Rota }) => (
    <View style={styles.rotaContainer}>
      {editandoId === item.id ? (
        <>
          <TextInput style={styles.input} value={descricao} onChangeText={setDescricao} placeholder="Descrição" />
          <TextInput style={styles.input} value={latitudeA} onChangeText={setLatitudeA} placeholder="Latitude" keyboardType="numeric" />
          <TextInput style={styles.input} value={longitudeA} onChangeText={setLongitudeA} placeholder="Longitude" keyboardType="numeric" />
          <View style={styles.buttonRow}>
            <Button title="Salvar" onPress={atualizarRota} />
            <Button title="Cancelar" onPress={() => setEditandoId(null)} color="gray" />
          </View>
        </>
      ) : (
        <>
          <Text style={styles.nome}>Rota ID: {item.id}</Text>
          <Text style={styles.descricao}>{item.descricao}</Text>
          <Text>Latitude: {item.latitudeA}</Text>
          <Text>Longitude: {item.longitudeA}</Text>
          <View style={styles.buttonRow}>
            <Button title="Editar" onPress={() => iniciarEdicao(item)} />
            <Button title="Apagar" color="red" onPress={() => deletarRota(item.id)} />
          </View>
        </>
      )}
    </View>
  );

  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <FlatList
        data={rotas}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        contentContainerStyle={{ padding: 20 }}
        ListEmptyComponent={<Text style={{ textAlign: 'center', marginTop: 20 }}>Nenhuma rota cadastrada.</Text>}
      />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  rotaContainer: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: '#EFFFFA',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#007BFF',
  },
  nome: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 6,
    color: '#007BFF',
  },
  descricao: {
    marginBottom: 6,
    color: '#444',
  },
  input: {
    borderWidth: 1,
    borderColor: '#007BFF',
    borderRadius: 6,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
