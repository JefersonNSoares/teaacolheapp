import React from 'react';
import { TouchableOpacity, Text, Image, StyleSheet } from 'react-native';

export default function CardRotinas({ imagem, texto, onPress, concluido = false }) {
  return (
    <TouchableOpacity
      style={[styles.card, concluido && styles.cardConcluido]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Image source={imagem} style={styles.imagem} resizeMode="contain" />
      <Text style={styles.cardTexto}>
        {concluido ? '✅ ' : ''}{texto}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#2ecc71',
    padding: 12,
    borderRadius: 12,
    marginBottom: 16,
    alignItems: 'center',
  },
  cardConcluido: {
    backgroundColor: '#a5d6a7',
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
    textAlign: 'center',
  },
});
