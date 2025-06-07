import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Dimensions, Alert, ActivityIndicator } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import AsyncStorage from '@react-native-async-storage/async-storage';

type Rota = {
  id: string;
  nomeRota: string;
  descricao: string;
  pontoPartida: string;
  pontoChegada: string;
  latitude?: number;
  longitude?: number;
};

export default function MapasScreen() {
  const [location, setLocation] = useState<Location.LocationObject | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [rotas, setRotas] = useState<Rota[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      // Pede permissão para acessar localização
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permissão para acessar localização negada.');
        setLoading(false);
        return;
      }

      // Pega localização atual
      let loc = await Location.getCurrentPositionAsync({});
      setLocation(loc);

      // Busca rotas cadastradas
      const data = await AsyncStorage.getItem('rotasFuga');
      const lista = data ? JSON.parse(data) : [];
      setRotas(lista);

      setLoading(false);
    })();
  }, []);

  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="#007BFF" />
        <Text>Carregando mapa...</Text>
      </View>
    );
  }

  if (errorMsg) {
    return (
      <View style={styles.centered}>
        <Text style={{ color: 'red' }}>{errorMsg}</Text>
      </View>
    );
  }

  return (
    <MapView
      style={styles.map}
      showsUserLocation
      region={{
        latitude: location?.coords.latitude ?? -23.55052, //São Paulo
        longitude: location?.coords.longitude ?? -46.633308,
        latitudeDelta: 0.05,
        longitudeDelta: 0.05,
      }}
    >
      {rotas.map((rota) =>
        rota.latitude && rota.longitude ? (
          <Marker
            key={rota.id}
            coordinate={{ latitude: rota.latitude, longitude: rota.longitude }}
            title={rota.nomeRota}
            description={rota.descricao}
          />
        ) : null
      )}
    </MapView>
  );
}

const styles = StyleSheet.create({
  map: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
