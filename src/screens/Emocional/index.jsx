import React from 'react';
import{View, Text, Image,StyleSheet, ScrollView, TouchableOpacity} from 'react-native'

export default function Emocional(){
    return(
        <ScrollView style={styles.container}>
          <Text style={styles.Title}>Eu sei que está dificil agora, mas tente clicar e seguir os passos abaixo para acalmar a mente um pouco. Você não está sozinho(a)! Estamos aqui com você!</Text>

          <TouchableOpacity style={styles.botao}>
              <Image source={require('../../../assets/emocional/icone-respiracao.png')} resizeMode="contain" style={styles.image}/>
              <Text style={styles.TitleCard1}>Exercícios de respiração guiada</Text>
          </TouchableOpacity>


          <TouchableOpacity style={styles.botao}>
              <Image source={require('../../../assets/emocional/icone-meditacao.png')} resizeMode="contain" style={styles.image}/>
              <Text style={styles.TitleCard2}>Meditação</Text>
          </TouchableOpacity>

        </ScrollView>
    )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff'},
  Title: {
    fontSize: 18,
    fontWeight: 700
  },
  image: {
    width: 150,
    height: 150
  },
  TitleCard1: {
    width:180,
    fontSize: 18,
    fontWeight: 700,
    borderColor:"black",
    borderWidth: 2,
    padding: 5
  },
  TitleCard2: {
    width:180,
    fontSize: 18,
    fontWeight: 700,
    borderColor:"black",
    borderWidth: 2,
    padding: 5
  },
  botao: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    backgroundColor: "#7acab6",
    marginTop: 50,
    borderRadius: 15

  }
});
