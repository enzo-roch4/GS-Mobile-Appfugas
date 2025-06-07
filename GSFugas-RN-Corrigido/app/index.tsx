import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useRouter } from 'expo-router';

export default function InstructionScreen() {
  const router = useRouter();

  const handleStartLogin = () => {
    router.push('/login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo ao AppFugas!</Text>
      <Text style={styles.subtitle}>
        Seu aplicativo para salvar rotas de fuga em casos de desastres naturais.
      </Text>

      <View style={styles.content}>
        <Text style={styles.info}>
          Use as abas no rodapé para navegar entre as principais funcionalidades do aplicativo.
        </Text>
        <Text style={styles.info}>
          Ao acessar qualquer aba, será solicitado login com e-mail e senha para garantir a segurança.
        </Text>
        <Text style={styles.list}>• Login </Text>
        <Text style={styles.list}>• Consulta de integrantes</Text>
        <Text style={styles.list}>• Cadastro de novas rotas de fuga</Text>
        <Text style={styles.list}>• Mapa com rotas de fuga</Text>
      </View>

      <Button title="Fazer Login para Começar" onPress={handleStartLogin} />

      <Text style={styles.footer}>Desenvolvido para auxiliar em situações de emergência!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EFFFFA',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#007BFF',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 30,
    color: '#333',
    textAlign: 'center',
  },
  content: {
    marginBottom: 40,
    paddingHorizontal: 20,
  },
  info: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 10,
    color: '#444',
  },
  list: {
    fontSize: 16,
    textAlign: 'center',
    color: '#222',
  },
  footer: {
    fontSize: 12,
    color: '#888',
    position: 'absolute',
    bottom: 20,
  },
});
