import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';

export default function Respiracao() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Vídeos de Controle de Respiração</Text>

      <View style={styles.videoSection}>
        <Text style={styles.title}>Respiração para acalmar</Text>
        <YoutubePlayer
          height={220}
          videoId={'mPepsJkhIPs'} 
          play={false}
        />
      </View>

      <View style={styles.videoSection}>
        <Text style={styles.title}>Meditação guiada leve</Text>
        <YoutubePlayer
          height={220}
          videoId={'inpok4MKVLM'}
          play={false}
        />
      </View>

      <View style={styles.videoSection}>
        <Text style={styles.title}>Acalmando a ansiedade</Text>
        <YoutubePlayer
          height={220}
          videoId={'ZToicYcHIOU'}
          play={false}
        />
      </View>
      <View style={{height: 40}}/>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  videoSection: {
    marginBottom: 24,
  },
  title: {
    fontSize: 16,
    marginBottom: 8,
    fontWeight: '600',
  },
});
