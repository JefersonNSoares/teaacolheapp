import React, { useRef } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Audio } from 'expo-av';
import { botoesComunicador } from './botoesComunicador'; // ajuste o caminho conforme sua estrutura

export default function Home() {
  const soundRef = useRef(null);

  const handleEmotionPress = (emotion) => {
    console.log('Emoção selecionada', `Você selecionou: ${emotion}`);
  };

  const tocarSom = async (som) => {
    if (soundRef.current) {
      await soundRef.current.unloadAsync();
      soundRef.current = null;
    }

    const { sound } = await Audio.Sound.createAsync(som);
    soundRef.current = sound;
    await sound.playAsync();
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Como você se sente hoje?</Text>

      <View style={styles.emojiContainer}>
        <TouchableOpacity onPress={() => handleEmotionPress('Triste')}>
          <Image source={require('../../../assets/emocoes/chorando.png')} style={styles.emoji} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handleEmotionPress('Neutro')}>
          <Image source={require('../../../assets/emocoes/neutro.png')} style={styles.emoji} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handleEmotionPress('Rindo')}>
          <Image source={require('../../../assets/emocoes/rindo.png')} style={styles.emoji} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handleEmotionPress('Sorrindo')}>
          <Image source={require('../../../assets/emocoes/sorrindo.png')} style={styles.emoji} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handleEmotionPress('Muito Feliz')}>
          <Image source={require('../../../assets/emocoes/alegre.png')} style={styles.emoji} />
        </TouchableOpacity>
      </View>

      {/* Bloco de botões comunicadores */}
      <View style={styles.comunicadorContainer}>
        <Text style={styles.sectionTitle}>Comunicador</Text>
        <View style={styles.grid}>
          {botoesComunicador.map((secao) => (
  <View key={secao.sectionTitle} style={styles.section}>
    <Text style={styles.sectionTitle}>{secao.sectionTitle}</Text>
    <View style={styles.grid}>
      {secao.items.map((item) => {
        const Icon = item.iconLib;
        return (
          <TouchableOpacity key={item.id} style={styles.botao} onPress={() => tocarSom(item.sound)}>
            <Icon name={item.iconName} size={32} color="#000" />
            <Text style={styles.label}>{item.label}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  </View>
))}

        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: '#fff',
    flexGrow: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 24,
    textAlign: 'center',
  },
  emojiContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 32,
    gap: 10,
  },
  emoji: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  card: {
    backgroundColor: '#3B0AA1',
    padding: 16,
    borderRadius: 12,
    marginBottom: 24,
  },
  cardText: {
    color: '#fff',
    fontSize: 16,
    lineHeight: 22,
    textAlign: 'justify',
  },
  comunicadorContainer: {
    width: '100%',
    marginTop: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
    alignSelf: 'flex-start',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    rowGap: 16,
    columnGap: 10,
  },
  botao: {
    width: 100,
    height: 100,
    backgroundColor: '#3ab395',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    padding: 6,
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'center',
    color: '#000',
    marginTop: 6,
  },
});