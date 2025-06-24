import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';

export default function Meditacao() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Sessões de Meditação Guiada</Text>

      <View style={styles.videoSection}>
        <Text style={styles.title}>Meditação para iniciar o dia</Text>
        <YoutubePlayer
          height={220}
          videoId={'inpok4MKVLM'} // substitua conforme necessário
          play={false}
        />
      </View>

      <View style={styles.videoSection}>
        <Text style={styles.title}>Meditação para relaxar o corpo</Text>
        <YoutubePlayer
          height={220}
          videoId={'MIr3RsUWrdo'}
          play={false}
        />
      </View>

      <View style={styles.videoSection}>
        <Text style={styles.title}>Meditação para dormir melhor</Text>
        <YoutubePlayer
          height={220}
          videoId={'ZToicYcHIOU'}
          play={false}
        />
      </View>
      <View style={{height:40}}/>
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
