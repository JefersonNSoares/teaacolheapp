import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Audio } from 'expo-av';

const rotinas = [
  { id: 1, titulo: 'ACORDAR', imagem: require('../../../assets/rotina/acordar.png') },
  { id: 2, titulo: 'ESCOVAR OS DENTES', imagem: require('../../../assets/rotina/escovar.png') },
  { id: 3, titulo: 'TOMAR BANHO', imagem: require('../../../assets/rotina/banho.png') },
  { id: 4, titulo: 'TOMAR CAFÉ DA MANHÃ', imagem: require('../../../assets/rotina/cafe.png') },
  { id: 5, titulo: 'IR PARA A ESCOLA', imagem: require('../../../assets/rotina/escola.png') },
];




export default function RotinaScreen() {
  const [concluidos, setConcluidos] = useState([]);
  
  const reproduzirSom = async () => {
    try {
      const { sound } = await Audio.Sound.createAsync(
        require('../../../assets/sounds/success-fanfare-trumpets-6185.mp3') 
      );
      await sound.playAsync();
    } catch (error) {
      console.warn('Erro ao tocar som:', error);
    }
  };

  const aoTocar = (id) => {
    if (!concluidos.includes(id)) {
      setConcluidos([...concluidos, id]);
    }
    reproduzirSom();
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.subtitulo}>
        Agora é hora de fazer suas atividades. Você consegue! Um passo de cada vez.
      </Text>

      {rotinas.map((item) => {
        const feito = concluidos.includes(item.id);
        return (
          <TouchableOpacity
            key={item.id}
            style={[styles.card, feito && styles.cardConcluido]}
            onPress={() => aoTocar(item.id)}
          >
            <Image source={item.imagem} style={styles.imagem} resizeMode="contain" />
            <Text style={styles.cardTexto}>
              {feito ? '✅ ' : ''}{item.titulo}
            </Text>
          </TouchableOpacity>
        );
      })}
      <View style={{marginBottom: 50}}/>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    backgroundColor: '#2196F3',
    color: '#fff',
    textAlign: 'center',
    paddingVertical: 12,
    borderRadius: 8,
    marginBottom: 12,
  },
  subtitulo: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  card: {
    backgroundColor: '#2ecc71',
    padding: 12,
    borderRadius: 12,
    marginBottom: 16,
    alignItems: 'center',
  },
  cardConcluido: {
    backgroundColor: '#a5d6a7', // cor mais clara para indicar concluído
  },
  imagem: {
    width: 80,
    height: 80,
    marginBottom: 10,
  },
  cardTexto: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
